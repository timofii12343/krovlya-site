import { useState, useRef, useCallback } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import beforeImage from "@/assets/before-roof.jpg";
import afterImage from "@/assets/after-roof.jpg";

const BeforeAfter = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onHandlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    draggingRef.current = true;
    e.preventDefault(); // важно для мобилки: чтобы не было скролла/выделения
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    e.preventDefault();
    updatePosition(e.clientX);
  };

  const stopDrag = (e?: React.PointerEvent) => {
    draggingRef.current = false;
    if (e) e.preventDefault();
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              До / После
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Сравните результат: от каркаса до готовой кровли
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div
            ref={containerRef}
            className="relative max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden border border-border select-none"
            onPointerMove={onPointerMove}
            onPointerUp={stopDrag}
            onPointerLeave={stopDrag}
            onPointerCancel={stopDrag}
            style={{
              touchAction: "none", // ключ: браузер не будет пытаться скроллить во время перетаскивания
            }}
          >
            {/* AFTER – нижний слой */}
            <img
              src={afterImage}
              alt="После — готовая кровля"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* BEFORE – верхний слой, обрезается маской */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={beforeImage}
                alt="До — каркас без покрытия"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
            </div>

            {/* Линия */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-primary/80 z-10"
              style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
            />

            {/* Ручка — ТОЛЬКО ЗА НЕЁ МОЖНО ТЯНУТЬ */}
            <button
              type="button"
              aria-label="Перетащить ползунок"
              className="absolute z-20 w-11 h-11 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/40 ring-4 ring-background cursor-grab active:cursor-grabbing transition-transform duration-150 hover:scale-110 active:scale-95"
              style={{ left: `${sliderPos}%`, top: "50%", transform: "translate(-50%, -50%)" }}
              onPointerDown={onHandlePointerDown}
              onPointerUp={(e) => {
                stopDrag(e);
                try {
                  e.currentTarget.releasePointerCapture(e.pointerId);
                } catch {}
              }}
              onPointerCancel={(e) => {
                stopDrag(e);
                try {
                  e.currentTarget.releasePointerCapture(e.pointerId);
                } catch {}
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="opacity-90">
                <path
                  d="M5 3L2 8L5 13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 3L14 8L11 13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Метки */}
            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-foreground z-30">
              До
            </div>
            <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary-foreground z-30">
              После
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BeforeAfter;