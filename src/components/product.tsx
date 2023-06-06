import Image from "next/image";

export type ProductPreview = {
    id: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
    name: string;
    targetAudience: string;
    price: string;
  }

type ProductProps = {
  product: ProductPreview
}

export const Product:React.FC<ProductProps> = ({ product }) => 
  (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-md text-gray-500">{product.targetAudience}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
  </div>
);
