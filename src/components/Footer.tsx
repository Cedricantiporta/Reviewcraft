import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-10">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-10">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="mb-3.5 flex items-center gap-2.5">
              <Logo size={24} />
              <span className="text-base font-semibold text-ink">ReviewCraft</span>
            </div>
            <p className="text-sm text-muted">Professional Amazon Review Management</p>
          </div>
          <div>
            <div className="mb-4 text-xs font-semibold tracking-wide text-ink">Quick links</div>
            <div className="flex flex-col gap-3">
              <a href="#how-it-works" className="text-sm text-muted hover:text-ink">
                How It Works
              </a>
              <a href="#faq" className="text-sm text-muted hover:text-ink">
                FAQ
              </a>
            </div>
          </div>
          <div>
            <div className="mb-4 text-xs font-semibold tracking-wide text-ink">Legal &amp; support</div>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-muted hover:text-ink">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted hover:text-ink">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-2.5 text-[12.5px] text-[#9AA3C4]">&copy; 2026 ReviewCraft. All rights reserved.</p>
          <p className="text-[11.5px] leading-[1.6] text-[#9AA3C4]">
            ReviewCraft is not affiliated with, endorsed by, or sponsored by Amazon.com, Inc. or
            any of its affiliates. ReviewCraft assists sellers in identifying and reporting
            reviews that violate Amazon&rsquo;s Community Guidelines using Amazon&rsquo;s official
            reporting channels.
          </p>
        </div>
      </div>
    </footer>
  );
}
