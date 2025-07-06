import { Products } from "@/components/products";
import { courses } from "../courses/courses";
import { Product } from "@/components/product";

export default function ChoirAcademy() {
  const choirAcademyCourses = courses.filter(
    (course) =>
      course.id === "zomerzangdagen" ||
      course.id === "choir-academy-speelklas" ||
      course.id === "choir-academy-level-1-woensdag" ||
      course.id === "choir-academy-level-1-vrijdag" ||
      course.id === "choir-academy-level-2" ||
      course.id === "choir-academy-level-3"
  );
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl pt-8 text-center">
        Choir Academy
      </h1>
      <p className="text-xl leading-8 text-gray-600 text-center pt-4">
        Zing mee!
      </p>
      <p className="mx-auto max-w-2xl rounded-md py-8 text-center">
        Woon je in Culemborg of omgeving en wil je graag je <b>zangstem</b>,{" "}
        <b>muzikaliteit</b> en <b>podiumpresentatie</b> verbeteren? Meld je aan
        voor de Choir Academy!
      </p>
      <p className="mx-auto max-w-2xl rounded-md text-center">
        Op de academy leer je niet alleen heel veel liedjes, we besteden ook
        aandacht aan hoe je je stem gezond gebruikt en hoe je comfortabel op een
        podium staat. Daarnaast besteden we ook aandacht aan ritmegevoel,
        expressie, interpretatie en bladmuziek, zodat jij je muzikaliteit nog
        verder kan ontwikkelen.
      </p>
      <p className="mx-auto max-w-2xl py-8 rounded-md text-center">
        We repeteren elke vrijdagmiddag in de Brede School West in Culemborg,
        kom gerust een keertje kijken!
      </p>
      <div className="w-full flex gap-8">
        <Products products={choirAcademyCourses} />
      </div>
    </div>
  );
}
