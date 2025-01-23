import React from 'react';
import { Heart, Home, ShoppingBag, Users, Calendar, MapPin, ExternalLink, Clock, FileText } from 'lucide-react';

export function ActionSociale() {
  const evenements = [
    {
      date: "23 Mars 2024",
      titre: "Tournoi Solidaire",
      lieu: "Gymnase Maurice Herzog",
      description: "Tournoi caritatif au profit des associations locales"
    },
    {
      date: "30 Mars 2024",
      titre: "Distribution Alimentaire",
      lieu: "Local Associatif",
      description: "Distribution de paniers repas aux familles"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <header className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Action Sociale
            </h1>
            <p className="text-xl text-white mb-8">
              Ensemble pour une communauté plus forte et solidaire
            </p>
            <a href="#programmes" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Découvrir nos actions
            </a>
          </div>
        </div>
      </header>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Impact Social</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-gray-600">Familles aidées par semaine</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">25</div>
              <p className="text-gray-600">Logements rénovés</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Bénévoles actifs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <p className="text-gray-600">Programmes sociaux</p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="programmes" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Nos Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ShoppingBag className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Distribution Alimentaire</h3>
              <p className="text-gray-600 mb-6">
                Distribution hebdomadaire de paniers alimentaires aux familles dans le besoin.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                  Tous les samedis
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-3" />
                  9h00 - 12h00
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  Local associatif
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Home className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Rénovation de Logements</h3>
              <p className="text-gray-600 mb-6">
                Projet de rénovation de logements pour les familles en difficulté.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-3" />
                  Équipe de bénévoles qualifiés
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 text-blue-600 mr-3" />
                  Matériel professionnel fourni
                </li>
                <li className="flex items-center">
                  <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                  Intervention sur demande
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Heart className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Soutien aux Familles</h3>
              <p className="text-gray-600 mb-6">
                Accompagnement personnalisé et aide administrative.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-3" />
                  Permanence sociale
                </li>
                <li className="flex items-center">
                  <FileText className="w-5 h-5 text-blue-600 mr-3" />
                  Aide aux démarches
                </li>
                <li className="flex items-center">
                  <Heart className="w-5 h-5 text-blue-600 mr-3" />
                  Soutien psychologique
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Événements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Événements à Venir</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {evenements.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <Calendar className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <span className="text-sm text-blue-600 font-semibold">{event.date}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">{event.titre}</h3>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.lieu}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Rejoignez notre communauté solidaire
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Ensemble, nous pouvons faire la différence dans notre communauté
          </p>
          <div className="space-x-4">
            <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Devenir bénévole
            </a>
            <a href="#programmes" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Nos programmes
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}