import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
                Стильные сумки
                <span className="block text-red-600">для каждого дня</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Откройте для себя коллекцию премиальных сумок из натуральной
                кожи. Качество, стиль и комфорт в каждой детали.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                <Icon name="ShoppingBag" size={20} />
                Смотреть каталог
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Узнать больше
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">12 мес</div>
                <div className="text-sm text-gray-600">Гарантия качества</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Натуральная кожа</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop"
                  alt="Кожаная сумка"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&fit=crop"
                  alt="Элегантный клатч"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://cdn.poehali.dev/files/c460373d-9f90-429e-a12d-e7e999fee0f4.jpg"
                  alt="Сумка Paris"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=400&fit=crop"
                  alt="Городской рюкзак"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Декоративные элементы */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600 rounded-full opacity-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-600 rounded-full opacity-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
