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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[40vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Résultats
            </h1>
            <p className="text-xl text-white">
              Suivez les performances de nos équipes
            </p>
          </div>
        </div>
      </header>

      {/* Résultats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Derniers Résultats</h2>
            <div className="space-y-6">
              {resultats.map((match, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{match.date}</span>
                    <span className="text-sm font-semibold text-blue-600">{match.competition}</span>
                  </div>
                  <div className="grid grid-cols-3 items-center">
                    <div className="text-right">{match.equipe1}</div>
                    <div className="text-center font-bold text-xl">{match.score}</div>
                    <div className="text-left">{match.equipe2}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Classement Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Classement U12</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left">Position</th>
                    <th className="px-6 py-3 text-left">Équipe</th>
                    <th className="px-6 py-3 text-center">Joués</th>
                    <th className="px-6 py-3 text-center">Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4">1</td>
                    <td className="px-6 py-4 font-semibold">Paris Futsal Academy</td>
                    <td className="px-6 py-4 text-center">15</td>
                    <td className="px-6 py-4 text-center">38</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4">2</td>
                    <td className="px-6 py-4">AS Saint-Étienne Futsal</td>
                    <td className="px-6 py-4 text-center">15</td>
                    <td className="px-6 py-4 text-center">32</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4">3</td>
                    <td className="px-6 py-4">Lyon Futsal</td>
                    <td className="px-6 py-4 text-center">15</td>
                    <td className="px-6 py-4 text-center">30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}