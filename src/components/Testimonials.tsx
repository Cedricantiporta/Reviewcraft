const TESTIMONIALS = [
  {
    quote:
      "ReviewCraft removed 14 fake reviews from our main product in less than two weeks. Our conversion rate increased by 16% and we're finally back to a 4.6-star rating. Worth every penny.",
    initials: "SC",
    name: "Sarah Chen",
    title: "Brand Manager, Health & Wellness",
  },
  {
    quote:
      "After a competitor attack left us with dozens of suspicious 1-star reviews, ReviewCraft systematically got them removed. The process was completely transparent and we never felt at risk.",
    initials: "MT",
    name: "Michael Torres",
    title: "Founder, Home Goods Brand",
  },
  {
    quote:
      "The best part is the pay-per-result model. We only paid for the reviews that were actually removed. No monthly fees, no surprises, just results.",
    initials: "JP",
    name: "Jennifer Park",
    title: "E-commerce Director, Kitchen Products",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-tint py-[100px]">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-10">
        <div className="mx-auto mb-[72px] max-w-[680px] text-center">
          <div className="mb-4 text-[13px] font-medium tracking-wide text-blue">Success stories</div>
          <h2 className="text-[32px] leading-[1.15] font-semibold text-ink sm:text-[40px]">
            Trusted by Amazon Sellers
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="flex flex-col">
              <p className="mb-[26px] flex-1 text-[15px] leading-[1.65] text-body">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-periwinkle text-[13px] font-semibold text-navy">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-[12.5px] text-muted">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
