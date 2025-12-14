import { Car } from "@/types/Car";

export function CarModal({ car, onClose }: { car: Car; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-4 max-w-sm w-full relative shadow-2xl">
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-500 font-bold transition"
        >
          &times;
        </button>
        
        <div className="mb-4 rounded-xl overflow-hidden bg-gray-100">
          {car.imageUrl ? (
             <img src={car.imageUrl} className="w-full h-52 object-cover" alt={car.title} />
          ) : (
             <div className="w-full h-52 flex items-center justify-center text-6xl">🚗</div>
          )}
        </div>

        <h2 className="font-bold text-xl mb-1 text-gray-900">{car.title}</h2>
        <p className="text-lg font-bold text-green-700 mb-4">{car.price}</p>

        <a
          href={car.originalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition shadow-lg shadow-blue-200"
        >
          Ver no {car.source}
        </a>
      </div>
    </div>
  );
}