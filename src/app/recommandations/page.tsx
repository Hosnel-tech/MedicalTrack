import { Heart, Search } from "lucide-react";
import recommandations from "@/data/recommandations.json";

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen container mx-auto my-6">
      <div className="container mx-auto py-8 px-4">
        {/** Page title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Recommandations santé
        </h1>

        {/** Filter by date and search bar */}
        <div className="flex justify-between items-center mb-6">
          {/** Filter buttons */}
          <div className="flex gap-4">
            {/** Filter by everything */}
            <div className="flex bg-blue-600 items-center rounded-md px-4">
              <button className="text-white px-2 py-2 rounded-md cursor-pointer">
                Toutes
              </button>

              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/30">
                <p className="text-white text-sm font-bold">0</p>
              </div>
            </div>

            {/** Filter by nutrition */}
            <div className="flex bg-gray-200 items-center rounded-md px-4">
              <button className="text-black px-2 py-2 rounded-md cursor-pointer">
                Nutrition
              </button>

              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/60">
                <p className="text-black text-sm font-bold">0</p>
              </div>
            </div>

            {/** Filter by physicals activities */}
            <div className="flex bg-gray-200 items-center rounded-md px-4">
              <button className="text-black px-2 py-2 rounded-md cursor-pointer">
                Activités physiques
              </button>

              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/60">
                <p className="text-black text-sm font-bold">0</p>
              </div>
            </div>

            {/** Filter by sleep */}
            <div className="flex bg-gray-200 items-center rounded-md px-4">
              <button className="text-black px-2 py-2 rounded-md cursor-pointer">
                Sommeil
              </button>

              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/60">
                <p className="text-black text-sm font-bold">0</p>
              </div>
            </div>

            {/** Filter by take care */}
            <div className="flex bg-gray-200 items-center rounded-md px-4">
              <button className="text-black px-2 py-2 rounded-md cursor-pointer">
                Prévention
              </button>

              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/60">
                <p className="text-black text-sm font-bold">0</p>
              </div>
            </div>
          </div>

          {/** Search bar */}
          <div className="flex items-center border border-gray-300 rounded-md px-4">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Rechercher un rendez-vous..."
              className="py-2 w-full"
            />
          </div>
        </div>

        {/* Notice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommandations.map((recommandation) => (
            <div
              key={recommandation.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex gap-6 items-start mb-4">
                {/* Icône */}
                <div className="bg-green-600 p-4 rounded-lg flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>

                {/* Contenu */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600">
                      {recommandation.titre}
                    </h3>
                    <div
                      className={`text-white px-3 py-1 rounded-full font-bold text-sm ${
                        recommandation.priorite === "Haute"
                          ? "bg-red-600"
                          : recommandation.priorite === "Moyenne"
                          ? "bg-blue-600"
                          : "bg-green-600"
                      }`}
                    >
                      <p>{recommandation.priorite}</p>
                    </div>
                  </div>

                  <p className="text-md text-gray-800">
                    {recommandation.description}
                  </p>

                  <div className="mt-8 flex justify-between">
                    <div className="text-gray-800 border-2 border-gray-300 px-3 py-1 rounded-full font-bold text-sm">
                      <p>{recommandation.categorie}</p>
                    </div>
                    <p>{recommandation.duree}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
