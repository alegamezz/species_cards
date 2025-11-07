import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://unpkg.com/world-atlas@2/countries-110m.json";

export default function PruebaMapa() {
  const highlight = new Set(["spain"]); // nombres en minúscula a comparar
  return (
    <div style={{ width: 480, height: 300, background: "#111", padding: 8 }}>
      <span style={{ color: "#fff" }}>Mapa de Prueba</span>
      <ComposableMap
        projection="geoEqualEarth"
        width={480}
        height={300}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo) => {
              const name = (geo.properties?.name as string) || "";
              const isOn = highlight.has(name.toLowerCase());
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isOn ? "#22c55e" : "#64748b"}
                  stroke="#0f172a"
                  strokeWidth={0.25}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
