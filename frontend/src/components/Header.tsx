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
              <span className="text-2xl font-bold text-yellow-600 hover:cursor-pointer" onClick={()=>Navigate('/')}>Khedmni</span>
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
                                    <a onClick={() => Navigate(item.link)} className="text-gray-600 hover:text-yellow-600 hover:cursor-pointer  px-3 py-2 text-base font-medium">{item.text}</a>
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
        
      </header>
    );
  };
  export default Header
