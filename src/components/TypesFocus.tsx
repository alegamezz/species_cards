import { FocusCards } from "./ui/focus-cards";

type Card = { title: string; src: string; slug: string };

export default function TypesFocus({
  items,
}: {
  items: { slug: string; name: string; image_url?: string | null }[];
}) {
  const cards: Card[] = items.map((t) => ({
    title: t.name,
    src: t.image_url || "/placeholder-type.jpg",
    slug: t.slug,
  }));

  return (
    <div className="max-w-6xl mx-auto">
      <FocusCards cards={cards} />
    </div>
  );
}
