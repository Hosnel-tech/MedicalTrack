import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo / Nom du site */}
        <Link
          href="/"
          className="text-white text-2xl font-bold tracking-wide hover:text-gray-200 transition"
        >
          MedicalTrack
        </Link>

        {/* Menu */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-white font-medium hover:text-gray-200 hover:underline transition"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/rendez-vous"
                className="text-white font-medium hover:text-gray-200 hover:underline transition"
              >
                Rendez-vous
              </Link>
            </li>
            <li>
              <Link
                href="/dossier"
                className="text-white font-medium hover:text-gray-200 hover:underline transition"
              >
                Dossier
              </Link>
            </li>
            <li>
              <Link
                href="/recommandations"
                className="text-white font-medium hover:text-gray-200 hover:underline transition"
              >
                Recommandations
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
