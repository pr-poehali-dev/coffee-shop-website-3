import { useState } from "react";
import Icon from "@/components/ui/icon";

interface ProductPageProps {
  productId: number;
  onBack: () => void;
}

const ProductPage = ({ productId, onBack }: ProductPageProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("specs");
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: productId,
    name: "Сумка Paris",
    price: 12900,
    originalPrice: 15900,
    images: [
      "https://cdn.poehali.dev/files/c460373d-9f90-429e-a12d-e7e999fee0f4.jpg",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    ],
    material: "Натуральная кожа",
    sizes: "30 × 25 × 12 см",
    weight: "0,8 кг",
    warranty: "12 месяцев",
    inStock: true,
    description:
      "Элегантная сумка из натуральной кожи высокого качества. Идеально подходит для деловых встреч и повседневного использования.",
    care: [
      "Избегайте контакта с водой и агрессивными жидкостями",
      "Храните в защитном чехле вдали от прямых солнечных лучей",
      "Для чистки используйте специальные средства для кожи",
      "При загрязнении протирайте мягкой тканью",
      "Не перегружайте сумку тяжёлыми предметами",
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Навигация назад */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-red-600 mb-6 transition-colors"
      >
        <Icon name="ArrowLeft" size={20} />
        Назад к каталогу
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Галерея изображений */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? "border-red-600" : "border-gray-200"
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Информация о товаре */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-gray-900">
                {product.price.toLocaleString("ru-RU")} ₽
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {product.originalPrice.toLocaleString("ru-RU")} ₽
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                  Скидка{" "}
                  {Math.round(
                    (1 - product.price / product.originalPrice) * 100,
                  )}
                  %
                </span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Количество и добавление в корзину */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Количество:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-50"
                >
                  <Icon name="Minus" size={16} />
                </button>
                <span className="px-4 py-2 border-x border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-50"
                >
                  <Icon name="Plus" size={16} />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Добавить в корзину
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Icon name="Heart" size={20} />
              </button>
            </div>

            {product.inStock ? (
              <div className="flex items-center gap-2 text-green-600">
                <Icon name="Check" size={16} />
                <span className="text-sm">В наличии</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-red-600">
                <Icon name="X" size={16} />
                <span className="text-sm">Нет в наличии</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Табы с характеристиками */}
      <div className="mt-16">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("specs")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "specs"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Характеристики
            </button>
            <button
              onClick={() => setActiveTab("care")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "care"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Уход
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "reviews"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Отзывы (3)
            </button>
          </nav>
        </div>

        <div className="py-8">
          {activeTab === "specs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Основные характеристики
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Материал</span>
                    <span className="text-gray-900">{product.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Размеры</span>
                    <span className="text-gray-900">{product.sizes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Вес</span>
                    <span className="text-gray-900">{product.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Гарантия</span>
                    <span className="text-gray-900">{product.warranty}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "care" && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Уход</h3>
              <ul className="space-y-2">
                {product.care.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Отзывы покупателей
              </h3>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-semibold text-gray-900">Анна М.</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon
                          key={star}
                          name="Star"
                          size={16}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Отличная сумка! Качество кожи превосходное, размер идеальный
                    для повседневного использования.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
