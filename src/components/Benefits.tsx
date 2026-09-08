const BENEFITS = [
  {
    title: "Increased Conversion Rate",
    body: "Higher ratings directly translate to more sales. Even a 0.5-star improvement can boost conversions by 10–20%.",
    icon: (
      <>
        <path d="M4 20L10 14L14.5 18L22 8" stroke="#143CFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 8H22V14" stroke="#143CFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Better Search Rankings",
    body: "Amazon's algorithm rewards products with higher ratings, giving you better organic visibility.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" stroke="#143CFB" strokeWidth="2" />
        <path d="M21 21L16 16" stroke="#143CFB" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Lower Advertising Costs",
    body: "Better ratings mean higher Quality Scores and lower cost-per-click on Amazon PPC campaigns.",
    icon: <path d="M4 22V13M13 22V4M22 22V9" stroke="#143CFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Protected Brand Reputation",
    body: "Remove malicious, fake, or competitor-driven reviews that unfairly damage your products.",
    icon: <path d="M13 3L21 7V13C21 18 17.5 21.5 13 23C8.5 21.5 5 18 5 13V7L13 3Z" stroke="#143CFB" strokeWidth="2" strokeLinejoin="round" />,
  },
  {
    title: "Competitive Advantage",
    body: "Stand out in crowded categories where ratings are often the deciding factor for buyers.",
    icon: (
      <>
        <path d="M13 3V13L20 17" stroke="#143CFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="13" cy="13" r="10" stroke="#143CFB" strokeWidth="2" />
      </>
    ),
  },
  {
    title: "Win the Buy Box",
    body: "Product rating is a key factor in Buy Box eligibility. Higher ratings mean more Buy Box wins.",
    icon: (
      <>
        <rect x="4" y="6" width="18" height="14" rx="2" stroke="#143CFB" strokeWidth="2" />
        <path d="M4 11H22" stroke="#143CFB" strokeWidth="2" />
      </>
    ),
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-white py-[100px]">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-10">
        <div className="mx-auto mb-[72px] max-w-[680px] text-center">
          <div className="mb-4 text-[13px] font-medium tracking-wide text-blue">
            Why ReviewCraft works
          </div>
          <h2 className="mb-[18px] text-[32px] leading-[1.15] font-semibold text-ink sm:text-[40px]">
            Real Impact on Your Business
          </h2>
          <p className="text-lg leading-[1.55] text-muted">
            Here&rsquo;s what happens when you remove policy-violating reviews
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title}>
              <svg width="24" height="24" viewBox="0 0 26 26" fill="none" className="mb-[18px]">
                {benefit.icon}
              </svg>
              <h3 className="mb-2.5 text-[17px] font-semibold text-ink">{benefit.title}</h3>
              <p className="text-[15px] leading-[1.6] text-body">{benefit.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
