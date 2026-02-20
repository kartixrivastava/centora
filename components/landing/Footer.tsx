type FooterLinkGroup = {
  title: string;
  minWidth?: string;
  links: { label: string; href: string }[];
};

const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "MENU",
    minWidth: "min-w-[70.06px]",
    links: [
      { label: "Customers", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Help", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "SOCIAL",
    minWidth: "min-w-[68.17px]",
    links: [
      { label: "X (Twitter)", href: "#" },
      { label: "Email", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

const headingClass =
  "flex flex-col items-start self-stretch text-[rgba(23,23,23,0.50)] font-['SF_Pro'] text-[12px] font-[510] leading-[16px] tracking-[0.6px] uppercase";

const linkClass =
  "flex flex-col items-start self-stretch pt-[2.75px] pb-[1.25px] text-[#171717] font-['SF_Pro'] text-[13.7px] font-[400] leading-[20px]";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center bg-[#F5F5F5] pt-[152px]">
      <div className="flex flex-col items-start self-stretch rounded-b-none rounded-tl-[48px] rounded-tr-[48px] bg-[#A8D946] px-[213px] pb-[64px] pt-[384px]">
        <div className="flex max-w-[1024px] flex-col items-start gap-[88px] self-stretch px-[24px] py-[0px]">
          <div className="flex items-start gap-[532.8px] self-stretch">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-[8px]"
              aria-label="Centora Home"
            >
              <div className="h-[32px] w-[32px] rounded-[16777200px] bg-[#171717]" />
              <span className="flex flex-col items-start font-['SF_Pro'] text-[20px] font-[590] leading-[0px] text-[#171717]">
                Centora
              </span>
            </a>

            {/* Navigation */}
            <nav
              className="flex items-start gap-[64px]"
              aria-label="Footer Navigation"
            >
              {FOOTER_LINK_GROUPS.map((group) => (
                <div
                  key={group.title}
                  className={`flex flex-col items-start gap-[16px] self-stretch ${
                    group.minWidth ?? ""
                  }`}
                >
                  <h2 className={headingClass}>{group.title}</h2>

                  <ul className="flex flex-col items-start gap-[8px] self-stretch">
                    {group.links.map((link) => (
                      <li key={link.label} className="self-stretch">
                        <a href={link.href} className={linkClass}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {/* Copyright */}
          <p className="flex flex-col items-center self-stretch text-center font-['SF_Pro'] text-[13.6px] font-[400] leading-[20px] text-[rgba(23,23,23,0.50)]">
            © 2026 Circular. All rights reserved.
          </p>
        </div>
      </div>

      <div className="absolute left-[380px] flex w-[1024px] bottom-[780px] flex-col items-start">
        <div className="flex flex-col items-start self-stretch rounded-[24px] bg-[rgba(255,255,255,0)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">
          <img
            src="/Assests/Blurred.jpg"
            alt=""
            className="absolute left-[-128px]  top-[-52.5px] w-[1280px] h-[450px]  rounded-2xl"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
