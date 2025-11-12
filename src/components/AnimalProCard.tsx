import React from "react";
import MapChart from "./MapChart";
import ConservationBar from "./ConservationBar";

/* Iconos react-icons */
import {
  WiHumidity,
  WiThermometer,
  WiMoonWaningCrescent3,
  WiDaySunny,
} from "react-icons/wi";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineTimelapse } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { BsSunsetFill } from "react-icons/bs";

type IucnCode = "EX" | "EW" | "CR" | "EN" | "VU" | "NT" | "LC";

type Env = {
  temperature_min_c?: number | null;
  temperature_max_c?: number | null;
  humidity_min_pct?: number | null;
  humidity_max_pct?: number | null;
  lifespan_years_min?: number | null;
  lifespan_years_max?: number | null;
  length_adult_cm_min?: number | null;
  length_adult_cm_max?: number | null;
  activity?: "diurno" | "nocturno" | "crepuscular" | null;
};

interface AnimalProCardProps {
  name: string;
  scientificName: string;
  image: string;
  habitat: string;
  diet: string;
  status: IucnCode;
  countries?: string[];
  location?: string;
  breeding?: string;
  env?: Env;
}

const titleCls = "text-[13px] md:text-[14px] font-semibold text-white";
const valueCls = "text-[12px] md:text-[12px] font-semibold text-slate-300";

const IconWrap: React.FC<{ children: React.ReactNode; label?: string }> = ({
  children,
  label = "-",
}) => (
  <div className="flex flex-col items-center w-12">
    <div className="text-slate-200">{children}</div>
    <span className="mt-1 text-[10px] sm:text-[11px] leading-none font-semibold text-slate-400 whitespace-nowrap truncate max-w-[3.25rem]">
      {label ?? "-"}
    </span>
  </div>
);

/* Helpers de formato */
const fmtRange = (min?: number | null, max?: number | null, unit = "") => {
  const hasMin = typeof min === "number";
  const hasMax = typeof max === "number";
  if (hasMin && hasMax) return `${min}–${max}${unit}`;
  if (hasMin) return `${min}${unit}`;
  if (hasMax) return `${max}${unit}`;
  return "-";
};

const fmtTemp = (e?: Env) =>
  fmtRange(e?.temperature_min_c, e?.temperature_max_c, " ºC");
const fmtHum = (e?: Env) => fmtRange(e?.humidity_min_pct, e?.humidity_max_pct, " %");
const fmtLife = (e?: Env) =>
  fmtRange(e?.lifespan_years_min, e?.lifespan_years_max, " a");

// Longitud: usa m si alguno >= 100 cm
const fmtLen = (e?: Env) => {
  const min = e?.length_adult_cm_min ?? null;
  const max = e?.length_adult_cm_max ?? null;
  const needsMeters =
    (typeof min === "number" && min >= 100) ||
    (typeof max === "number" && max >= 100);

  if (needsMeters) {
    const toM = (v?: number | null) =>
      typeof v === "number" ? +(v / 100).toFixed(2) : null;
    const minM = toM(min);
    const maxM = toM(max);
    const hasMin = typeof minM === "number";
    const hasMax = typeof maxM === "number";
    if (hasMin && hasMax) return `${minM}–${maxM} m`;
    if (hasMin) return `${minM} m`;
    if (hasMax) return `${maxM} m`;
    return "-";
  }

  return fmtRange(min, max, " cm");
};

// Icono por actividad
const ActivityIcon: React.FC<{ activity: Env["activity"] }> = ({ activity }) => {
  if (activity === "diurno") return <WiDaySunny className="w-7 h-7" />;
  if (activity === "nocturno") return <WiMoonWaningCrescent3 className="w-7 h-7" />;
  if (activity === "crepuscular") return <BsSunsetFill className="w-7 h-7" />;
  return <MdOutlineTimelapse className="w-7 h-7" />;
};

