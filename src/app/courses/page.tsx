import { Products } from "@/components/products";
import { courses } from "./courses";

export default function Courses() {
  return( 
    <div className="pb-8">
       <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl pt-8 text-center">
        Leer mee!
      </h1>
      <p className="text-xl leading-8 text-gray-600 text-center pt-4">Iedereen kan groeien.</p>
      <p className="mx-auto max-w-2xl rounded-md py-8 text-center">
        Wat je achtergrond ook is, of je veel ervaring hebt of net begint en of het nou gaat om <b>ritmegevoel</b>, <b>luistervaardigheden</b>, 
        <b> zangkunsten</b> of <b>digitaal inzicht</b>, je ben nooit te jong of te oud om iets nieuws te leren. 
        Samen werken we toe naar een steeds <b>hoger niveau</b>. 
      </p>
      <Products  products={courses} />
    </div>
  )
}