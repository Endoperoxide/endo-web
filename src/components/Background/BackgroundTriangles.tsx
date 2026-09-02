import { useMemo } from "react";

type Properties = {
  scrollOffset?: number;
  parallaxFactor?: number;
  triangleSize?: number;
  stroke?: string;
  strokeWidth?: number;
  edgeFade?: number;
  borderWidth?: number;
};

export default function BackgroundTriangles({
  scrollOffset = 0,
  parallaxFactor = 0.15,
  triangleSize = 250,
  stroke = "var(--color-border-base)",
  strokeWidth = 1,
  edgeFade = 0.1,
  borderWidth = 1,
}: Properties) {
  const side = triangleSize;
  const rowHeight = (side * Math.sqrt(3)) / 2;
  const columnWidth = side;
  const patternHeight = rowHeight * 2;

  const shiftY = useMemo(() => {
    const raw = -(scrollOffset * parallaxFactor);

    return ((raw % patternHeight) + patternHeight) % patternHeight;
  }, [scrollOffset, parallaxFactor, patternHeight]);

  const patternId = "triangle-grid";
  const maskId = "triangle-edge-fade";
  const fadeStop = `${edgeFade * 100}%`;

  return (
    <svg className="pointer-events-none absolute h-full w-full overflow-hidden">
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={columnWidth}
          height={patternHeight}
          patternUnits="userSpaceOnUse"
          patternTransform={`translate(0, ${shiftY})`}
        >
          {/* Horizontal rows */}
          <line
            x1="0"
            y1="0"
            x2={columnWidth}
            y2="0"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <line
            x1="0"
            y1={rowHeight}
            x2={columnWidth}
            y2={rowHeight}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />

          {/* Upper pair of triangles */}
          <polyline
            points={`0,0 ${columnWidth / 2},${rowHeight} ${columnWidth},0`}
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />

          {/* Lower pair of triangles */}
          <polyline
            points={`0,${patternHeight} ${columnWidth / 2},${rowHeight} ${columnWidth},${patternHeight}`}
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </pattern>

        <linearGradient id={`${maskId}-gradient`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="black" />
          <stop offset={fadeStop} stopColor="white" />
          <stop offset={`${100 - edgeFade * 100}%`} stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </linearGradient>

        <mask id={maskId}>
          <rect width="100%" height="100%" fill={`url(#${maskId}-gradient)`} />
        </mask>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill={`url(#${patternId})`}
        mask={`url(#${maskId})`}
      />

      <g mask={`url(#${maskId})`}>
        <line
          x1="0"
          y1={borderWidth / 2}
          x2="100%"
          y2={borderWidth / 2}
          stroke={stroke}
          strokeWidth={borderWidth}
        />
        <line
          x1="0"
          y1={`calc(100% - ${borderWidth / 2}px)`}
          x2="100%"
          y2={`calc(100% - ${borderWidth / 2}px)`}
          stroke={stroke}
          strokeWidth={borderWidth}
        />
      </g>
    </svg>
  );
}
