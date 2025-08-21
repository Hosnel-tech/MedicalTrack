import { Calendar } from "lucide-react";

export default function DossierPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Mon dossier médical
          </h1>
          <p className="text-gray-600 mt-2">
            Consultez votre historique médical complet
          </p>
        </div>

        {/* personnal data */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 mb-6">
          <div className="flex gap-6 items-center mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Informations personnelles
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <p className="text-gray-600">Nom complet</p>
              <p className="font-bold text-gray-800">Jean Dupont</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">Date de naissance</p>
              <p className="font-bold text-gray-800">15/03/1985</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">Groupe sanguin</p>
              <p className="font-bold text-gray-800">A+</p>
            </div>
          </div>
        </div>

        {/* medical data */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* antecedants medicaux */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex gap-6 items-center">
              <Calendar className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Antécédents médicaux
              </h2>
            </div>
            <div className="">
              {/* first intervention */}
              <div className="border-b border-gray-300 py-4 mb-2">
                <div className="flex gap-6 items-center mb-1">
                  <div className="text-gray-800 border-2 border-gray-300 px-3 py-1 rounded-full font-bold text-sm">
                    <p>Chirurgical</p>
                  </div>
                  <p className="text-gray-600">12/06/2010</p>
                </div>
                <p className="font-medium text-gray-800">Appendicectomie</p>
                <p className="text-gray-600">Par Dr. Claude Bernard</p>
              </div>

              {/* second intervention */}
              <div className="border-b border-gray-300 py-4 mb-2">
                <div className="flex gap-6 items-center mb-1">
                  <div className="text-gray-800 border-2 border-gray-300 px-3 py-1 rounded-full font-bold text-sm">
                    <p>Chirurgical</p>
                  </div>
                  <p className="text-gray-600">12/06/2010</p>
                </div>
                <p className="font-medium text-gray-800">Appendicectomie</p>
                <p className="text-gray-600">Par Dr. Claude Bernard</p>
              </div>

              {/* third intervention */}
              <div className="py-4">
                <div className="flex gap-6 items-center mb-1">
                  <div className="text-gray-800 border-2 border-gray-300 px-3 py-1 rounded-full font-bold text-sm">
                    <p>Chirurgical</p>
                  </div>
                  <p className="text-gray-600">12/06/2010</p>
                </div>
                <p className="font-medium text-gray-800">Appendicectomie</p>
                <p className="text-gray-600">Par Dr. Claude Bernard</p>
              </div>
            </div>
          </div>

          {/* allergies */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex gap-6 items-center">
              <Calendar className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Allergies</h2>
            </div>
            <div className="">
              {/* first intervention */}
              <div className="border-b border-gray-300 py-4 mb-2">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-gray-600">Pénicilline</p>
                  <div className="text-white bg-red-600 px-3 py-1 rounded-full font-bold text-sm">
                    <p>Haute</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Réactions : Éruption cutanée, Difficultés respiratoires
                </p>
                <p className="text-gray-600">Par Dr. Claude Bernard</p>
              </div>

              {/* second intervention */}
              <div className="border-b border-gray-300 py-4 mb-2">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-gray-600">Pénicilline</p>
                  <div className="text-white bg-red-600 px-3 py-1 rounded-full font-bold text-sm">
                    <p>Haute</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Réactions : Éruption cutanée, Difficultés respiratoires
                </p>
                <p className="text-gray-600">Par Dr. Claude Bernard</p>
              </div>

              {/* third intervention */}
              <div className="py-4">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-gray-600">Pénicilline</p>
                  <div className="text-white bg-red-600 px-3 py-1 rounded-full font-bold text-sm">
                    <p>Haute</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Réactions : Éruption cutanée, Difficultés respiratoires
                </p>
                <p className="text-gray-600">Par Dr. Claude Bernard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
