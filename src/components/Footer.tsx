import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne 1 : Logo / Nom */}
        <div>
          <h2 className="text-2xl font-bold">MedicalTracking</h2>
          <p className="mt-2 text-gray-200 text-sm max-w-md">
            Suivi médical digitalisé à destination des patients. L’objectif est
            de leur permettre de consulter leur historique médical, de
            visualiser leurs rendez-vous à venir, et d’accéder à des
            recommandations de santé personnalisées.
          </p>
        </div>

        {/* Colonne 2 : Liens utiles */}
        <div>
          <h3 className="font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline hover:text-gray-300">
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline hover:text-gray-300"
              >
                Rendez-vous
              </Link>
            </li>
            <li>
              <Link
                href="/dossier"
                className="hover:underline hover:text-gray-300"
              >
                Dossier
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:underline hover:text-gray-300"
              >
                Recommandations
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm mb-3">📍 Cotonou, Bénin</p>
          <p className="text-sm mb-3">📧 contact@medicaltracking.com</p>
          <p className="text-sm">📞 +229 90 00 00 00</p>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-blue-500 mt-6 py-4 text-center text-sm text-gray-300">
        © copyright {new Date().getFullYear()} MedicalTracking. Tous droits
        réservés.
      </div>
    </footer>
  );
}
