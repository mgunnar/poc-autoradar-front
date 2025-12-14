import { useState } from "react";
import { Car } from "@/types/Car";

export function useCarSearch() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function search(filters: { model: string; maxPrice?: number }) {
    try {
      setLoading(true);
      setError(null);

      // Constrói a query string
      const params = new URLSearchParams({
        query: filters.model,
        location: "SP"
      });

      // Chama o backend Java na porta 8080
      const response = await fetch(`http://localhost:8080/api/cars/search?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Erro ao conectar com o servidor.");
      }

      const data: Car[] = await response.json();
      setCars(data);

    } catch (err) {
      console.error(err);
      setError("Falha ao buscar carros. Verifique se o Backend Java está rodando na porta 8080.");
    } finally {
      setLoading(false);
    }
  }

  return { cars, loading, error, search };
}