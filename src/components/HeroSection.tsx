import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-coffee-50 to-amber-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-coffee-900 mb-6 font-montserrat leading-tight">
                Лучший кофе
                <span className="block text-amber-600">в городе</span>
              </h1>
              <p className="text-xl text-coffee-700 leading-relaxed">
                Откройте для себя мир премиального кофе. От классического
                эспрессо до авторских напитков — каждая чашка создана с любовью.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center gap-2">
                <Icon name="Coffee" size={20} />
                Смотреть меню
              </button>
              <button className="border border-coffee-300 text-coffee-700 px-8 py-4 rounded-lg font-semibold hover:bg-coffee-50 transition-colors">
                Узнать больше
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-coffee-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-coffee-900">1000+</div>
                <div className="text-sm text-coffee-600">Счастливых гостей</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coffee-900">15 лет</div>
                <div className="text-sm text-coffee-600">Опыта обжарки</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coffee-900">100%</div>
                <div className="text-sm text-coffee-600">Арабика премиум</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=400&fit=crop"
                  alt="Чашка кофе"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop"
                  alt="Кофейные зёрна"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop"
                  alt="Латте арт"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=400&fit=crop"
                  alt="Кофе машина"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Декоративные элементы */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-600 rounded-full opacity-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-600 rounded-full opacity-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
