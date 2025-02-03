import { Course } from "@/app/courses/courses";
import Image from "next/image";
import Link from "next/link";

export type ProductPreview = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  name: string;
  targetAudience: string;
  price: string;
};

type ProductProps = {
  product: Course;
};

export const Product: React.FC<ProductProps> = ({ product }) => (
  <div
    className="relative h-96 w-full flex items-end justify-start text-left bg-cover bg-center rounded-md hover:opacity-90 overflow-hidden"
    style={{ backgroundImage: `url(${product.imageSrc})` }}
  >
    <Link
      href={product.href}
      className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"
    ></Link>
    <div className="p-5 z-10">
      <h3
        className="text-md tracking-tight font-medium leading-7 text-2xl text-white"
        style={{ color: "rgb(var(--background-start-rgb))" }}
      >
        <Link href={product.href}>{product.name}</Link>
      </h3>
      <p className="mt-1 text-md text-gray-300">{product.targetAudience}</p>
      <ul className="flex gap-2 flex-wrap pt-2">
        {product.themes.map((theme) => (
          <li
            className="bg-indigo-600 text-gray-300 text-xs font-medium px-2.5 pt-0.5 pb-1 rounded-full"
            key={`${product.name}-${theme}`}
          >
            {theme}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
