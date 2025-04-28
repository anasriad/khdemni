import { Menu, X } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom"
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const Navigate = useNavigate()
    return (
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-yellow-600">Khedmni</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="/login" className="text-gray-600 hover:text-yellow-600 text-sm font-medium">Login</a>
              <a href="/register" className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-600 transition">Register</a>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto" id="mobile-menu-2">
                        <ul className="hidden md:flex space-x-8">
                            {[{
                                text: "Services",
                                link: "/Services"
                            },
                            {
                                text: "Providers",
                                link: "/Providers"
                            },
                            {
                                text: "Tutorials",
                                link: "/tutorials"
                            },
                            {
                                text: "About Us",
                                link: "/aboutUs"
                            }

                            ].map((item) => (
                                <li>
                                    <a onClick={() => Navigate(item.link)} className="text-gray-600 hover:text-yellow-600 px-3 py-2 text-base font-medium">{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
            {/* Login/Register */}
            
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-500 hover:text-yellow-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pb-4 px-4">
            <nav className="flex flex-col space-y-2">
              <a href="/" className="text-gray-600 hover:text-yellow-600 px-3 py-2 text-base font-medium">Home</a>
              <a href="/services" className="text-gray-600 hover:text-yellow-600 px-3 py-2 text-base font-medium">Services</a>
              <a href="/freelancers" className="text-gray-600 hover:text-yellow-600 px-3 py-2 text-base font-medium">Find Freelancers</a>
              <a href="/about" className="text-yellow-600 font-medium px-3 py-2 text-base">About Us</a>
              <a href="/contact" className="text-gray-600 hover:text-yellow-600 px-3 py-2 text-base font-medium">Contact</a>
              <div className="flex flex-col space-y-2 mt-2 pt-2 border-t border-gray-200">
                <a href="/login" className="text-gray-600 hover:text-yellow-600 px-3 py-2 text-base font-medium">Login</a>
                <a href="/register" className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-yellow-600 transition text-center">Register</a>
              </div>
            </nav>
          </div>
        )}
      </header>
    );
  };
  export default Header
