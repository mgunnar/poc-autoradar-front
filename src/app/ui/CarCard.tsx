import { Car } from "@/types/Car";

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

export function CarCard({ car, onClick }: CarCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer border border-gray-100 flex gap-4"
    >
      {/* Imagem do carro */}
      {car.imageUrl ? (
        <img 
          src={car.imageUrl} 
          alt={car.title} 
          className="w-24 h-24 object-cover rounded-lg bg-gray-100"
        />
      ) : (
        <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-2xl">
          🚗
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg text-gray-800 truncate pr-2">{car.title}</h3>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg font-bold text-sm whitespace-nowrap">
            {car.price}
          </span>
        </div>
        
        <p className="text-sm text-gray-500 mb-2">
           {car.year} • {car.km?.toLocaleString()} km
        </p>
        
        <div className="flex gap-2">
          <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100 uppercase tracking-wider font-semibold">
            {car.source}
          </span>
        </div>
      </div>
    </div>
  );
}