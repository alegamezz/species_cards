import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import * as d3geo from "d3-geo";
import { useMemo, useState } from "react";

const geoUrl = "https://unpkg.com/world-atlas@2/countries-110m.json";

const norm = (s: string) =>
  s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();

export default function MapChart({ highlightCountries = [] as string[] }) {
  const width = 480;
  const height = 300;
  const highlights = useMemo(() => highlightCountries.map(norm), [highlightCountries]);

  const [center, setCenter] = useState<[number, number]>([0, 20]);
  const [zoom, setZoom] = useState(1);

  return (
    <ComposableMap projection="geoEqualEarth" width={width} height={height} style={{ width: "100%", height: "100%" }}>
      <Geographies geography={geoUrl}>
        {({ geographies, projection }) => {
          if (projection && highlights.length) {
            // encuentra el primer país de la lista que exista en geographies
            const target = geographies.find(g => highlights.includes(norm(g.properties?.name || "")));

            if (target) {
              const path = d3geo.geoPath(projection as any);
              const b = path.bounds(target as any); // [[x0,y0],[x1,y1]]
              const dx = b[1][0] - b[0][0];
              const dy = b[1][1] - b[0][1];
              const x = (b[0][0] + b[1][0]) / 2;
              const y = (b[0][1] + b[1][1]) / 2;
              const k = Math.min(8, 0.9 / Math.max(dx / width, dy / height)); // margen 10%, límite maxZoom
              const c = (projection as any).invert([x, y]) as [number, number];

              // actualiza solo si cambia de forma significativa
              setCenter(prev => (Math.hypot(prev[0] - c[0], prev[1] - c[1]) > 0.1 ? c : prev));
              setZoom(prev => (Math.abs(prev - k) > 0.05 ? k : prev));
            } else {
              // si ninguno coincide, reset
              if (zoom !== 1) setZoom(1);
              if (center[0] !== 0 || center[1] !== 20) setCenter([0, 20]);
            }
          }

          return (
            <ZoomableGroup center={center} zoom={zoom} minZoom={1} maxZoom={8}>
              {geographies.map((geo) => {
                const name = (geo.properties?.name as string) || "";
                const isOn = highlights.includes(norm(name));
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isOn ? "#22c55e" : "#64748b"}
                    stroke="#0f172a"
                    strokeWidth={0.25}
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
