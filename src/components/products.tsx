import React from "react";
import { Product } from "./product";
import { Course } from "@/app/courses/courses";

export const Products: React.FC<{
  products: Course[];
  withTitle?: boolean;
}> = ({ products, withTitle = false }) => (
  <>
    <div className="mx-auto max-w-2xl lg:max-w-7xl ">
      {withTitle && (
        <h2 className="text-4xl font-bold tracking-tight text-indigo-950">
          Cursussen
        </h2>
      )}

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  </>
);
