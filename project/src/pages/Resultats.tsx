import React from 'react';

export function Resultats() {
  const resultats = [
    {
      date: '2024-03-15',
      competition: 'Championnat Régional U12',
      equipe1: 'Paris Futsal Academy',
      equipe2: 'AS Saint-Étienne Futsal',
      score: '3 - 1'
    },
    {
      date: '2024-03-08',
      competition: 'Coupe de France U10',
      equipe1: 'Paris Futsal Academy',
      equipe2: 'Lyon Futsal',
      score: '2 - 2'
    },
    {
      date: '2024-03-01',
      competition: 'Championnat Régional U12',
      equipe1: 'Marseille Futsal',
      equipe2: 'Paris Futsal Academy',
      score: '1 - 4'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-md uppercase">
            Résultats
          </h1>
          <p className="text-white text-lg mt-4 drop-shadow-lg">
            Découvrez les performances récentes de nos équipes
          </p>
        </div>
      </header>

      {/* Résultats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
            Derniers Résultats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resultats.map((match, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{match.date}</span>
                  <span className="text-sm font-semibold text-yellow-400 uppercase">
                    {match.competition}
                  </span>
                </div>
                <div className="grid grid-cols-3 items-center">
                  <div className="text-right font-bold text-lg text-blue-800">
                    {match.equipe1}
                  </div>
                  <div className="text-center font-extrabold text-2xl text-gray-900">
                    {match.score}
                  </div>
                  <div className="text-left font-bold text-lg text-blue-800">
                    {match.equipe2}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classement Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            Classement U12
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden text-gray-900">
            <table className="w-full text-center">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3">Position</th>
                  <th className="px-6 py-3">Équipe</th>
                  <th className="px-6 py-3">Joués</th>
                  <th className="px-6 py-3">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-blue-800">1</td>
                  <td className="px-6 py-4 font-semibold">
                    Paris Futsal Academy
                  </td>
                  <td className="px-6 py-4">15</td>
                  <td className="px-6 py-4">38</td>
                </tr>
                <tr className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-blue-800">2</td>
                  <td className="px-6 py-4">AS Saint-Étienne Futsal</td>
                  <td className="px-6 py-4">15</td>
                  <td className="px-6 py-4">32</td>
                </tr>
                <tr className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-blue-800">3</td>
                  <td className="px-6 py-4">Lyon Futsal</td>
                  <td className="px-6 py-4">15</td>
                  <td className="px-6 py-4">30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
