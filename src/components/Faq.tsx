"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Is ReviewCraft compliant with Amazon's Terms of Service?",
    a: "Absolutely. We only target reviews that violate Amazon's own Community Guidelines, and we use only Amazon's official reporting channels to file cases. Our process is 100% white-hat and designed to protect your account. Amazon encourages sellers to report policy violations, and we do this professionally on your behalf.",
  },
  {
    q: "Will this hurt my Amazon account?",
    a: "No. We use Amazon's official reporting system, which they provide specifically for reporting policy violations. Filing legitimate reports is encouraged by Amazon and helps maintain marketplace integrity. We've processed thousands of removal cases without any account penalties.",
  },
  {
    q: "What access do you need to my Amazon account?",
    a: "We only need limited 'user' access to your Seller Central account. This lets us view reviews and file cases on your behalf. We never have access to your financial information, inventory, pricing, or product listings. You remain in complete control of your account.",
  },
  {
    q: "Do you use automation or mass abuse-report systems?",
    a: "No. We do not use automated reporting networks, scaled browser environments, or bulk abuse-report systems. Amazon has, in certain instances, taken action to remove third-party users from seller accounts when activity patterns suggested automation or excessive reporting velocity, while reiterating that sellers are responsible for all authorized account access. Our methodology is 100% manual, compliance-first, and case-based. Every review is individually evaluated against Amazon's published Community Guidelines before any action is taken. We prioritize sustainable, policy-aligned removals over high-volume tactics that don't necessarily produce higher removal rates, while potentially increasing regulatory and enforcement exposure as scrutiny around review manipulation continues to rise.",
  },
  {
    q: "What types of reviews can be removed?",
    a: "Only product reviews that violate Amazon's Community Guidelines can be removed. This may include reviews containing non-product content, personal attacks, conflicts of interest, spam, or other policy violations. We cannot remove legitimate product reviews unless there is a policy violation. Amazon makes the final determination in every case.",
  },
  {
    q: "How long does the process take?",
    a: "ReviewCraft works continuously in the background once monitoring begins. When Amazon agrees that a review violates policy, removals can occur relatively quickly. In other cases, reviews take longer to resolve and may require extended advocacy. Amazon controls all moderation decisions and timing. Some reviews take weeks or months to resolve, and some valid submissions are never actioned by Amazon.",
  },
  {
    q: "What if Amazon rejects a removal request?",
    a: "Some cases do get initially rejected. When this happens, we analyze the rejection reason and, if appropriate, refile with additional evidence. Our high success rate comes from this persistence. If we ultimately can't get a review removed, you're never charged for that attempt.",
  },
  {
    q: "Why can't I pick specific reviews?",
    a: "Amazon does not allow third parties to target specific reviews for guaranteed removal. Our process identifies reviews that appear to violate Amazon's published policies and submits structured cases accordingly. Final moderation decisions, including which reviews are removed and when, are made solely by Amazon.",
  },
  {
    q: "What happens if a review remains?",
    a: "Amazon controls all final moderation decisions. Some reviews may remain despite valid policy-based submissions. When appropriate, we re-evaluate and re-engage cases with additional documentation. If a review does not meet Amazon's removal threshold, we close the file and continue monitoring. ReviewCraft operates as part of Seller Resolve's broader case-management practice, bringing extensive experience in Amazon account health, compliance, and structured escalation. Our role is disciplined case execution; Amazon makes the final call.",
  },
  {
    q: "How many reviews can you remove?",
    a: "The number of reviews that can be removed depends on how many reviews actually violate Amazon's policies. ReviewCraft operates continuously and evaluates reviews over time, rather than targeting a fixed set upfront. In practice, removals tend to be modest and uneven, because policy violations are relatively rare and Amazon evaluates each case independently. We cannot remove legitimate product reviews unless there is a policy violation. You are only billed when Amazon removes a review as a direct result of our advocacy.",
  },
  {
    q: "Do you guarantee a specific number of removals?",
    a: "We cannot guarantee specific removal numbers because Amazon makes the final decision on every case. However, our pay-per-result model means you only pay for reviews that are actually removed. We'll show you upfront how many violations we've identified so you know what to expect.",
  },
  {
    q: "Why aren't removal numbers higher?",
    a: "Removal outcomes depend entirely on review content and Amazon's moderation discretion. We submit qualified cases consistently, but Amazon determines if and when a review is removed. Volume isn't something we restrict; it's something Amazon governs. That's why we recommend always-on monitoring across 1–3 star reviews: every non-compliant review is identified and submitted, so when Amazon acts, your rating structure is protected over time.",
  },
  {
    q: "How much should I expect to spend per month?",
    a: "Monthly costs are naturally self-regulating. Most mid-size accounts (300–3,000 negative reviews) see 0–5 removals per month, and even large catalogs rarely exceed ~20, so billing tends to be steady rather than runaway. Some months may produce no removals at all, which is normal given that outcomes depend entirely on review content and Amazon's moderation discretion. If budget control is a priority, we can start with 1-star coverage only and expand to 2- and 3-star reviews at your own pace.",
  },
  {
    q: "Why do you recommend always-on coverage across 1–3 star reviews?",
    a: "Policy violations frequently appear outside just 1-star feedback. Limiting coverage may leave non-compliant 2- and 3-star reviews untouched, even when they distort your rating profile. Always-on monitoring across all negative star ratings ensures every policy violation is identified and submitted. Because Amazon controls removal timing, consistent submission is the most disciplined way to protect rating structure over time. If budget is a concern, coverage can begin with 1-star reviews and expand later.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M3 6L8 11L13 6"
        stroke={open ? "#143CFB" : "#6A7496"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-[100px]">
      <div className="mx-auto max-w-[720px] px-6 sm:px-10">
        <div className="mb-14 text-center">
          <div className="mb-4 text-[13px] font-medium tracking-wide text-blue">Got questions?</div>
          <h2 className="text-[28px] font-semibold text-ink sm:text-[36px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-9">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <h3 className="text-base font-semibold text-ink">{item.q}</h3>
                  <ChevronIcon open={open} />
                </button>
                {open && (
                  <p className="mt-4 text-[15px] leading-[1.65] text-body">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
