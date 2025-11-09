// components/MapChart.tsx
// @ts-ignore
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import * as d3geo from "d3-geo";
import { useMemo, useState } from "react";

  
const norm = (s: string) =>
  s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();

type Variant = "default" | "background";

export default function MapChart({
  highlightCountries = [] as string[],
  variant = "default",
}: {
  highlightCountries?: string[];
  variant?: Variant;
}) {
  const width = 800; // más grande para fondo
  const height = 480;
  const highlights = useMemo(() => highlightCountries.map(norm), [highlightCountries]);

  const geoUrl = "https://unpkg.com/world-atlas@2/countries-110m.json";
  const [center, setCenter] = useState<[number, number]>([0, 20]);
  const [zoom, setZoom] = useState(1);

  const fillOn = variant === "background" ? "#86efac" : "#22c55e"; // verde suave vs intenso
  const fillOff = variant === "background" ? "#94a3b8" : "#64748b"; // slate más claro en fondo
  const stroke = variant === "background" ? "rgba(15,23,42,0.25)" : "#0f172a";
  const strokeWidth = variant === "background" ? 0.15 : 0.25;

  return (
    <ComposableMap
      projection="geoEqualEarth"
      width={width}
      height={height}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies, projection }: { geographies: any; projection: any }) => {
          if (projection && highlights.length) {
            const target = geographies.find((g: any) =>
              highlights.includes(norm(g.properties?.name || ""))
            );
            if (target) {
              const path = d3geo.geoPath(projection as any);
              const b = path.bounds(target as any);
              const dx = b[1][0] - b[0][0];
              const dy = b[1][1] - b[0][1];
              const x = (b[0][0] + b[1][0]) / 2;
              const y = (b[0][1] + b[1][1]) / 2;
              const fitK = Math.min(8, 0.9 / Math.max(dx / width, dy / height));
              // sesgo para “un poco menos de zoom”
              const zoomBias = 0.6; // prueba 0.9–0.95
              const k = Math.max(1, fitK * zoomBias);
              const c = (projection as any).invert([x, y]) as [number, number];
              setCenter((prev) =>
                Math.hypot(prev[0] - c[0], prev[1] - c[1]) > 0.1 ? c : prev
              );
              setZoom((prev) => (Math.abs(prev - k) > 0.05 ? k : prev));
            } else {
              if (zoom !== 1) setZoom(1);
              if (center[0] !== 0 || center[1] !== 20) setCenter([0, 20]);
            }
          }

          return (
            <ZoomableGroup center={center} zoom={zoom} minZoom={1} maxZoom={8}>
              {geographies.map((geo: any) => {
                const name = (geo.properties?.name as string) || "";
                const isOn = highlights.includes(norm(name));
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isOn ? fillOn : fillOff}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })}
            </ZoomableGroup>
          );
        }}
      </Geographies>
    </ComposableMap>
  );
}
