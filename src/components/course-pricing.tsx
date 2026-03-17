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
        {pricing.schoolYearFee && (
          <li>
            <strong>Contributie:</strong> {pricing.schoolYearFee}
          </li>
        )}
        {pricing.installmentFee && (
          <li>
            <strong>Betalen in twee termijnen:</strong> {pricing.installmentFee}
          </li>
        )}
      </ul>

      {pricing.blocks && pricing.blocks.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-800">
            Blokken
          </p>
          <ul className="mt-3 space-y-2 text-base text-gray-800">
            {pricing.blocks.map((block) => (
              <li key={block.label}>
                <strong>{block.label}:</strong> {block.period}
              </li>
            ))}
          </ul>
        </div>
      )}

      {pricing.lateJoinPricePerLesson && (
        <p className="mt-6 text-base text-gray-800">
          <strong>Later instromen:</strong> Nieuwe leerlingen kunnen ook later
          in het jaar aansluiten. In dat geval bedraagt de contributie{" "}
          {pricing.lateJoinPricePerLesson}.
        </p>
      )}
    </div>
  );
};
