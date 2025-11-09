import React from "react";

// Orden UICN de peor a mejor: EX, EW, CR, EN, VU, NT, LC
const IUCN_ORDER = ["EX", "EW", "CR", "EN", "VU", "NT", "LC"] as const;
type IucnCode = (typeof IUCN_ORDER)[number];

// Descripciones oficiales en español (texto corto)
const IUCN_LABELS: Record<IucnCode, string> = {
  EX: "Extinto",
  EW: "Extinto en estado silvestre",
  CR: "En peligro crítico",
  EN: "En peligro",
  VU: "Vulnerable",
  NT: "Casi amenazado",
  LC: "Preocupación menor",
};

// Colores por tramo (puedes ajustar paleta)
const IUCN_COLORS: Record<IucnCode, string> = {
  EX: "#475569", // slate-600
  EW: "#64748b", // slate-500
  CR: "#fb7185", // rose-400
  EN: "#f59e0b", // amber-500
  VU: "#fbbf24", // amber-400
  NT: "#a3e635", // lime-400
  LC: "#22c55e", // emerald-500
};

interface ConservationBarProps {
  status: IucnCode; // EX | EW | CR | EN | VU | NT | LC
  showLabel?: boolean; // Muestra el label a la derecha
  compact?: boolean; // Variante compacta
  className?: string; // Clases extra del contenedor
  ariaLabel?: string; // Etiqueta accesible del componente
}

/**
 * Barra de conservación UICN con hitos EX–EW–CR–EN–VU–NT–LC.
 * - Muestra una barra con marcadores circulares fijos y un relleno progresivo hasta la categoría actual.
 * - Incluye un tooltip simple por paso y estado visual del "paso actual".
 * - Accesibilidad: role="list" para los hitos y aria-current="true" en el hito actual.
 */
const ConservationBar: React.FC<ConservationBarProps> = ({
  status,
  showLabel = true,
  compact = false,
  className = "",
  ariaLabel = "Estado de conservación (UICN)",
}) => {
  const currentIndex = IUCN_ORDER.indexOf(status);
  const percent = (currentIndex / (IUCN_ORDER.length - 1)) * 100;
  const currentColor = IUCN_COLORS[status];

  // Texto accesible
  const statusText = `${status}: ${IUCN_LABELS[status]}`;

  return (
    <div
      className={`flex flex-col items-stretch gap-2 ${className}`}
      aria-label={ariaLabel}
    >
      {/* Contenedor barra (más corto) */}
      <div className="relative mx-auto w-full min-w-[200px] max-w-[420px]">
        {/* Pista */}
        <div
          className={`
              h-2 w-full rounded-full bg-slate-700/50
              backdrop-blur-[1px]
            `}
        />
        {/* Relleno hasta el estado */}
        <div
          className="absolute left-0 top-0 h-2 rounded-full transition-[width] duration-500 ease-out"
          style={{
            width: `${percent}%`,
            background: `linear-gradient(90deg, ${currentColor} 0%, ${currentColor} 70%, rgba(255,255,255,0.6) 100%)`,
            boxShadow: `0 0 10px ${currentColor}44`,
          }}
          role="img"
          aria-label={statusText}
        />

        {/* Hitos (EX–EW–CR–EN–VU–NT–LC) */}
        <ol
          className="absolute inset-0 flex items-center justify-between px-0.5"
          role="list"
          aria-label="Categorías UICN"
        >
          {IUCN_ORDER.map((code, idx) => {
            const reached = idx <= currentIndex;
            const isCurrent = idx === currentIndex;
            const dotColor = reached
              ? IUCN_COLORS[code]
              : "rgba(148,163,184,0.6)";
            const borderColor = reached
              ? `${IUCN_COLORS[code]}AA`
              : "rgba(148,163,184,0.35)";
            return (
              <li
                key={code}
                className="relative group"
                aria-current={isCurrent ? "true" : undefined}
                role="listitem"
              >
                {/* Punto */}
                <div
                  className="
                      h-3.5 w-3.5 rounded-full
                      transition-all duration-300
                      ring-2
                    "
                  style={{
                    background: dotColor,
                    boxShadow: isCurrent
                      ? `0 0 0 4px ${dotColor}22, 0 0 12px ${dotColor}55`
                      : "none",
                    transform: isCurrent ? "scale(1.05)" : "scale(1)",
                    borderColor,
                  }}
                />
                {/* Código bajo el punto (compacto los oculta) */}
                {!compact && (
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] tracking-wide text-slate-400">
                    {code}
                  </div>
                )}
                {/* Tooltip simple al hover (texto completo) */}
                <div
                  className="
                      pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2
                      whitespace-nowrap rounded-md bg-slate-900/90 px-2 py-1
                      text-[11px] text-slate-200 shadow-lg opacity-0
                      transition-opacity duration-200 group-hover:opacity-100
                    "
                  role="tooltip"
                >
                  {code}: {IUCN_LABELS[code]}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Label debajo, más pequeño */}
      {showLabel && (
        <div className="mx-auto mt-5">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium"
            style={{
              color: "#e5e7eb",
              background: "rgba(148,163,184,0.12)",
              border: "1px solid rgba(148,163,184,0.22)",
            }}
            aria-live="polite"
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{
                background: currentColor,
                boxShadow: `0 0 6px ${currentColor}66`,
              }}
              aria-hidden
            />
            {status}: {IUCN_LABELS[status]}
          </span>
        </div>
      )}
    </div>
  );
};

export default ConservationBar;
