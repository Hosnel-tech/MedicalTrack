import { Calendar, Clock, MapPin, Search } from "lucide-react";
import appointments from "@/data/rendezvous.json";

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        {/** Here you can add any additional appointment management features */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Prochains Rendez-vous
          </h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md p-4">
            Prendre un rendez-vous
          </button>
        </div>

        {/** Filter by date and search bar */}
        <div className="flex justify-between items-center mb-6">
          {/** Filter buttons */}
          <div className="flex gap-4">
            {/** Filter by everything */}
            <div className="flex bg-blue-600 items-center rounded-md px-4">
              <button className="text-white px-2 py-2 rounded-md cursor-pointer">
                Tous
              </button>

              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/30">
                <p className="text-white text-sm font-bold">0</p>
              </div>
            </div>

            {/** Filter by upcoming appointments */}
            <div className="flex bg-gray-200 items-center rounded-md px-4">
              <button className="text-black px-2 py-2 rounded-md cursor-pointer">
                À venir
              </button>

              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/60">
                <p className="text-black text-sm font-bold">0</p>
              </div>
            </div>

            {/** Filter by past appointments */}
            <div className="flex bg-gray-200 items-center rounded-md px-4">
              <button className="text-black px-2 py-2 rounded-md cursor-pointer">
                Passés
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

        {/* Appointment Cards */}
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Consultation title */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {appointment.type}
                </h2>
                <div
                  className={`text-white px-3 py-1 rounded-full font-bold text-sm ${
                    appointment.statut === "Passe"
                      ? "bg-green-600"
                      : "bg-blue-600"
                  }`}
                >
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
          ))}
        </div>
      </div>
    </div>
  );
}
