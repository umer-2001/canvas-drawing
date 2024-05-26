"use client";
import Image from "next/image";
import { fabric } from "fabric";
import { useRef, useEffect } from "react";
import {
  handleCanvasMouseDown,
  initializeFabric,
  handleResize,
} from "@/lib/canvas";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | any>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef<Boolean>(false);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>(null);

  useEffect(() => {
    const canvas = initializeFabric({ fabricRef, canvasRef });
    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef,
      });
    });
    window.addEventListener("resize", () => {
      handleResize({ fabricRef });
    });
  }, []);

  return (
    <main className="flex w-screen h-screen flex-col items-center justify-between p-24">
      <div
        id="canvas"
        className="w-[750px] h-[550px] border-2 border-slate-300"
      >
        <canvas ref={canvasRef} />
      </div>
    </main>
  );
}
