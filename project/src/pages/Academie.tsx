import React from 'react';
import { Users, Trophy, GraduationCap, Calendar, ExternalLink } from 'lucide-react';

export function Academie() {
  const programmes = [
    {
      titre: "Programme U12-U14",
      description: "Formation technique et tactique adaptée aux jeunes talents",
      horaires: ["Mercredi 14h-16h", "Samedi 10h-12h"],
      places: 20
    },
    {
      titre: "Programme U15-U17",
      description: "Perfectionnement et préparation à la compétition",
      horaires: ["Mardi 17h-19h", "Jeudi 17h-19h"],
      places: 15
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <header className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Académie de Futsal
            </h1>
            <p className="text-xl text-white mb-8">
              Formation d'excellence et réinsertion sociale par le sport
            </p>
            <div className="space-x-4">
              <a href="#programmes" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Nos programmes
              </a>
              <a href="/resultats" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Voir les résultats
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
              <p className="text-gray-600 mb-6">
                L'Académie Paris Futsal s'engage dans la formation sportive et l'accompagnement social 
                des jeunes issus de quartiers prioritaires. Notre approche combine excellence sportive 
                et développement personnel.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Accompagnement Personnalisé</h3>
                    <p className="text-gray-600">Suivi individuel adapté au niveau et aux objectifs de chaque jeune</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Soutien Scolaire</h3>
                    <p className="text-gray-600">Programme d'aide aux devoirs et de soutien éducatif</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Trophy className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Formation Sportive</h3>
                    <p className="text-gray-600">Entraînements de haut niveau avec des coaches qualifiés</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?auto=format&fit=crop&q=80" 
                alt="Entraînement" 
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1599138900450-3d06e89ad32c?auto=format&fit=crop&q=80" 
                alt="Match de futsal" 
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80" 
                alt="Équipe" 
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80" 
                alt="Formation" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section id="programmes" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Programmes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programmes.map((programme, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">{programme.titre}</h3>
                <p className="text-gray-600 mb-6">{programme.description}</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold">Horaires</p>
                      <ul className="text-gray-600">
                        {programme.horaires.map((horaire, i) => (
                          <li key={i}>{horaire}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold">Places disponibles</p>
                      <p className="text-gray-600">{programme.places} places</p>
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
            Rejoignez l'Académie Paris Futsal
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Donnez une nouvelle dimension à votre passion pour le futsal tout en 
            construisant votre avenir
          </p>
          <div className="space-x-4">
            <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              S'inscrire
            </a>
            <a href="/resultats" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Voir les résultats
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}