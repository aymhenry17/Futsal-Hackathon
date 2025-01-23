import React from "react";
import { Users, Briefcase, GraduationCap, Heart } from "lucide-react";

export function Academie() {
  const programmes = [
    {
      titre: "Orientation Professionnelle",
      description:
        "Des séances individuelles pour identifier vos compétences, vos intérêts et construire un projet professionnel.",
      details: ["Coaching personnalisé", "Ateliers collectifs", "Bilan de compétences"],
    },
    {
      titre: "Formation et Stages",
      description:
        "Accès à des formations courtes, des stages et des mises en situation pour découvrir différents métiers.",
      details: ["Stages immersifs", "Rencontres professionnelles", "Ateliers pratiques"],
    },
    {
      titre: "Aide à la Recherche d'Emploi",
      description:
        "Accompagnement pour rédiger votre CV, lettre de motivation et réussir vos entretiens.",
      details: ["Simulations d'entretiens", "Création de CV", "Réseautage avec des bénévoles"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Académie de l'Avenir
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-md">
              Offrir une chance à chaque jeune de trouver sa voie grâce à l'accompagnement de
              bénévoles passionnés.
            </p>
            <a
              href="#programmes"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg"
            >
              Découvrir nos Programmes
            </a>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6">Notre Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                L'Académie de l'Avenir accompagne les jeunes en difficulté dans leur insertion
                professionnelle. Nous croyons en la force du collectif et en l'impact des bénévoles
                pour transformer des vies.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Users className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Accompagnement Personnalisé</h3>
                    <p className="text-gray-600">
                      Un suivi sur mesure pour construire un projet adapté à chaque jeune.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Partenariats Éducatifs</h3>
                    <p className="text-gray-600">
                      Collaboration avec des centres de formation et des entreprises.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Réseau de Bénévoles</h3>
                    <p className="text-gray-600">
                      Des professionnels dévoués pour guider et inspirer.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <img
              src="https://img.freepik.com/photos-gratuite/resultats-financiers-financiers-analysant-statistiques_1150-1642.jpg?t=st=1737640970~exp=1737644570~hmac=1b8df6cac68f228c9c001c231c84b922818f2c0c2ff22e74365b3e21dde21fd8&w=996"
              alt="Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section id="programmes" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-center">Nos Programmes</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {programmes.map((programme, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transform hover:scale-105 transition"
              >
                <h3 className="text-2xl font-bold mb-4">{programme.titre}</h3>
                <p className="text-gray-600 mb-6">{programme.description}</p>
                <ul className="text-gray-600 space-y-2">
                  {programme.details.map((detail, i) => (
                    <li key={i}>- {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Rejoignez-nous pour faire la différence
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Vous êtes un jeune à la recherche de votre voie ? Vous souhaitez devenir bénévole et
            accompagner des jeunes ? Contactez-nous dès aujourd'hui.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Nous Contacter
          </a>
        </div>
      </section>
    </div>
  );
}
