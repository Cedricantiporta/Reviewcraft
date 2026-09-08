const STEPS = [
  {
    number: "1",
    title: "Sign Up & Connect",
    body: "Create your account and connect Brand Registry access so we can submit policy advocacy on your behalf. No Seller Central access is required. You remain in full control of your account at all times.",
  },
  {
    number: "2",
    title: "Continuous Review Analysis",
    body: "Once connected, ReviewCraft continuously analyzes reviews across your entire catalog against Amazon's Community Guidelines. This monitoring runs in the background and is ongoing, not one-time.",
  },
  {
    number: "3",
    title: "Professional Case Advocacy",
    body: "For reviews that qualify, we prepare detailed, policy-aligned cases and submit them through Amazon's official moderation channels. We prioritize precision over volume.",
  },
  {
    number: "4",
    title: "Persistent Follow-Through",
    body: "Some reviews resolve quickly; others take weeks or months. Some valid submissions are never actioned. We continue advocacy for as long as monitoring remains active.",
  },
  {
    number: "5",
    title: "Removal & Causation-Based Billing",
    body: "When Amazon removes a review as a direct result of our advocacy, it's a caused removal. You are billed only for removals we directly cause; independent removals are never billed.",
  },
];

export function Process() {
  return (
    <section id="how-it-works" className="bg-white py-[100px]">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-10">
        <div className="mx-auto mb-8 max-w-[680px] text-center">
          <div className="mb-4 text-[13px] font-medium tracking-wide text-blue">Simple process</div>
          <h2 className="text-[32px] leading-[1.15] font-semibold text-ink sm:text-[40px]">
            How ReviewCraft Works
          </h2>
        </div>

        <div className="mx-auto mb-[72px] max-w-[680px] text-center">
          <p className="mb-3.5 text-[15px] leading-[1.6] text-body">
            <strong className="text-ink">Before You Start:</strong> ReviewCraft is a
            continuous, always-on monitoring service, not a one-time cleanup tool. There are
            no campaigns to manage, no reviews to select, and no deadlines to set.
          </p>
          <p className="text-sm leading-[1.6] text-muted">
            Amazon controls all moderation decisions and timing. We cannot guarantee, accelerate,
            or predict removals.
          </p>
        </div>

        <div className="mx-auto flex max-w-[640px] flex-col gap-14">
          {STEPS.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="w-12 shrink-0 text-[32px] font-semibold tracking-tight text-blue">
                {step.number}
              </div>
              <div>
                <h3 className="mb-2 text-[19px] font-semibold text-ink">{step.title}</h3>
                <p className="text-[15px] leading-[1.6] text-body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#signup"
            className="inline-block rounded-[10px] bg-blue px-7 py-[13px] text-[15.5px] font-semibold text-white"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  );
}
