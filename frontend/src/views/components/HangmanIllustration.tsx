import React from "react";

const DRAWING_COLOR: string = "#000000";
const STROKE_WIDTH: string = "3px";
const DRAWING_COORDS_ARRAY = [
  [200, 350, 200, 100],
  [200, 100, 310, 100],
  [200, 130, 230, 100],
  [310, 100, 310, 130],
  [310, 150, 20],
  [310, 170, 310, 270],
  [310, 190, 280, 235],
  [310, 190, 340, 235],
  [310, 270, 280, 315],
  [310, 270, 340, 315],
];

interface Props {
  drawingState: number;
}

function drawALine(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  lineNumber: number
): JSX.Element {
  return (
    <line
      key={lineNumber}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={DRAWING_COLOR}
      strokeWidth={STROKE_WIDTH}
    />
  );
}

function drawACircle(cx: number, cy: number, r: number): JSX.Element {
  return (
    <circle
      key="head"
      cx={cx}
      cy={cy}
      r={r}
      stroke={DRAWING_COLOR}
      strokeWidth={STROKE_WIDTH}
      fillOpacity="0"
    />
  );
}

function drawToIndex(indexToDrawTo: number): JSX.Element[] {
  const drawings: JSX.Element[] = [];
  for (let i = 0; i < indexToDrawTo; i++) {
    const CoordsArray = DRAWING_COORDS_ARRAY[i];
    let drawing: JSX.Element;
    if (i === 4) {
      drawing = drawACircle(CoordsArray[0], CoordsArray[1], CoordsArray[2]);
    } else {
      drawing = drawALine(
        CoordsArray[0],
        CoordsArray[1],
        CoordsArray[2],
        CoordsArray[3],
        i
      );
    }
    drawings.push(drawing);
  }
  return drawings;
}

export const HangmanIllustration = ({ drawingState }: Props) => {
  const drawings = drawToIndex(drawingState);
  return (
    <svg height="370" width="400" viewBox="90 90 400 370">
      {drawALine(180, 350, 380, 350, 0)}
      {drawings}
    </svg>
  );
};
