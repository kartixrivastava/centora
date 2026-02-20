import { Component1, Component2, Component3 } from "../icons";

const steps = [
  {
    title: "Schedule kickoff",
    description:
      "Align on scope, structure, and timeline. Whether it's a quick setup or a full migration, we'll take it from there.",
    Icon: Component1,
  },
  {
    title: "Real-time collaboration",
    description:
      "Work alongside our team with full visibility. Every step follows best practices and thorough QA to ensure quality.",
    Icon: Component2,
  },
  {
    title: "Launch and scale",
    description:
      "Go live with confidence. Our AI continuously learns and improves, helping your team scale effortlessly.",
    Icon: Component3,
  },
];

const HowItWorks = () => {
  return (
    <section className="flex w-full flex-col items-start bg-[#F5F5F5] px-55.75 py-0">
      <div className="flex max-w-5xl self-stretch items-start justify-center gap-20 px-6 py-28">
        {/* Left Side */}
        <div className="flex flex-1 flex-col items-start gap-[23.4px]">
          <h2 className="self-stretch text-5xl font-stretch-expanded text-[#0A0A0A] text-[60px] font-[590] leading-15 tracking-[-1.5px]">
            How it works
          </h2>

          <p className="max-w-md self-stretch pb-[8.6px] text-[16.9px] font-normal leading-[29.25px] text-[rgba(10,10,10,0.60)]">
            Your platform, configured by experts and launched on an{" "}
            <span className="text-[16.9px] font-[510] leading-[29.25px] text-[#0A0A0A]">
              Enterprise plan,
            </span>{" "}
            ready to grow with you.
          </p>

          <a
            href="#"
            className="flex items-center rounded-2xl bg-[#0A0A0A] px-6 py-3 text-[13.7px] font-[590] leading-5 text-[#F5F5F5]"
          >
            Schedule Kickoff
          </a>
        </div>

        {/* Right Side */}
        <div className="relative flex flex-1 flex-col items-start">
          {/* Vertical Line */}
          <div className="absolute left-5.75 top-6 flex w-0.5 flex-col items-center justify-center pb-[2.02px]">
            <div className="h-[753.98px] w-0.5 bg-[#A8D946]" />
          </div>

          <ul className="flex flex-col items-start self-stretch">
            {steps.map(({ title, description, Icon }, index) => (
              <li
                key={index}
                className="flex items-start gap-5 self-stretch pb-64"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#A8D946]">
                  <Icon className="h-5 w-5 shrink-0" />
                </div>

                <div className="flex flex-col items-start gap-2 self-stretch pt-1">
                  <h3 className="self-stretch text-3xl font-bold">{title}</h3>

                  <p className="max-w-[384px] self-stretch text-[15.3px] font-normal leading-6.5 text-[rgba(10,10,10,0.60)]">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
