'use client';

import React, { useState, useEffect } from "react";
import { CommandR, FocalPoint, AcmeCorp, Interlock } from "@/components/icons";

const teamMembers = [
  {
    name: "Jennifer Walsh",
    img: "/Assets/JenniferWalsh.png",
    role: "Product Designer",
    feedback:
      "This platform completely transformed how our team collaborates. The workflow is smooth and incredibly intuitive.",
  },
  {
    name: "Micheal Torres",
    img: "/Assets/MichealTorres.png",
    role: "Engineering Manager",
    feedback:
      "We improved delivery speed by 40% after adopting this solution. It keeps everyone aligned and focused.",
  },
  {
    name: "Amanda Chen",
    img: "/Assets/AmandaChen.png",
    role: "Marketing Lead",
    feedback:
      "The analytics and reporting features give us real clarity. Decision-making has never been this data-driven.",
  },
  {
    name: "David Patterson",
    img: "/Assets/DavidPatterson.png",
    role: "Operations Head",
    feedback:
      "From onboarding to daily execution, everything feels seamless. It’s become essential to our workflow.",
  },
];

const logos = [
  {
    name: "CommandR",
    component: <CommandR />,
    wrapperClass:
      "inline-flex h-[40px] flex-col items-start aspect-9/2",
    innerClass: "w-[180px] h-[40px] shrink-0 opacity-100",
  },
  {
    name: "Interlock",
    component: <Interlock />,
    wrapperClass:
      "inline-flex h-[44px] flex-col items-start aspect-[149.41/44]",
    innerClass:
      "flex w-[149.41px] h-[44px] py-[0.001px] flex-col justify-center items-center shrink-0",
  },
  {
    name: "FocalPoint",
    component: <FocalPoint />,
    wrapperClass:
      "inline-flex h-[40px] flex-col items-start aspect-199/48",
    innerClass:
      "flex w-[165.83px] h-[40px] flex-col justify-center items-center shrink-0",
    extraInnerClass: "w-[165.83px] h-[39.999px] shrink-0 opacity-100",
  },
  {
    name: "AcmeCorp",
    component: <AcmeCorp />,
    wrapperClass:
      "inline-flex h-[40px] flex-col items-start aspect-101/24",
    innerClass:
      "flex w-[168.33px] h-[40px] flex-col justify-center items-center shrink-0",
    extraInnerClass: "w-[168.33px] h-[39.999px] shrink-0 opacity-100",
  },
];

const TrustedBy = () => {
  const [activeLogoIndex, setActiveLogoIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="flex w-full px-6 lg:px-55.75 py-16 md:py-32 flex-col items-start border-t border-b border-[rgba(168,217,70,0.15)] bg-white">
      <div className="flex flex-col min-h-[500px] w-full max-w-5xl self-stretch justify-between">
        <div className="flex flex-col items-start w-full max-w-5xl">
          <h1 className="text-4xl md:text-[60px] leading-tight md:leading-18.75 font-medium text-[#171717] pb-10">
            Trusted by teams worldwide
          </h1>

          {/* Team Members */}
          <div className=" flex w-full max-w-5xl justify-center items-start gap-4 md:gap-12 flex-wrap md:flex-nowrap">
            <div className="flex h-auto md:h-[149.5px] pr-0 md:pr-25 pl-1 items-center gap-6 flex-wrap md:flex-nowrap flex-1 justify-center md:justify-start">
              {teamMembers.map(({ name, img }, index) => (
                <div
                  key={name}
                  className={`flex h-auto md:h-[149.5px] py-4 md:py-[38.75px] flex-col justify-center items-start transition-opacity duration-700 ${activeLogoIndex === index ? "opacity-100" : "opacity-50"
                    }`}
                >
                  <div>
                    <div
                      className={`flex w-18 h-18 justify-center items-center rounded-full transition-colors duration-700 ${activeLogoIndex === index ? "bg-[#A8D946]" : "bg-transparent"
                        }`}
                    >
                      <img
                        src={img}
                        alt={name}
                        className={`w-[57.6px] h-[57.6px] max-w-[64.8px] shrink-0 rounded-full bg-white object-cover transition-all duration-700 ${activeLogoIndex === index ? "grayscale-0" : "grayscale"
                          }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start justify-center pt-[20px] gap-[24px] flex-1 self-stretch">
              <div className="mb-[16px] h-[180px] md:h-[140px] flex flex-col justify-center transition-all duration-500">
                <p className="self-stretch text-[#171717] font-medium text-[18px] md:text-[20px] leading-[1.4] transition-opacity duration-500 font-['SF_Pro']">
                  {teamMembers[activeLogoIndex].feedback}
                </p>
                <div className="mt-4 flex flex-col transition-opacity duration-500">
                  <span className="text-[16px] font-[590] text-[#0A0A0A]">
                    ~ {teamMembers[activeLogoIndex].name}
                    <span className="ml-2 text-[14px] text-[#737373] mt-0.5">
                      [{teamMembers[activeLogoIndex].role}]
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Logos */}
          <div className="pt-12 h-auto md:h-10 w-full flex flex-wrap justify-center md:justify-between gap-8 md:gap-0 mt-8 md:mt-0 ">
            {logos.map(
              (
                {
                  name,
                  component,
                  wrapperClass,
                  innerClass,
                  extraInnerClass,
                },
                index
              ) => (
                <div
                  key={name}
                  className={`${wrapperClass} transition-opacity duration-700 ${activeLogoIndex === index ? 'opacity-100' : 'opacity-30'}`}
                >
                  <div className={innerClass}>
                    {extraInnerClass ? (
                      <div className={extraInnerClass}>{component}</div>
                    ) : (
                      component
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
