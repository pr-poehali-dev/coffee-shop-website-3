import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  type: string;
  isNew?: boolean;
  isSale?: boolean;
  onClick: () => void;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  images,
  category,
  type,
  isNew,
  isSale,
  onClick,
}: ProductCardProps) => {
  return (
    <div
      className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
              Новинка
            </span>
          )}
          {isSale && (
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
              Скидка
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
            <Icon name="Heart" size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-coffee-900 mb-2 font-montserrat">
          {name}
        </h3>
        <p className="text-sm text-coffee-600 mb-3">{type}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-coffee-900">
              {price.toLocaleString("ru-RU")} ₽
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice.toLocaleString("ru-RU")} ₽
              </span>
            )}
          </div>

          <button className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-700 transition-colors opacity-0 group-hover:opacity-100">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
