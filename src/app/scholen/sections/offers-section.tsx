import Link from "next/link";
import { blueButton, yellowButton } from "@/components/styling-strings";
import { offers, offersId } from "@/app/scholen/content";
import { BulletList, SectionHeading } from "@/app/scholen/shared";

export function OffersSection() {
  return (
    <section
      id={offersId}
      className="w-full bg-linear-to-b from-yellow-300/70 to-white px-4 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Aanbod"
          title="Kies de vorm die past bij jullie school"
          intro="Het verschil is direct duidelijk: Doe Mee is kort en laagdrempelig, Muziek in de Klas is structureel en gericht op duurzame opbouw."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
        {offers.map((offer) => {
          const isDark = offer.theme === "dark";
          const articleClassName = isDark
            ? "relative overflow-hidden rounded-[2rem] border border-indigo-200 bg-indigo-950 p-6 text-white shadow-lg sm:p-8"
            : "relative overflow-hidden rounded-[2rem] border border-indigo-100 bg-white p-6 shadow-sm sm:p-8";
          const eyebrowClassName = isDark
            ? "text-sm font-semibold uppercase tracking-[0.18em] text-yellow-300"
            : "text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700";
          const badgeClassName = isDark
            ? "inline-flex rounded-full bg-yellow-300 px-4 py-1 text-sm font-bold text-indigo-950"
            : "inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-bold text-indigo-800";
          const priceWrapperClassName = isDark
            ? "rounded-2xl bg-white/10 px-4 py-3 text-left sm:text-right"
            : "rounded-2xl bg-indigo-50 px-4 py-3 text-left sm:text-right";
          const priceLabelClassName = isDark
            ? "text-xs uppercase tracking-[0.16em] text-white/70"
            : "text-xs uppercase tracking-[0.16em] text-slate-500";
          const priceValueClassName = isDark
            ? "text-2xl font-bold text-yellow-300"
            : "text-2xl font-bold text-indigo-950";
          const noteClassName = isDark
            ? "mt-6 border-t border-white/10 pt-6 text-sm leading-6 text-white/75"
            : "mt-6 border-t border-indigo-100 pt-6 text-sm leading-6 text-slate-600";
          const descriptionClassName = isDark
            ? "mt-4 text-base leading-7 text-white/85"
            : "mt-4 text-base leading-7 text-slate-700";
          const buttonClassName = (variant: "primary" | "secondary") =>
            variant === "primary" ? yellowButton : blueButton;

          return (
            <article key={offer.title} className={articleClassName}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className={eyebrowClassName}>{offer.eyebrow}</p>
                  <h3 className={`mt-3 text-2xl font-bold ${isDark ? "text-white" : "text-indigo-950"}`}>
                    {offer.title}
                  </h3>
                </div>
                <div className={badgeClassName}>{offer.badge}</div>
              </div>
              {offer.priceLabel ? (
                <div className={`mt-5 ${priceWrapperClassName}`}>
                  <p className={priceLabelClassName}>Investering</p>
                  <p className={priceValueClassName}>{offer.priceLabel}</p>
                </div>
              ) : null}
              <p className={descriptionClassName}>{offer.description}</p>
              <div className="mt-6">
                <BulletList
                  items={offer.bullets}
                  textClassName={isDark ? "text-white/85" : "text-slate-700"}
                  iconClassName={isDark ? "text-yellow-300" : "text-indigo-700"}
                />
              </div>
              <p className={noteClassName}>{offer.note}</p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                {offer.ctas.map((cta) => (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={`${buttonClassName(cta.variant)} w-full sm:w-auto`}
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            </article>
          );
        })}
        </div>
      </div>
    </section>
  );
}
