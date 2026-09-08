import { CheckIcon } from "./CheckIcon";

const FEATURES = [
  "Full catalog monitoring",
  "Policy qualification + case submission",
  "You pay only for removals we cause",
];

export function Pricing() {
  return (
    <section className="bg-tint py-[100px]">
      <div className="mx-auto max-w-[1120px] px-6 text-center sm:px-10">
        <h2 className="mb-3.5 text-[28px] font-semibold text-ink sm:text-[36px]">
          Simple, Outcome-Based Pricing
        </h2>
        <p className="mx-auto mb-14 max-w-[560px] text-[17px] leading-[1.6] text-muted">
          You pay only when ReviewCraft directly causes a review removal via our process of
          policy qualification and case filing.
        </p>

        <div className="mx-auto max-w-[420px] rounded-3xl bg-navy px-9 py-11 text-left sm:px-11">
          <div className="mb-5 text-xs font-medium tracking-wide text-periwinkle">
            Billed only on verified removals
          </div>
          <div className="mb-1.5 flex items-baseline gap-1.5">
            <span className="text-[56px] font-semibold tracking-tight text-white">$200</span>
            <span className="text-[15px] text-periwinkle">/ removal</span>
          </div>
          <p className="mb-[30px] text-[13.5px] text-periwinkle">
            Volume pricing considered upon request.
          </p>
          <div className="mb-[34px] flex flex-col gap-3.5">
            {FEATURES.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5">
                <CheckIcon size={16} />
                <span className="text-[14.5px] text-[#E7EAFB]">{feature}</span>
              </div>
            ))}
          </div>
          <a
            href="#signup"
            className="mb-[18px] block rounded-[10px] bg-blue py-[13px] text-center text-[15px] font-semibold text-white"
          >
            Sign Up Free
          </a>
          <p className="text-center text-[12.5px] text-[#7C88BC]">
            Full brand coverage available when one ASIN has 500+ negative reviews.
          </p>
        </div>
      </div>
    </section>
  );
}
