import React from "react";
import Header from "../components/Header";
import { Users, Briefcase, Award, MapPin, Shield, TrendingUp } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-yellow-500 to-amber-600 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Khedmni</h1>
              <p className="text-xl opacity-90 mb-6">
                Morocco's premier platform connecting clients with talented freelancers.
              </p>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Made in Morocco, for Moroccans</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                Khedmni is built to empower Morocco's growing freelance economy, creating opportunities for students,
                part-timers, and local service providers to connect with clients who need their services.
              </p>
              <p className="text-lg text-gray-600">
                We're dedicated to building a secure, accessible platform that celebrates local talent and brings
                reliable services to households and businesses across the country.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="p-1 bg-gradient-to-tr from-yellow-500 to-amber-500 rounded-lg">
                <div className="bg-white p-8 rounded-lg">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col items-center text-center">
                      <Users className="w-12 h-12 text-yellow-600 mb-2" />
                      <span className="font-medium text-gray-800">15,000+</span>
                      <span className="text-sm text-gray-500">Active Freelancers</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Briefcase className="w-12 h-12 text-amber-600 mb-2" />
                      <span className="font-medium text-gray-800">25,000+</span>
                      <span className="text-sm text-gray-500">Completed Jobs</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <MapPin className="w-12 h-12 text-yellow-500 mb-2" />
                      <span className="font-medium text-gray-800">20+</span>
                      <span className="text-sm text-gray-500">Cities Covered</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Award className="w-12 h-12 text-amber-500 mb-2" />
                      <span className="font-medium text-gray-800">98%</span>
                      <span className="text-sm text-gray-500">Satisfaction Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Who We Serve</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Freelancers Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                <div className="h-2 bg-yellow-500"></div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">For Freelancers</h3>
                  <p className="text-gray-600 mb-4">
                    Showcase your skills, find relevant projects, and build a successful freelance career.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      Create professional profiles
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      Secure payment system
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      Skill-based job matching
                    </li>
                  </ul>
                </div>
              </div>

              {/* Clients Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                <div className="h-2 bg-amber-500"></div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">For Clients</h3>
                  <p className="text-gray-600 mb-4">
                    Find qualified local talent for all your project and service needs with confidence.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      Verified freelancer profiles
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      Easy booking system
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      Quality-assured services
                    </li>
                  </ul>
                </div>
              </div>

              {/* Students Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                <div className="h-2 bg-yellow-600"></div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">For Students</h3>
                  <p className="text-gray-600 mb-4">
                    Earn while you learn with flexible opportunities that fit your schedule.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                      Part-time opportunities
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                      Build professional experience
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                      Flexible working hours
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Core Values</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            These principles guide everything we do at Khedmni
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Trust & Safety</h3>
                <p className="text-gray-600">
                  We prioritize creating a secure platform where both freelancers and clients can transact with confidence, backed by our verification systems.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Economic Empowerment</h3>
                <p className="text-gray-600">
                  We're committed to creating income opportunities and supporting the growth of Morocco's gig economy and small-scale entrepreneurs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Community First</h3>
                <p className="text-gray-600">
                  We build features and policies that support the needs of our Moroccan community, focusing on local context and requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Award className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality & Excellence</h3>
                <p className="text-gray-600">
                  We encourage high standards through our rating system and provide resources to help our freelancers deliver exceptional service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-yellow-500 to-amber-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-4">Join the Khedmni Community Today</h2>
            <p className="text-xl opacity-90 mb-8">
              Whether you're looking to hire or be hired, Khedmni provides the platform to connect, collaborate, and grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-white text-yellow-600 rounded-lg font-medium hover:bg-gray-100 transition">
                Find Freelancers
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white/10 transition">
                Become a Freelancer
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
