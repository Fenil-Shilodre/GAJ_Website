import { useEffect, useRef } from "react";

type GeneratedHeroVideoProps = {
  className?: string;
};

/**
 * Creates a lightweight, industrial "motion video" from a canvas stream.
 * This avoids shipping a real video file while still using a <video> element.
 */
export default function GeneratedHeroVideo({ className }: GeneratedHeroVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let raf = 0;
    let running = true;

    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
    };

    resize();
    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    // Capture a "video" stream from canvas and attach it.
    const stream = canvas.captureStream(30);
    // @ts-expect-error srcObject exists in modern browsers
    video.srcObject = stream;

    // Some browsers require an explicit play() after attaching a stream.
    void video.play().catch(() => {
      // If autoplay is blocked, the overlay keeps the hero readable.
    });

    const start = performance.now();

    // Deterministic pseudo-random (stable visuals).
    let seed = 1337;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const nodes = Array.from({ length: 42 }).map((_, i) => ({
      x: rand(),
      y: rand(),
      r: 0.6 + rand() * 1.2,
      s: 0.25 + rand() * 0.6,
      p: i * 0.07 + rand() * 2,
    }));

    const draw = (t: number) => {
      if (!running) return;
      const time = (t - start) / 1000;
      const w = canvas.width;
      const h = canvas.height;

      // Background gradient (steel + blueprint vibe)
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "#05080c");
      g.addColorStop(0.45, "#0b1220");
      g.addColorStop(1, "#070b12");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Subtle grid
      ctx.save();
      ctx.globalAlpha = 0.12;
      ctx.strokeStyle = "#1e3a5f";
      ctx.lineWidth = 1 * dpr;
      const step = 48 * dpr;
      for (let x = (time * 18 * dpr) % step; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = (time * 14 * dpr) % step; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.restore();

      // Moving glow paths
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const n of nodes) {
        const px = (n.x + Math.sin(time * n.s + n.p) * 0.06) * w;
        const py = (n.y + Math.cos(time * (n.s * 0.9) + n.p) * 0.06) * h;
        const rr = (Math.min(w, h) / 9) * n.r;
        const rg = ctx.createRadialGradient(px, py, 0, px, py, rr);
        rg.addColorStop(0, "rgba(34, 211, 238, 0.16)");
        rg.addColorStop(0.35, "rgba(99, 102, 241, 0.10)");
        rg.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = rg;
        ctx.beginPath();
        ctx.arc(px, py, rr, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Vignette for readability
      ctx.save();
      const vg = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.15, w / 2, h / 2, Math.max(w, h) * 0.65);
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      stream.getTracks().forEach((tr) => tr.stop());
      // @ts-expect-error srcObject exists in modern browsers
      video.srcObject = null;
    };
  }, []);

  return (
    <div className={className}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-0" />
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

