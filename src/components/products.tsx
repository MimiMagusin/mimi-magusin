import React from "react";
import { Product, ProductPreview } from "./product";

export const Products: React.FC<{products: ProductPreview[]}> = ({ products }) => (
  <div className="">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl ">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900">Cursussen</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    </div>
  </div>
)