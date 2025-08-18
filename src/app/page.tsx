import { Calendar, Lightbulb, Clock, MapPin, Heart } from "lucide-react";
import appointments from "@/data/rendezvous.json";

export default function Home() {
  const appointment = appointments[0]; // Assuming you want to display the first appointment

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Bienvenue Hosnel !
          </h1>
          <p className="text-gray-600 mt-2">
            Voici un aperçu de votre suivi médical aujourd&apos;hui.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Upcoming Appointments */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Prochains Rendez-vous
              </h2>
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div className="space-y-3">
              <p className="text-2xl font-bold text-gray-800">0</p>
              <p className="text-gray-600">Aucun rendez-vous prévu</p>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Recommandations
              </h2>
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <div className="space-y-3">
              <p className="text-2xl font-bold text-gray-800">0</p>
              <p className="text-gray-600">Aucune recommandation disponible</p>
            </div>
          </div>

          {/* High Priority */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Priorité Haute
              </h2>
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <div className="space-y-3">
              <p className="text-2xl font-bold text-gray-800">0</p>
              <p className="text-gray-600">Recommandations importantes</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Next Appointment and Health Tip */}
          <div className="flex gap-3">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Prochain rendez-vous
            </h2>
          </div>

          {/* Health Tip */}
          <div className="flex gap-3">
            <Heart className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Conseil santé du jour
            </h2>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            {/* Consultation title */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {appointment.type}
              </h2>
              <div className="text-white bg-blue-600 px-3 py-1 rounded-full font-bold text-sm">
                <p>{appointment.statut}</p>
              </div>
            </div>

            {/* Doctor information */}
            <div className="flex gap-6 items-center mb-4">
              <p className="text-md text-gray-800">{appointment.medecin}</p>
              <p className="text-md font-bold text-gray-800">
                {appointment.specialite}
              </p>
            </div>

            {/* Date and Time */}
            <div className="flex gap-8 items-center mb-4">
              <div className="flex gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <p className="text-md text-gray-800">
                  {new Date(appointment.date).toLocaleDateString("fr-FR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="flex gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <p className="text-md text-gray-800">{appointment.heure}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <p className="text-md text-gray-800">{appointment.lieu}</p>
            </div>

            {/* Notice */}
            <div className="mt-3 text-md text-gray-500">
              <p>Notes : {appointment.notes}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex gap-6 items-start mb-4">
              {/* Icône */}
              <div className="bg-green-600 p-4 rounded-lg flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>

              {/* Contenu */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600">
                    Hydratation quotidienne
                  </h3>
                  <div className="text-white bg-red-600 px-3 py-1 rounded-full font-bold text-sm">
                    <p>Haute</p>
                  </div>
                </div>

                <p className="text-md text-gray-800">
                  Buvez au moins 1,5 litre d&apos;eau par jour pour maintenir
                  une bonne hydratation et favoriser l&apos;élimination des
                  toxines.
                </p>

                <div className="mt-8 flex justify-between">
                  <div className="text-gray-800 border-2 border-gray-300 px-3 py-1 rounded-full font-bold text-sm">
                    <p>Nutrition</p>
                  </div>
                  <p>Quotidien</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
