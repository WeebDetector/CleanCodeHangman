import React from "react"

interface Props {
    drawingState: number
}

const DRAWING_COLOR: string = "#000000"
const STROKE_WIDTH: string = "3px"
const DRAWING_COORDS_ARRAY = [
    [100, 350, 380, 350],
    [130, 350, 130, 100],
    [130, 130, 180, 100],
    [280, 100, 280, 130],
    [280, 150, 20],
    [280, 170, 280, 270],
    [280, 190, 250, 235],
    [280, 190, 310, 235],
    [280, 270, 250, 315],
    [280, 270, 310, 315],
];

function drawALine(x1: number, y1: number, x2: number, y2: number): JSX.Element {
    return (
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={DRAWING_COLOR} strokeWidth={STROKE_WIDTH}/>
    )
}

function drawACircle(cx: number, cy: number, r: number): JSX.Element {
    return (
        <circle cx={cx} cy={cy} r={r} stroke={DRAWING_COLOR} strokeWidth={STROKE_WIDTH} fillOpacity="0"/>
    )
}

function drawNext(indexToDraw: number): JSX.Element {
    const CoordsArray = DRAWING_COORDS_ARRAY[indexToDraw];
    let drawing: JSX.Element;
    if (indexToDraw === 4) {
        drawing = drawACircle(CoordsArray[0], CoordsArray[1], CoordsArray[2])
    } else {
        drawing = drawALine(CoordsArray[0], CoordsArray[1], CoordsArray[2], CoordsArray[3])
    }
    return drawing;
}
 
/*
<line x1="100" y1="350" x2="380" y2="350" stroke={DRAWING_COLOR} strokeWidth={STROKE_WIDTH}/>
            <line x1="130" y1="350" x2="130" y2="100" stroke={DRAWING_COLOR} strokeWidth={STROKE_WIDTH}/>
            <line x1="130" y1="130" x2="180" y2="100" stroke={DRAWING_COLOR} strokeWidth={STROKE_WIDTH}/>
            <line x1="130" y1="100" x2="280" y2="100" stroke={DRAWING_COLOR} strokeWidth={STROKE_WIDTH}/>
            <line x1="280" y1="100" x2="280" y2="130" stroke={DRAWING_COLOR} strokeWidth={STROKE_WIDTH}/>
            <circle cx="280" cy="150" r="20" stroke={DRAWING_COLOR} strokeWidth={STROKE_WIDTH} fillOpacity="0"/>
            <line x1="280" y1="170" x2="280" y2="270" stroke={DRAWING_COLOR} strokeWidth={STROKE_WIDTH}/>
            <line x1="280" y1="190" x2="250" y2="235" stroke={DRAWING_COLOR} strokeWidth={STROKE_WIDTH}/>
            <line x1="280" y1="190" x2="310" y2="235" stroke={DRAWING_COLOR} strokeWidth={STROKE_WIDTH}/>
            <line x1="280" y1="270" x2="250" y2="315" stroke={DRAWING_COLOR} strokeWidth={STROKE_WIDTH}/>
            <line x1="280" y1="270" x2="310" y2="315" stroke={DRAWING_COLOR} strokeWidth={STROKE_WIDTH}/>
*/

export const HangmanIllustration = ({ drawingState }: Props) => {
    const newDrawing = drawNext(drawingState)
    return (
        <svg height="370" width="400" viewBox="90 90 400 370">
            {newDrawing}
        </svg>
    )
}