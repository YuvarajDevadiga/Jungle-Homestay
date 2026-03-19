export function Footer() {
  return (
    <footer className="rounded-t-[2.5rem] bg-[#f6f3ea] px-4 py-16 text-sm text-[#626956] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="font-display text-lg font-bold text-[#065F46]">Jungle Homestay Gandalki</h2>
          <p className="mt-4 max-w-xs leading-7">
            Connecting people with nature through authentic stays and thoughtful hospitality in Bhatkal.
          </p>
        </div>
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#064E3B]">Quick links</h3>
          <div className="mt-5 space-y-3">
            <a href="#about" className="block transition hover:text-[#123f1d]">
              About
            </a>
            <a href="#rooms" className="block transition hover:text-[#123f1d]">
              Rooms
            </a>
            <a href="#activities" className="block transition hover:text-[#123f1d]">
              Activities
            </a>
            <a href="#location" className="block transition hover:text-[#123f1d]">
              Contact
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#064E3B]">Address</h3>
          <p className="mt-5 leading-7">
            Gandalki, Hadavalli,
            <br />
            Bhatkal, Karnataka 581320
            <br />
            <br />&copy; 2026 Jungle Homestay Gandalki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}