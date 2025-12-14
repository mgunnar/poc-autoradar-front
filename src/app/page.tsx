"use client";

import { useState } from "react";
import { Car } from "@/types/Car";
import { useCarSearch } from "../hooks/useCarSearch"; 
import { CarCard } from "./ui/CarCard";
import { CarModal } from "./ui/CarModal";

export default function Page() {
  const [model, setModel] = useState("");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  // Removido maxPrice por enquanto pois o filtro é feito no backend (query simples)
  const { cars, loading, error, search } = useCarSearch();

  function handleSearch() {
    if (!model.trim()) return;
    search({ model });
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 font-sans text-gray-900">
      <div className="max-w-md mx-auto">
        <section className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-6">
          <h1 className="text-2xl font-extrabold mb-4 text-gray-800 tracking-tight">🚘 AutoRadar</h1>

          <div className="space-y-3">
            <input
              className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3 text-black focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="Digite o modelo (ex: Civic)"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />

            <button
              onClick={handleSearch}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold disabled:bg-gray-300 disabled:cursor-not-allowed transition shadow-md shadow-blue-100"
            >
              {loading ? "Pesquisando..." : "Buscar Ofertas"}
            </button>
          </div>
        </section>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6 text-sm text-center font-medium">
            {error}
          </div>
        )}

        <section className="space-y-4">
          {cars.map((car, index) => (
            <CarCard
              key={index} 
              car={car}
              onClick={() => setSelectedCar(car)}
            />
          ))}
          {!loading && cars.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-400 text-sm">Nenhum resultado para exibir.</p>
              </div>
          )}
        </section>

        {selectedCar && (
          <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
        )}
      </div>
    </main>
  );
}