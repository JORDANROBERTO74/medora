"use client";

import { useEffect, useRef, useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 4;
const ZOOM_STEP = 1.5;

/**
 * A reading figure that opens an image-only preview: no caption, no frame,
 * just the picture on black with zoom controls floating over it.
 */
export function ZoomableImage({
  src,
  alt,
}: {
  src?: string;
  alt?: string | null;
}) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [natural, setNatural] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    lockScroll()
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      unlockScroll()
    }
  }, [open])

  if (!src) return null

  const openPreview = () => {
    setZoom(1);
    setOpen(true);
  };

  const step = (factor: number) =>
    setZoom((current) =>
      Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, current * factor)),
    );

  const zoomed = zoom !== 1 && natural > 0;

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        role="button"
        tabIndex={0}
        aria-label={`Ampliar imagen${alt ? `: ${alt}` : ""}`}
        onClick={openPreview}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openPreview();
          }
        }}
        className="my-5 w-full cursor-zoom-in rounded-2xl border border-slate-100"
      />
      {open && (
        <>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Vista previa de imagen"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex overflow-auto bg-black/95"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt ?? ""}
              onLoad={(event) => setNatural(event.currentTarget.naturalWidth)}
              onClick={(event) => event.stopPropagation()}
              style={zoomed ? { width: natural * zoom } : undefined}
              className={`m-auto shrink-0 ${zoomed ? "max-w-none" : "max-h-full max-w-full"}`}
            />
          </div>
          <div className="fixed inset-x-0 bottom-5 z-50 flex justify-center">
            <div className="flex items-center gap-1 rounded-full bg-black/70 p-1.5 text-white shadow-lg">
              <button
                type="button"
                aria-label="Alejar"
                onClick={() => step(1 / ZOOM_STEP)}
                className="flex size-9 cursor-pointer items-center justify-center rounded-full hover:bg-white/15"
              >
                <Minus className="size-4" />
              </button>
              <span className="w-12 text-center text-xs font-black tabular-nums">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                aria-label="Acercar"
                onClick={() => step(ZOOM_STEP)}
                className="flex size-9 cursor-pointer items-center justify-center rounded-full hover:bg-white/15"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            aria-label="Cerrar vista previa"
            onClick={() => setOpen(false)}
            className="fixed right-4 top-4 z-50 flex size-11 cursor-pointer items-center justify-center rounded-full bg-black/70 text-white shadow-lg hover:bg-white/15"
          >
            <X className="size-5" />
          </button>
        </>
      )}
    </>
  );
}
