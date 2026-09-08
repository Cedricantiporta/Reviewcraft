import { CheckIcon } from "./CheckIcon";
import { GradientText } from "./GradientText";

const BADGES = ["100% Amazon Compliant", "No Monthly Fees", "Pay Only for Results"];

export function Hero() {
  return (
    <section id="top" className="bg-white pt-[100px] pb-[72px]">
      <div className="mx-auto max-w-[1120px] px-6 text-center sm:px-10">
        <div className="mb-6 text-[13px] font-medium tracking-wide text-muted">
          Amazon review management
        </div>
        <h1 className="mx-auto mb-[26px] text-[40px] leading-[1.1] font-bold text-ink sm:text-[64px] sm:leading-[1.08]">
          <GradientText>Protect</GradientText> Your Amazon Business.{" "}
          <GradientText>Remove</GradientText> Unfair Reviews.{" "}
          <GradientText>Increase</GradientText> Sales.
        </h1>
        <p className="mx-auto mb-10 max-w-[600px] text-lg leading-[1.55] text-muted sm:text-xl">
          We identify and remove reviews that violate Amazon&rsquo;s policies, systematically,
          compliantly, and effectively. Sign up free, pay $200 only when reviews are removed.
        </p>
        <div className="mb-16 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#signup"
            className="rounded-[10px] bg-blue px-[26px] py-[13px] text-[15.5px] font-semibold text-white"
          >
            Get Started Free
          </a>
          <a
            href="#how-it-works"
            className="rounded-[10px] border-[1.5px] border-border bg-white px-[26px] py-[13px] text-[15.5px] font-semibold text-ink"
          >
            See How It Works
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {BADGES.map((label) => (
            <span key={label} className="flex items-center gap-1.5 text-sm text-muted">
              <CheckIcon color="#143CFB" size={15} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
