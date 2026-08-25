import { useEffect, useMemo, useRef, useState } from "react";

type Properties = {
  offset?: number;
  parallaxFactor?: number;
  triangleSize?: number;
  stroke?: string;
  strokeWidth?: number;
  edgeFade?: number;
  borderWidth?: number;
  autoScroll?: boolean;
  autoScrollSpeed?: number;
};

export default function TriangleBackground({
  offset: offsetProp = 0,
  parallaxFactor = 0.15,
  triangleSize = 250,
  stroke = "var(--color-border-base)",
  strokeWidth = 1,
  edgeFade = 0.1,
  borderWidth = 1,
  autoScroll = false,
  autoScrollSpeed = 40,
}: Properties) {
  const side = triangleSize;
  const rowHeight = (side * Math.sqrt(3)) / 2;
  const columnWidth = side;

  const [autoOffset, setAutoOffset] = useState(0);
  const frameRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!autoScroll) return;

    const tick = (time: number) => {
      if (lastTimeRef.current === undefined) {
        lastTimeRef.current = time;
      }
      const deltaSeconds = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      setAutoOffset((prev) => prev + autoScrollSpeed * deltaSeconds);
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      lastTimeRef.current = undefined;
    };
  }, [autoScroll, autoScrollSpeed]);

  const offset = autoScroll ? autoOffset : offsetProp;

  const shiftX = useMemo(() => {
    const raw = -(offset * parallaxFactor);

    return ((raw % columnWidth) + columnWidth) % columnWidth;
  }, [offset, parallaxFactor, columnWidth]);

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
          height={rowHeight * 2}
          patternUnits="userSpaceOnUse"
          patternTransform={`translate(${shiftX}, 0)`}
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
            points={`0,${rowHeight * 2} ${columnWidth / 2},${rowHeight} ${columnWidth},${rowHeight * 2}`}
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
