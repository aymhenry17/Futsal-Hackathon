import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
    ChevronLeft,
    ChevronRight,
    Calendar,
    Trophy,
    Newspaper,
    BookOpen,
    Users,
    Heart,
    Radio,
    ExternalLink,
} from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Academie } from "./pages/Academie";
import { ActionSociale } from "./pages/ActionSociale";
import { Resultats } from "./pages/Resultats";
import { Contact } from "./pages/Contact";

function App() {
    const location = useLocation();
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselContent = [
        {
            image: "https://cdn.discordapp.com/attachments/1292829468410515630/1331955373552304188/image.jpg?ex=67937f9b&is=67922e1b&hm=6d1d2ffd2d708fdb11b867bf976eb9689c2b4e5e7688b58c9bb012b27fa8b8e0&",
            title: "Club de Futsal",
            description: "Développement technique et personnel pour les jeunes",
            buttonText: "Découvrir nos résultats",
        },
        {
            image: "https://cdn.discordapp.com/attachments/1292829468410515630/1331964927690412085/close-up-volunteer-food-box.jpg?ex=67938881&is=67923701&hm=e85f5b230031d1b6fc995f49b4db8819762227e33cfee6c66816ed5d992b1c32&",
            title: "Actions Sociales",
            description:
                "Rénovation, maraudes, et soutien communautaire chaque trimestre",
            buttonText: "Nos actions solidaires",
        },
        {
            image: "https://cdn.discordapp.com/attachments/1292829468410515630/1331955381152252038/image.jpg?ex=67937f9d&is=67922e1d&hm=35006e9d5e82d5b7c34e12d7d0bc2db55b75b0ea68644fb03516bc6d7e57cb53&",
            title: "Projet International",
            description:
                "Construction de centres de santé et de formation au Sénégal",
            buttonText: "Nos projets internationaux",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) =>
                (prev - 1 + carouselContent.length) % carouselContent.length
        );
    };

    const upcomingMatch = {
        date: "23 Mars 2024",
        competition: "Championnat U12",
        team1: "Paris Futsal Academy",
        team2: "Marseille Futsal",
        time: "14:00",
    };

    const leagueStandings = [
        { position: 1, team: "Paris Futsal Academy", points: 45 },
        { position: 2, team: "Lyon Futsal", points: 42 },
        { position: 3, team: "Marseille Futsal", points: 38 },
    ];

    const clubNews = [
        {
            title: "Nouveau centre de formation au Sénégal",
            date: "15 Mars 2024",
            excerpt:
                "Notre académie étend son impact international avec un nouveau centre de formation.",
            image: "https://cdn.discordapp.com/attachments/1292829468410515630/1331955373552304188/image.jpg?ex=67937f9b&is=67922e1b&hm=6d1d2ffd2d708fdb11b867bf976eb9689c2b4e5e7688b58c9bb012b27fa8b8e0&",
        },
        {
            title: "Victoire éclatante en Championnat U12",
            date: "8 Mars 2024",
            excerpt:
                "Nos jeunes talents ont remporté une victoire impressionnante ce weekend.",
            image: "https://cdn.discordapp.com/attachments/1292829468410515630/1331955381152252038/image.jpg?ex=67937f9d&is=67922e1d&hm=35006e9d5e82d5b7c34e12d7d0bc2db55b75b0ea68644fb03516bc6d7e57cb53&",
        },
        {
            title: "Action sociale : Rénovation dans le 18ème arrondissement",
            date: "1 Mars 2024",
            excerpt:
                "Notre équipe a rénové un appartement pour une famille dans le besoin.",
            image: "https://img.freepik.com/photos-gratuite/travailleurs-campagne-nettoient-apres-travail_23-2148761819.jpg?t=st=1737635813~exp=1737639413~hmac=c080666be4b80e2475a6531aefb0baa4b0eab71559f20ae03759f7f16236811d&w=1060",
        },
    ];

    const isHomePage = location.pathname === "/";

    return (
        <div className="min-h-screen bg-white">
            {/* Carousel/Hero Section with Navigation */}
            <header className={`relative`}>
                {isHomePage ? (
                    <div className="relative h-[600px] overflow-hidden">
                        <div
                            className="absolute inset-0 transition-transform duration-500"
                            style={{
                                transform: `translateX(-${
                                    currentSlide * 100
                                }%)`,
                            }}
                        >
                            {carouselContent.map((slide, index) => (
                                <div
                                    key={index}
                                    className="absolute w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${slide.image})`,
                                        left: `${index * 100}%`,
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <div className="text-center text-white max-w-2xl">
                                            <h1 className="text-5xl font-bold mb-4">
                                                {slide.title}
                                            </h1>
                                            <p className="text-xl mb-6">
                                                {slide.description}
                                            </p>
                                            <a
                                                href="/resultats"
                                                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
                                            >
                                                {slide.buttonText}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2"
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                ) : (
                    <div
                        className="absolute inset-0 bg-cover bg-center "
                        style={{
                            backgroundImage: isHomePage
                                ? 'url("https://cdn.discordapp.com/attachments/1292829468410515630/1331955373552304188/image.jpg?ex=67937f9b&is=67922e1b&hm=6d1d2ffd2d708fdb11b867bf976eb9689c2b4e5e7688b58c9bb012b27fa8b8e0&")'
                                : "none",
                        }}
                    >
                        {isHomePage && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 mt-10"></div>
                        )}
                    </div>
                )}

                <Navbar />
            </header>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            {/* Match & Classement Grid */}
                            <div className="container mx-auto grid md:grid-cols-2 gap-8 my-16 px-4">
                                {/* Prochain Match */}
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <Calendar className="mr-2 text-blue-600" />
                                        <h2 className="text-2xl font-bold text-blue-900">
                                            Prochain Match
                                        </h2>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold">
                                                {upcomingMatch.team1}
                                            </span>
                                            <span className="text-gray-500">
                                                {upcomingMatch.date}
                                            </span>
                                            <span className="font-semibold">
                                                {upcomingMatch.team2}
                                            </span>
                                        </div>
                                        <div className="text-center text-blue-600 font-bold mt-2">
                                            {upcomingMatch.time}
                                        </div>
                                    </div>
                                </div>

                                {/* Classement */}
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <Trophy className="mr-2 text-blue-600" />
                                        <h2 className="text-2xl font-bold text-blue-900">
                                            Classement
                                        </h2>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b">
                                                    <th>Pos</th>
                                                    <th>Équipe</th>
                                                    <th>Pts</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {leagueStandings.map(
                                                    (standing) => (
                                                        <tr
                                                            key={
                                                                standing.position
                                                            }
                                                            className={`${
                                                                standing.team ===
                                                                "Paris Futsal Academy"
                                                                    ? "bg-blue-100"
                                                                    : ""
                                                            }`}
                                                        >
                                                            <td className="text-center">
                                                                {
                                                                    standing.position
                                                                }
                                                            </td>
                                                            <td>
                                                                {standing.team}
                                                            </td>
                                                            <td className="text-center">
                                                                {
                                                                    standing.points
                                                                }
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* Actualités */}
                            <div className="container mx-auto my-16 px-4">
                                <div className="flex items-center mb-8">
                                    <Newspaper className="mr-2 text-blue-600" />
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Actualités du Club
                                    </h2>
                                </div>
                                <div className="grid md:grid-cols-3 gap-8">
                                    {clubNews.map((news, index) => (
                                        <div
                                            key={index}
                                            className="bg-blue-50 rounded-lg overflow-hidden shadow-lg"
                                        >
                                            <img
                                                src={news.image}
                                                alt={news.title}
                                                className="w-full h-48 object-cover"
                                            />
                                            <div className="p-6">
                                                <span className="text-sm text-gray-500">
                                                    {news.date}
                                                </span>
                                                <h3 className="text-xl font-bold mt-2 mb-3">
                                                    {news.title}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {news.excerpt}
                                                </p>
                                                <a
                                                    href="#"
                                                    className="text-blue-600 mt-4 inline-block"
                                                >
                                                    Lire plus
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Histoire du Club */}
                            <div className="container mx-auto my-16 px-4">
                                <div className="flex items-center mb-8">
                                    <BookOpen className="mr-2 text-blue-600" />
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Notre Histoire
                                    </h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <img
                                        src="https://cdn.discordapp.com/attachments/1292829468410515630/1331955380565311559/image.jpg?ex=67937f9d&is=67922e1d&hm=20d5adb2bc01c566da2b161280bddb4a17893c6a1719c436485a0b9653a6212a&"
                                        alt="Histoire du Club"
                                        className="rounded-lg shadow-lg"
                                    />
                                    <div>
                                        <p className="text-gray-700 mb-4">
                                            Basée au cœur du 10ème
                                            arrondissement de Paris, près de
                                            République, Paris Futsal Academy a
                                            été créée avec l’ambition de
                                            transformer des vies par le sport.
                                            Bien plus qu’un simple club de
                                            futsal, nous sommes une association
                                            engagée, dédiée à accompagner les
                                            jeunes des quartiers et des
                                            banlieues dans leur développement
                                            personnel, éducatif et social.
                                        </p>
                                        <p className="text-gray-700 mb-4">
                                            Pour répondre aux besoins des jeunes
                                            en quête de repères professionnels,
                                            nous avons également lancé une
                                            formation spécialisée. Ce programme
                                            est destiné à accompagner les jeunes
                                            en difficulté professionnelle, leur
                                            offrant les outils et le soutien
                                            nécessaires pour retrouver leur voie
                                            et construire un avenir solide, que
                                            ce soit à travers le sport ou
                                            d'autres opportunités.
                                        </p>
                                        <p className="text-gray-700 mb-4">
                                            Pour répondre aux besoins des jeunes
                                            en quête de repères professionnels,
                                            nous avons également lancé une
                                            formation spécialisée. Ce programme
                                            est destiné à accompagner les jeunes
                                            en difficulté professionnelle, leur
                                            offrant les outils et le soutien
                                            nécessaires pour retrouver leur voie
                                            et construire un avenir solide, que
                                            ce soit à travers le sport ou
                                            d'autres opportunités.
                                        </p>
                                        <a
                                            href="#"
                                            className="text-blue-600 inline-block"
                                        >
                                            Notre parcours complet
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                />
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
                            <h3 className="text-xl font-semibold mb-4">
                                Paris Futsal Academy
                            </h3>
                            <p className="text-gray-400">
                                Développement des jeunes à travers le sport et
                                la solidarité
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">
                                Liens Rapides
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="/resultats"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Résultats
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/academie"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Académie
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/action-sociale"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Action Sociale
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">
                                Partenaires
                            </h3>
                            <ul className="space-y-2">
                                <li className="text-gray-400">
                                    Ville de Paris
                                </li>
                                <li className="text-gray-400">
                                    Fédération Française de Football
                                </li>
                                <li className="text-gray-400">
                                    Conseil Municipal
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>
                            &copy; 2024 Paris Futsal Academy. Tous droits
                            réservés.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
