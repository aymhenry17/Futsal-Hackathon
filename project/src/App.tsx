import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Users, Trophy, Heart, Radio, ExternalLink } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Academie } from './pages/Academie';
import { ActionSociale } from './pages/ActionSociale';
import { Resultats } from './pages/Resultats';
import { Contact } from './pages/Contact';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const upcomingMatches = [
    {
      date: '2024-03-23',
      competition: 'Championnat U12',
      equipe1: 'Paris Futsal Academy',
      equipe2: 'Marseille Futsal',
      heure: '14:00'
    },
    {
      date: '2024-03-30',
      competition: 'Coupe de France',
      equipe1: 'Lyon Futsal',
      equipe2: 'Paris Futsal Academy',
      heure: '15:30'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Navigation */}
      <header className={`relative ${isHomePage ? 'h-screen' : 'h-20'}`}>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: isHomePage ? 
              'url("https://cdn.discordapp.com/attachments/1292829468410515630/1331955373552304188/image.jpg?ex=67937f9b&is=67922e1b&hm=6d1d2ffd2d708fdb11b867bf976eb9689c2b4e5e7688b58c9bb012b27fa8b8e0&")' :
              'none',
          }}
        >
          {isHomePage && <div className="absolute inset-0 bg-black bg-opacity-50"></div>}
        </div>
        
        <Navbar />

        {isHomePage && (
          <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Développer les talents, construire l'avenir
              </h1>
              <p className="text-xl text-white mb-8">
                Une académie dédiée à l'épanouissement des jeunes à travers le sport, 
                l'éducation et la solidarité sociale.
              </p>
              <div className="space-x-4">
                <a href="/academie" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  En savoir plus
                </a>
                <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <Routes>
        <Route path="/" element={
          <>
            {/* Latest Results Section */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-6">
                <div className="flex justify-between items-center mb-12">
                  <h2 className="text-4xl font-bold">Derniers Résultats</h2>
                  <a href="/resultats" className="text-blue-600 hover:text-blue-700 flex items-center">
                    Voir tous les résultats <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">15 Mars 2024</span>
                      <span className="text-sm font-semibold text-blue-600">Championnat U12</span>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                      <div className="text-right font-semibold">Paris Futsal Academy</div>
                      <div className="text-center font-bold text-xl">3 - 1</div>
                      <div className="text-left font-semibold">AS Saint-Étienne</div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">8 Mars 2024</span>
                      <span className="text-sm font-semibold text-blue-600">Coupe de France</span>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                      <div className="text-right font-semibold">Paris Futsal Academy</div>
                      <div className="text-center font-bold text-xl">2 - 2</div>
                      <div className="text-left font-semibold">Lyon Futsal</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Upcoming Matches Section */}
            <section className="py-20">
              <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12">Prochains Matchs</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {upcomingMatches.map((match, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">{match.date}</span>
                        <span className="text-sm font-semibold text-blue-600">{match.competition}</span>
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <div className="text-right font-semibold">{match.equipe1}</div>
                        <div className="text-center font-bold text-xl text-blue-600">{match.heure}</div>
                        <div className="text-left font-semibold">{match.equipe2}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Media Section */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Médias</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                      <Radio className="w-8 h-8 text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold mb-4">Hodas Radio</h3>
                      <p className="text-gray-600 mb-4">
                        Découvrez nos émissions et interviews hebdomadaires
                      </p>
                      <a 
                        href="https://www.youtube.com/@hodasradio" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                      >
                        Voir notre chaîne YouTube <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1599138900450-3d06e89ad32c?auto=format&fit=crop&q=80" 
                      alt="Futsal action" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Galerie Photos</h3>
                      <p className="text-gray-600 mb-4">
                        Moments forts de nos activités et événements
                      </p>
                      <a 
                        href="https://www.instagram.com/parisfutsalacademy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                      >
                        Suivez-nous sur Instagram <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80" 
                      alt="Futsal match" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Actualités</h3>
                      <p className="text-gray-600">
                        Suivez toute l'actualité de l'académie
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        } />
        <Route path="/academie" element={<Academie />} />
        <Route path="/action-sociale" element={<ActionSociale />} />
        <Route path="/resultats" element={<Resultats />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Paris Futsal Academy</h3>
              <p className="text-gray-400">
                Développement des jeunes à travers le sport et la solidarité
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li><a href="/resultats" className="text-gray-400 hover:text-white">Résultats</a></li>
                <li><a href="/academie" className="text-gray-400 hover:text-white">Académie</a></li>
                <li><a href="/action-sociale" className="text-gray-400 hover:text-white">Action Sociale</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Partenaires</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Ville de Paris</li>
                <li className="text-gray-400">Fédération Française de Football</li>
                <li className="text-gray-400">Conseil Municipal</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Paris Futsal Academy. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;