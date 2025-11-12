"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onActivate,
  }: {
    card: { title: string; src: string };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onActivate?: () => void;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      role={onActivate ? "link" : undefined}
      tabIndex={onActivate ? 0 : -1}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (!onActivate) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      }}
      className={cn(
        "rounded-xl relative bg-gray-100 cursor-pointer dark:bg-neutral-900 overflow-hidden aspect-square h-48 md:h-56 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
      aria-label={onActivate ? `Abrir ${card.title}` : undefined}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 h-full w-full object-center"
      />
      
      {/* Overlay para desktop (hover) */}
      <div
        className={cn(
          "absolute inset-0 bg-black/50 items-end py-8 px-4 transition-opacity duration-300 hidden md:flex",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>

      {/* Overlay permanente para móvil con gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 md:hidden">
        <div className="text-lg font-semibold text-white drop-shadow-lg transform transition-transform duration-200 active:scale-95">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type CardType = {
  title: string;
  src: string;
  slug?: string;
};

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto px-4 md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          onActivate={() => {
            if (card.slug) {
              navigate(`/species?type=${encodeURIComponent(card.slug)}`);
            }
          }}
        />
      ))}
    </div>
  )
}
