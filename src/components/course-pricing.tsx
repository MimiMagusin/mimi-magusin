import { CoursePricing } from "@/app/courses/courses";

type CoursePricingDetailsProps = {
  pricing?: CoursePricing;
  title?: string;
  className?: string;
}

export const CoursePricingDetails: React.FC<CoursePricingDetailsProps> = ({
  pricing,
  title = "Kosten",
  className = "",
}) => {
  if (!pricing) return null;

  return (
    <div className={className}>
      <h3 className="text-2xl font-bold text-indigo-950">{title}</h3>
      <ul className="mt-4 space-y-3 text-base text-gray-800">
        <li>
          <strong>Per jaar:</strong> {pricing.yearlyTotal}
        </li>
        <li>
          <strong>Per les:</strong> {pricing.perLesson}
        </li>
        <li>
          <strong>Betalen:</strong> {pricing.paymentPlan}
        </li>
        <li>
          <strong>Inbegrepen:</strong> {pricing.includes}
        </li>
        <li>
          <strong>Broers & zussen:</strong> {pricing.siblingDiscount}
        </li>
      </ul>

      <p className="mt-6 text-base text-gray-800">
        <strong>Financiële ondersteuning:</strong> {pricing.financialSupport}
      </p>

      <p className="mt-3 text-base text-gray-800">
        <strong>Proefles:</strong> {pricing.trial}
      </p>
    </div>
  );
};
