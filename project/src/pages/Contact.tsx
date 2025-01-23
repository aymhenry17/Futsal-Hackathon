import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <header className="relative h-[40vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1577221084712-45b0445d2b00?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-white">
              Nous sommes là pour répondre à vos questions
            </p>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Nos Coordonnées</h2>
              <div className="grid grid-cols-1 gap-8 mb-12">
                <div className="flex items-center">
                  <Phone className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">contact@parisfutsal.fr</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-4">Réseaux Sociaux</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      <Instagram className="w-8 h-8" />
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      <Facebook className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Horaires d'ouverture</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Lundi - Vendredi: 9h00 - 18h00</li>
                  <li>Samedi: 9h00 - 12h00</li>
                  <li>Dimanche: Fermé</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}