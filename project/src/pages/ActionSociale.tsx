import React from "react";
import {
    Users,
    Heart,
    ShoppingBag,
    Calendar,
    MapPin,
    Clock,
    FileText,
} from "lucide-react";

export function ActionSociale() {
    const initiatives = [
        {
            icon: ShoppingBag,
            titre: "Distribution Alimentaire",
            description:
                "Distribution hebdomadaire de paniers alimentaires aux familles dans le besoin.",
            details: [
                { icon: Calendar, text: "Tous les samedis" },
                { icon: Clock, text: "9h00 - 12h00" },
                { icon: MapPin, text: "Local associatif" },
            ],
        },
        {
            icon: Heart,
            titre: "Soutien aux Familles",
            description: "Accompagnement personnalisé et aide administrative.",
            details: [
                { icon: Users, text: "Permanence sociale" },
                { icon: FileText, text: "Aide aux démarches" },
                { icon: Heart, text: "Soutien psychologique" },
            ],
        },
        {
            icon: Users,
            titre: "Rénovation de Logements",
            description:
                "Projet de rénovation de logements pour les familles en difficulté.",
            details: [
                { icon: Users, text: "Équipe de bénévoles qualifiés" },
                { icon: FileText, text: "Matériel professionnel fourni" },
                { icon: Calendar, text: "Intervention sur demande" },
            ],
        },
    ];

    const evenements = [
        {
            date: "23 Mars 2024",
            titre: "Tournoi Solidaire",
            lieu: "Gymnase Maurice Herzog",
            description: "Tournoi caritatif au profit des associations locales",
        },
        {
            date: "30 Mars 2024",
            titre: "Distribution Alimentaire",
            lieu: "Local Associatif",
            description: "Distribution de paniers repas aux familles",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <header className="relative h-[60vh]  mt-10 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&q=80")',
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
                    <div className="max-w-3xl text-center mx-auto">
                        <h1 className="text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
                            Action Sociale Solidaire
                        </h1>
                        <p className="text-xl text-white mb-8 drop-shadow-md">
                            Ensemble, nous faisons bouger les choses. Soyez
                            acteur de la solidarité !
                        </p>
                        <a
                            href="#initiatives"
                            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg"
                        >
                            Découvrir nos Initiatives
                        </a>
                    </div>
                </div>
            </header>

            {/* Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-extrabold mb-6">
                                Notre Mission
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Notre association s'engage à accompagner les
                                familles en difficulté, à créer des liens de
                                solidarité et à apporter un soutien concret aux
                                personnes les plus vulnérables.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <Heart className="w-8 h-8 text-blue-600 mr-4" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">
                                            Soutien Personnalisé
                                        </h3>
                                        <p className="text-gray-600">
                                            Un accompagnement adapté aux besoins
                                            de chaque famille.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Users className="w-8 h-8 text-blue-600 mr-4" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">
                                            Réseau de Solidarité
                                        </h3>
                                        <p className="text-gray-600">
                                            Mobilisation de bénévoles et de
                                            partenaires locaux.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <ShoppingBag className="w-8 h-8 text-blue-600 mr-4" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">
                                            Actions Concrètes
                                        </h3>
                                        <p className="text-gray-600">
                                            Distribution alimentaire, aide au
                                            logement et soutien administratif.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <img
                            src="https://img.freepik.com/photos-gratuite/personnes-plan-moyen-ramassant-nourriture_23-2149182019.jpg?t=st=1737642345~exp=1737645945~hmac=b149f44cc36e7976b76cee6800938e3e8ce5951f1aafe2be3eb88f3d2228a0a8&w=996"
                            alt="Mission"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Initiatives Section */}
            <section id="initiatives" className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-extrabold mb-12 text-center">
                        Nos Initiatives
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {initiatives.map((initiative, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transform hover:scale-105 transition"
                            >
                                <initiative.icon className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-2xl font-bold mb-4">
                                    {initiative.titre}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {initiative.description}
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    {initiative.details.map((detail, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center"
                                        >
                                            <detail.icon className="w-5 h-5 text-blue-600 mr-3" />
                                            {detail.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Événements Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-extrabold mb-12 text-center">
                        Nos Événements à Venir
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {evenements.map((event, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transform hover:scale-105 transition"
                            >
                                <div className="flex items-start">
                                    <Calendar className="w-8 h-8 text-blue-600 mr-4" />
                                    <div>
                                        <span className="text-sm text-blue-600 font-semibold">
                                            {event.date}
                                        </span>
                                        <h3 className="text-2xl font-bold mt-1 mb-2">
                                            {event.titre}
                                        </h3>
                                        <p className="text-gray-600 mb-2">
                                            {event.description}
                                        </p>
                                        <div className="flex items-center text-gray-600">
                                            <MapPin className="w-5 h-5 mr-2 text-blue-600" />
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
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">
                        Rejoignez notre mouvement solidaire
                    </h2>
                    <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                        Vous souhaitez contribuer à notre mission, devenir
                        bénévole ou simplement en savoir plus ? Contactez-nous
                        et faisons ensemble la différence.
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
