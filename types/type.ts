import { fabric } from "fabric";
import React from "react";

export type CanvasMouseDown = {
  options: fabric.IEvent;
  canvas: fabric.Canvas;
  isDrawing: React.MutableRefObject<boolean>;
  selectedShapeRef: React.MutableRefObject<fabric.Object | null>;
  shapeRef: React.MutableRefObject<fabric.Object | null>;
};

export interface CustomFabricObject<T extends fabric.Object>
  extends fabric.Object {
  objectId?: string;
}