const AnimalProCard: React.FC<AnimalProCardProps> = ({
  name,
  scientificName,
  image,
  habitat,
  diet,
  status,
  countries = [],
  breeding,
  env,
}) => {
  const [isTapped, setIsTapped] = React.useState(false);

  return (
    <div className="w-full flex justify-center items-center px-2">
      {/* Contenedor responsive con diferentes tamaños según breakpoint */}
      <div 
        className="relative w-[355px] h-[175px] sm:w-[500px] sm:h-[246px] md:w-[710px] md:h-[350px]"
        style={{ aspectRatio: '710 / 350' }}
      >
        <article
          className="
            absolute top-0 left-0 origin-top-left
            w-[710px] h-[350px] 
            rounded-2xl bg-slate-900/70 shadow-2xl overflow-hidden
            cursor-pointer
            motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out
            hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]
            scale-50 sm:scale-[0.704] md:scale-100
            active:scale-[0.49] sm:active:scale-[0.69] md:active:scale-[0.98]
            active:shadow-[0_12px_30px_rgba(0,0,0,0.6)]
            touch-manipulation
          "
          style={{ 
            WebkitTapHighlightColor: 'transparent'
          }}
          onTouchStart={() => setIsTapped(true)}
          onTouchEnd={() => setTimeout(() => setIsTapped(false), 150)}
        >
          {/* Feedback visual táctil - reemplaza hover */}
          <div
            className={`
              pointer-events-none absolute inset-0 
              transition-opacity duration-200
              ${isTapped ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              background:
                "radial-gradient(60% 50% at 50% 50%, rgba(34, 211, 238, 0.15) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 100%)",
            }}
          />

          {/* Glow hover original (solo desktop) */}
          <div
            className="
              pointer-events-none absolute inset-0 opacity-0
              hidden md:block
              motion-safe:transition-opacity motion-safe:duration-300
              group-hover:opacity-100
            "
            style={{
              background:
                "radial-gradient(80% 60% at 30% 0%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)",
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 70%)",
            }}
          />

          <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/10 z-20" />

          <div className="backdrop-blur-md bg-white/5 absolute inset-0 opacity-[0.06] z-0" />

          {countries.length > 0 && (
            <div
              className="absolute inset-0 z-0 opacity-30 pointer-events-none"
              style={{
                transform: "scale(1.35) translateY(-6%) translateX(6%)",
                WebkitMaskImage:
                  "radial-gradient(72% 72% at 60% 45%, black 50%, transparent 100%)",
                maskImage:
                  "radial-gradient(72% 72% at 60% 45%, black 50%, transparent 100%)",
              }}
            >
              <MapChart highlightCountries={countries} variant="background" />
            </div>
          )}

          <div
            className="absolute bottom-0 left-0 z-60 pointer-events-none pb-2 pl-2"
            style={{
              overflow: "visible",
              WebkitMaskImage:
                "radial-gradient(85% 85% at 40% 75%, black 70%, transparent 100%)",
              maskImage:
                "radial-gradient(85% 85% at 40% 75%, black 70%, transparent 100%)",
            }}
          >
            <img
              src={image}
              alt={`Imagen de ${name}`}
              loading="lazy"
              width={340}
              height={255}
              className="object-contain object-bottom-left w-[340px] h-[255px]"
              style={{
                filter:
                  "drop-shadow(0 12px 24px rgba(0,0,0,0.35)) drop-shadow(0 28px 56px rgba(0,0,0,0.25))",
                WebkitFilter:
                  "drop-shadow(0 12px 24px rgba(0,0,0,0.35)) drop-shadow(0 28px 56px rgba(0,0,0,0.25))",
              }}
            />
          </div>

          <header className="absolute top-5 left-5 right-5 z-30">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h2 className="text-3xl font-semibold tracking-tight text-white truncate">
                  {name}
                </h2>
                <p className="text-md italic font-semibold text-slate-400 truncate">
                  {scientificName}
                </p>
              </div>

              <div className="flex flex-row items-center gap-5 shrink-0">
                <IconWrap label={fmtTemp(env)}>
                  <WiThermometer className="w-7 h-7" />
                </IconWrap>
                <IconWrap label={fmtHum(env)}>
                  <WiHumidity className="w-7 h-7" />
                </IconWrap>
                <IconWrap label={fmtLife(env)}>
                  <GiSandsOfTime className="w-7 h-7" />
                </IconWrap>
                <IconWrap label={env?.activity ?? "-"}>
                  <ActivityIcon activity={env?.activity ?? null} />
                </IconWrap>
                <IconWrap label={fmtLen(env)}>
                  <TbRulerMeasure className="w-7 h-7" />
                </IconWrap>
              </div>
            </div>
          </header>

          <div className="relative z-30 h-full pt-[88px] px-0">
            <div className="grid grid-cols-2 h-full gap-5">
              <div />
              <div className="flex flex-col">
                <section className="grid grid-cols-1 gap-3 pr-8">
                  <p className={valueCls}>
                    <span className={titleCls}>HÁBITAT:</span> {habitat}
                  </p>
                  <p className={valueCls}>
                    <span className={titleCls}>DIETA:</span> {diet}
                  </p>
                  {breeding && (
                    <p className={valueCls}>
                      <span className={titleCls}>REPRODUCCIÓN:</span> {breeding}
                    </p>
                  )}
                </section>
                <div className="flex-1" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 z-40">
            <div className="w-[320px]">
              <ConservationBar status={status} showLabel />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AnimalProCard;
