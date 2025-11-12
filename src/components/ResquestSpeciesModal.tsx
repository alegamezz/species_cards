"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { createRequest } from "../lib/request.service";

interface RequestSpeciesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestSpeciesModal({
  isOpen,
  onClose,
}: RequestSpeciesModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    speciesName: "",
    scientificName: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await createRequest(formData);

      setSubmitStatus("success");
      setFormData({
        name: "",
        speciesName: "",
        scientificName: "",
        description: "",
      });

      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Error al crear la solicitud:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-md bg-gray-800 rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold text-white">Solicitar Especie</h2>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Tu Nombre <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 text-sm text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
              placeholder="Ej: Juan Pérez"
            />
          </div>

          {/* Nombre Común */}
          <div>
            <label htmlFor="speciesName" className="block text-sm font-medium text-gray-300 mb-1">
              Nombre Común <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="speciesName"
              required
              value={formData.speciesName}
              onChange={(e) => setFormData({ ...formData, speciesName: e.target.value })}
              className="w-full px-3 py-2 text-sm text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
              placeholder="Ej: Gecko Leopardo"
            />
          </div>

          {/* Nombre Científico */}
          <div>
            <label htmlFor="scientificName" className="block text-sm font-medium text-gray-300 mb-1">
              Nombre Científico (opcional)
            </label>
            <input
              type="text"
              id="scientificName"
              value={formData.scientificName}
              onChange={(e) => setFormData({ ...formData, scientificName: e.target.value })}
              className="w-full px-3 py-2 text-sm text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
              placeholder="Ej: Eublepharis macularius"
            />
          </div>

          {/* Descripción */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
              Información Adicional (opcional)
            </label>
            <textarea
              id="description"
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 text-sm text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none placeholder-gray-400"
              placeholder="¿Por qué te gustaría que añadiéramos esta especie?"
            />
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="p-3 bg-green-900/50 border border-green-700 rounded-lg">
              <p className="text-sm text-green-300 font-medium">✓ Solicitud enviada. ¡Gracias!</p>
            </div>
          )}
          {submitStatus === "error" && (
            <div className="p-3 bg-red-900/50 border border-red-700 rounded-lg">
              <p className="text-sm text-red-300 font-medium">✗ Error al enviar. Inténtalo de nuevo.</p>
            </div>
          )}

          {/* Botones */}
          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-sm border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 text-sm bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
