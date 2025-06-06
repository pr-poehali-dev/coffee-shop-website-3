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
      name: "Эспрессо классический",
      price: 150,
      images: [
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400",
      ],
      category: "hot-drinks",
      type: "espresso",
      isNew: false,
      isSale: false,
    },
    {
      id: 2,
      name: "Капучино с корицей",
      price: 220,
      images: [
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400",
      ],
      category: "hot-drinks",
      type: "milk-coffee",
      isNew: true,
      isSale: false,
    },
    {
      id: 3,
      name: "Латте ванильный",
      price: 250,
      images: [
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400",
      ],
      category: "hot-drinks",
      type: "milk-coffee",
      isNew: false,
      isSale: false,
    },
    {
      id: 4,
      name: "Бабл кофе",
      price: 280,
      originalPrice: 320,
      images: [
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400",
      ],
      category: "cold-drinks",
      type: "specialty",
      isNew: false,
      isSale: true,
    },
    {
      id: 5,
      name: "Айс кофе мятный",
      price: 230,
      images: [
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400",
      ],
      category: "cold-drinks",
      type: "ice-coffee",
      isNew: true,
      isSale: false,
    },
    {
      id: 6,
      name: "Раф кофе карамельный",
      price: 270,
      images: [
        "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400",
      ],
      category: "hot-drinks",
      type: "specialty",
      isNew: false,
      isSale: false,
    },
    {
      id: 7,
      name: "Зерновой кофе Эфиопия",
      price: 1200,
      images: [
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
      ],
      category: "beans",
      type: "single-origin",
      isNew: false,
      isSale: false,
    },
    {
      id: 8,
      name: "Темпер для эспрессо",
      price: 3500,
      images: [
        "https://images.unsplash.com/photo-1504627298434-2119005e7c5c?w=400",
      ],
      category: "accessories",
      type: "tools",
      isNew: true,
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
            <option value="hot-drinks">Горячие напитки</option>
            <option value="cold-drinks">Холодные напитки</option>
            <option value="beans">Зерновой кофе</option>
            <option value="accessories">Аксессуары</option>
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
            <button className="p-2 bg-amber-600 text-white rounded">
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
