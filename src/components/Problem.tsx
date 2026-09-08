import { CheckIcon } from "./CheckIcon";

const IMPACT = [
  "22% drop in conversion from a single 1-star review",
  "Lower search rankings when your rating falls below 4.5 stars",
  "Higher ad costs to compensate for poor ratings",
  "Lost Buy Box opportunities to competitors",
];

const VIOLATIONS = [
  "Are fake or from unverified purchases",
  "Contain profanity or personal attacks",
  "Come from competitors or coordinated attacks",
  "Focus on shipping issues (not product quality)",
  "Violate conflict-of-interest policies",
  "Include misleading or false information",
  "Are spam or bot-generated content",
];

export function Problem() {
  return (
    <section className="bg-tint py-[100px]">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-10">
        <div className="mx-auto mb-[72px] max-w-[680px] text-center">
          <div className="mb-4 text-[13px] font-medium tracking-wide text-blue">The problem</div>
          <h2 className="mb-[18px] text-[32px] leading-[1.15] font-semibold text-ink sm:text-[40px]">
            One Negative Review Can Cost You Thousands
          </h2>
          <p className="text-lg leading-[1.55] text-muted">
            Amazon sellers face a critical challenge: negative reviews that damage your
            business&mdash;even when they violate Amazon&rsquo;s own policies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:gap-14 md:grid-cols-2">
          <div>
            <h3 className="mb-[22px] text-xl font-semibold text-ink">The Impact</h3>
            <div className="flex flex-col gap-[18px]">
              {IMPACT.map((line) => (
                <p key={line} className="text-base leading-[1.55] text-body">
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-6 text-[15px] text-muted italic">
              The worst part? Many of these reviews shouldn&rsquo;t even be there.
            </p>
          </div>

          <div>
            <h3 className="mb-2.5 text-xl font-semibold text-ink">Common Violations</h3>
            <p className="mb-[22px] text-[15px] text-muted">Amazon removes reviews that:</p>
            <div className="flex flex-col gap-[15px]">
              {VIOLATIONS.map((line) => (
                <div key={line} className="flex items-start gap-2.5">
                  <span className="mt-1">
                    <CheckIcon />
                  </span>
                  <p className="text-[15px] leading-[1.5] text-body">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
