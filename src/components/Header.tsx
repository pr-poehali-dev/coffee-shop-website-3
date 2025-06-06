import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-coffee-800 font-montserrat">
              COOFFEE GRINDER
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-coffee-700 hover:text-amber-600 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-coffee-700 hover:text-amber-600 transition-colors"
              >
                Сертификаты
              </a>
              <a
                href="#"
                className="text-coffee-700 hover:text-amber-600 transition-colors"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-coffee-700 hover:text-amber-600 transition-colors"
              >
                О нас
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Поиск кофе..."
                className="w-64 pl-10 pr-4 py-2 border border-coffee-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Icon
                name="Search"
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>

            <div className="flex items-center space-x-3">
              <Icon
                name="Heart"
                className="text-coffee-700 hover:text-amber-600 cursor-pointer transition-colors"
                size={22}
              />
              <div className="relative">
                <Icon
                  name="ShoppingBag"
                  className="text-coffee-700 hover:text-amber-600 cursor-pointer transition-colors"
                  size={22}
                />
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </div>
              <Icon
                name="User"
                className="text-coffee-700 hover:text-amber-600 cursor-pointer transition-colors"
                size={22}
              />
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-coffee-700 hover:text-amber-600">
                Каталог
              </a>
              <a href="#" className="text-coffee-700 hover:text-amber-600">
                Сертификаты
              </a>
              <a href="#" className="text-coffee-700 hover:text-amber-600">
                FAQ
              </a>
              <a href="#" className="text-coffee-700 hover:text-amber-600">
                О нас
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
