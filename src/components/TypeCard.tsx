import { Link } from "react-router-dom";

export default function TypeCard({
  slug,
  name,
  image,
}: {
  slug: string;
  name: string;
  image?: string | null;
}) {
  return (
    <Link
      to={`/species?type=${encodeURIComponent(slug)}`}
      className="group relative overflow-hidden rounded-2xl bg-slate-800/60 ring-1 ring-white/10 hover:ring-white/20 transition"
    >
      {image && (
        <img
          src={image}
          alt={name}
          className="h-28 w-full object-cover opacity-80 group-hover:opacity-90"
          loading="lazy"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-slate-400 text-sm">Ver especies</p>
      </div>
    </Link>
  );
}
