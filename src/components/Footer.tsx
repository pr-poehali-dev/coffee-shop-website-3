import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-montserrat">FASHION BAGS</h3>
            <p className="text-gray-400 leading-relaxed">
              Премиальные сумки из натуральной кожи. Качество, проверенное
              временем.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                className="hover:text-red-400 cursor-pointer transition-colors"
                size={20}
              />
              <Icon
                name="Facebook"
                className="hover:text-red-400 cursor-pointer transition-colors"
                size={20}
              />
              <Icon
                name="Twitter"
                className="hover:text-red-400 cursor-pointer transition-colors"
                size={20}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Каталог</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Женские сумки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Мужские сумки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Клатчи
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Рюкзаки
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Информация</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Гарантия
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@fashionbags.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Fashion Bags. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
