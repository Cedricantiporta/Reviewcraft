export function CtaSection() {
  return (
    <section className="bg-navy py-[100px] text-center">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-10">
        <h2 className="mb-[18px] text-[30px] font-semibold tracking-tight text-white sm:text-[38px]">
          Ready to Restore Your Amazon Reputation?
        </h2>
        <p className="mx-auto mb-9 max-w-[520px] text-[17px] leading-[1.6] text-periwinkle">
          Join hundreds of sellers who&rsquo;ve protected their business with ReviewCraft. Sign up
          free in under 60 seconds.
        </p>
        <a
          id="signup"
          href="#"
          className="mb-10 inline-block rounded-[10px] bg-blue px-7 py-[13px] text-[15.5px] font-semibold text-white"
        >
          Sign Up Free
        </a>
        <div className="flex flex-wrap justify-center gap-8 text-[13.5px] text-periwinkle">
          <span>15,000+ Reviews Removed</span>
          <span>Always-On Monitoring</span>
          <span>No Monthly Fees</span>
        </div>
      </div>
    </section>
  );
}
