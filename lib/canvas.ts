import { fabric } from "fabric";
import React from "react";
import { CanvasMouseDown } from "@/types/type";

// import { v4 as uuid4 } from "uuid";

export const initializeFabric = ({
  fabricRef,
  canvasRef,
}: {
  fabricRef: React.MutableRefObject<fabric.Canvas | null>;
  canvasRef: React.MutableRefObject<HTMLCanvasElement>;
}) => {
  const canvasElement = document.getElementById("2d");
  // create fabric canvas
  const canvas = new fabric.Canvas(canvasRef.current, {
    width: canvasElement?.clientWidth,
    height: canvasElement?.clientHeight,
  });
  // set canvas reference to fabricRef so we can use it later anywhere outside canvas listener

  fabricRef.current = canvas;
  return canvas;
};

export const handleCanvasMouseDown = ({
  options,
  canvas,
  isDrawing,
  shapeRef,
  selectedShapeRef,
}: CanvasMouseDown) => {
  // get pointer coordinates
  const pointer = canvas.getPointer(options.e);
  /**
   * get target object i.e., the object that is clicked
   * findtarget() returns the object that is clicked
   *
   * findTarget: http://fabricjs.com/docs/fabric.Canvas.html#findTarget
   */
  const target = canvas.findTarget(options.e, false);
  // set canvas drawing mode to false
  canvas.isDrawingMode = false;


  if (selectedShapeRef.current === "freeform") {
    return
  }
  else{
    isDrawing.current = true;

    // create custom fabric object/shape and set it to shapeRef
   
    shapeRef.current = createSha
  }
};

// resize canvas dimensions on window resizec

export const handleResize = ({ canvas }: { canvas: fabric.Canvas | null }) => {
  const canvasElement = document.getElementById("canvas");
  if (!canvasElement || !canvas) return;

  canvas.setDimensions({
    width: canvasElement.clientWidth,
    height: canvasElement.clientHeight,
  });
};
