"use client";
import React, { useState, useEffect } from "react";
import { Bot } from "lucide-react";
// import { redirect } from "next/dist/server/api-utils";
// import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Heart,
  Activity,
  Users,
  Calendar,
  Menu,
  X,
  Stethoscope,
  Clock,
  Award,
  Phone,
  Star,
  Send,
  MessageSquare,
} from "lucide-react";

function Landing() {
    const router = useRouter();
    const handleClick = () => {
        router.push("/Signup");
      };
      const redirect = (path) => {
        router.push(path);
      };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Feedback submitted:", feedbackForm);
    // Reset form
    setFeedbackForm({
      name: "",
      email: "",
      message: "",
      rating: 0,
    });
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100">
      {/* Previous sections remain unchanged */}
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-lg border-b border-gray-800 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transform-gpu"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
            <Bot
              size={32}
              className="text-green-500 cursor-pointer"
              onClick={() => redirect("/")}
            />
            <span className="text-white text-xl font-bold ml-2">HealthAI</span>
          </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/Generateimage">Generate Image</NavLink>
              <NavLink href="/Chatbot">Chatbot</NavLink>
              <NavLink href="/#feedback">Feedback</NavLink>
              {/* <NavLink href="#contact">Contact</NavLink> */}
              <button
              onClick={() => handleClick()}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.3)]"
            >
              Sign-Up
            </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="#home">Home</MobileNavLink>
              <MobileNavLink href="/Generateimage">Generate Image</MobileNavLink>
              <MobileNavLink href="/Chatbot">Chatbot</MobileNavLink>
              <MobileNavLink href="#feedback">Feedback</MobileNavLink>
              <MobileNavLink href="#contact">Contact</MobileNavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4" id="home">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <h1 className="text-5xl font-bold leading-tight mb-6 relative">
              Your Health Is Our
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                {" "}
                Top Priority
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Providing exceptional healthcare services with cutting-edge
              technology and compassionate care. Your wellness journey starts
              here.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                Get Started
              </button>
              <button className="border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-full hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Medical Professional"
                className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with 3D Cards */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard icon={<Users />} number="10k+" text="Happy Patients" />
          <StatCard icon={<Award />} number="15+" text="Years Experience" />
          <StatCard icon={<Stethoscope />} number="100+" text="Specialists" />
          <StatCard icon={<Activity />} number="24/7" text="Emergency Care" />
        </div>
      </section>

      {/* Services Section with Enhanced 3D Cards */}
      <section className="py-20 px-4" id="services">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Heart className="w-12 h-12 text-purple-500" />}
              title="Cardiology"
              description="Expert heart care with advanced diagnostic and treatment options."
            />
            <ServiceCard
              icon={<Activity className="w-12 h-12 text-purple-500" />}
              title="Emergency Care"
              description="24/7 emergency medical services with rapid response times."
            />
            <ServiceCard
              icon={<Clock className="w-12 h-12 text-purple-500" />}
              title="Online Consultation"
              description="Virtual healthcare from the comfort of your home."
            />
          </div>
        </div>
      </section>

      {/* New Feedback Section */}
      <section className="py-20 px-4 relative" id="feedback">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-3xl"></div>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Share Your Experience
          </h2>
          <div className="bg-gray-900/50 p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={feedbackForm.name}
                    onChange={(e) =>
                      setFeedbackForm({ ...feedbackForm, name: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={feedbackForm.email}
                    onChange={(e) =>
                      setFeedbackForm({
                        ...feedbackForm,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Your Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => {
                        setRating(star);
                        setFeedbackForm({ ...feedbackForm, rating: star });
                      }}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="transform hover:scale-110 transition-transform duration-200"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= (hoveredStar || rating)
                            ? "fill-yellow-500 text-yellow-500"
                            : "text-gray-600"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  value={feedbackForm.message}
                  onChange={(e) =>
                    setFeedbackForm({
                      ...feedbackForm,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 h-32"
                  placeholder="Share your experience with us..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.3)] flex items-center justify-center space-x-2"
              >
                <span>Submit Feedback</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Book your appointment today and take the first step towards better
            health.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Book Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                MediCare
              </span>
            </div>
            <p className="text-gray-400">
              Providing quality healthcare services for a healthier tomorrow.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-purple-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/Generateimage"
                  className="hover:text-purple-400 transition-colors"
                >
                  Generate Image
                </a>
              </li>
              <li>
                <a
                  href="/Chatbot"
                  className="hover:text-purple-400 transition-colors"
                >
                  Chatbot
                </a>
              </li>
              <li>
                <a
                  href="#feedback"
                  className="hover:text-purple-400 transition-colors"
                >
                  Feedback
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>Cardiology</li>
              <li>Emergency Care</li>
              <li>Online Consultation</li>
              <li>Laboratory Services</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-purple-500" />
                +1 (555) 123-4567
              </li>
              <li>123 Medical Center Drive</li>
              <li>Healthcare City, HC 12345</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for desktop navigation links
function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
    >
      {children}
    </a>
  );
}

// Component for mobile navigation links
function MobileNavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </a>
  );
}

// Component for statistics cards
function StatCard({ icon, number, text }) {
  return (
    <div className="text-center p-6 bg-gray-900/50 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm border border-gray-800 transform hover:scale-105 transition-all duration-300 group">
      <div className="text-purple-500 flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-2xl font-bold text-white mb-2">{number}</div>
      <div className="text-gray-400">{text}</div>
    </div>
  );
}

// Component for service cards
function ServiceCard({ icon, title, description }) {
  return (
    <div className="group bg-gray-900/50 p-8 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm border border-gray-800 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default Landing;
