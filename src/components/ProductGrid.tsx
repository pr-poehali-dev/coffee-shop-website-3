import { useState } from "react";
import ProductCard from "./ProductCard";
import Icon from "@/components/ui/icon";

const ProductGrid = ({
  onProductClick,
}: {
  onProductClick: (id: number) => void;
}) => {
  const [sortBy, setSortBy] = useState("popularity");
  const [filterBy, setFilterBy] = useState("all");

  const products = [
    {
      id: 1,
      name: "Сумка Paris",
      price: 12900,
      originalPrice: 15900,
      images: [
        "https://cdn.poehali.dev/files/c460373d-9f90-429e-a12d-e7e999fee0f4.jpg",
      ],
      material: "Натуральная кожа",
      isNew: false,
      isSale: true,
    },
    {
      id: 2,
      name: "Клатч Milano",
      price: 8500,
      images: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      ],
      material: "Итальянская кожа",
      isNew: true,
      isSale: false,
    },
    {
      id: 3,
      name: "Рюкзак Urban",
      price: 9800,
      images: [
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
      ],
      material: "Эко-кожа",
      isNew: false,
      isSale: false,
    },
    {
      id: 4,
      name: "Сумка Elegance",
      price: 16500,
      originalPrice: 19900,
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
      ],
      material: "Натуральная кожа",
      isNew: false,
      isSale: true,
    },
    {
      id: 5,
      name: "Сумка Casual",
      price: 7200,
      images: [
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400",
      ],
      material: "Замша",
      isNew: true,
      isSale: false,
    },
    {
      id: 6,
      name: "Деловая сумка Executive",
      price: 22900,
      images: [
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400",
      ],
      material: "Премиум кожа",
      isNew: false,
      isSale: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Фильтры и сортировка */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex flex-wrap gap-4">
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="all">Все категории</option>
            <option value="handbags">Сумки</option>
            <option value="clutch">Клатчи</option>
            <option value="backpack">Рюкзаки</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="popularity">По популярности</option>
            <option value="price-low">По возрастанию цены</option>
            <option value="price-high">По убыванию цены</option>
            <option value="newest">Сначала новые</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-600">
            Показано: {products.length} товаров
          </span>
          <div className="flex gap-2 ml-4">
            <button className="p-2 bg-red-600 text-white rounded">
              <Icon name="Grid3X3" size={16} />
            </button>
            <button className="p-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
              <Icon name="List" size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Сетка товаров */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onClick={() => onProductClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
