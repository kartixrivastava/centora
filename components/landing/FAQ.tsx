"use client";

import { useState } from "react";
import { MyChevronDown } from "../icons";

type FAQItem = {
  que: string;
  ans: string;
};

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      que: "How does the 14-day free trial work?",
      ans: "Start using our platform immediately with full access to all features. No credit card required. At the end of your trial, choose a plan that fits your needs or continue with our free tier.",
    },
    {
      que: "Can I switch plans at any time?",
      ans: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at your next billing cycle.",
    },
    {
      que: "How secure is my data?",
      ans: "Security is our top priority. We use bank-level encryption (AES-256), are SOC 2 Type II certified, and GDPR compliant. All data is stored in secure, redundant data centers with 99.99% uptime.",
    },
    {
      que: "What integrations do you support?",
      ans: "We integrate with all major platforms including Slack, Zendesk, Salesforce, HubSpot, Intercom, and 50+ other tools. Our API also allows custom integrations for enterprise customers.",
    },
    {
      que: "Do you offer dedicated support?",
      ans: "All plans include email support with 24-hour response times. Premium plans get priority support with 4-hour response times. Enterprise customers receive a dedicated success manager and phone support.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="flex w-full flex-col items-center gap-16 bg-[#F5F5F5] pb-30">
      <div className="flex w-3xl max-w-3xl flex-col items-start gap-16">
        {/* Upper section */}
        <div className="flex flex-col items-center gap-[13.3px] self-stretch pt-[2.75px]">
          <h1 className="flex flex-col items-center self-stretch text-center text-[#0A0A0A] text-[48px] font-[590] leading-12 tracking-[-1.2px]">
            Everything you need to know
          </h1>

          <div className="flex w-xl max-w-xl flex-col items-center pt-[2.7px] text-center text-[#737373] text-[16.9px] font-normal leading-7">
            Can't find the answer you're looking for? Reach out!
          </div>

          <div className="flex flex-wrap content-center items-center justify-center self-stretch gap-x-3 gap-y-0 pt-[18.7px]">
            <a
              href=""
              className="flex items-center justify-center px-6 py-2.5 text-center text-[#F5F5F5] text-[13.7px] font-[590] leading-5 rounded-xl bg-[#0A0A0A]"
            >
              Get Started
            </a>

            <a
              href=""
              className="flex items-center justify-center rounded-xl border border-[#E5E5E5] bg-white px-6 py-2.5 text-center text-[#0A0A0A] text-[13.7px] font-[590] leading-5"
            >
              Contact Support
            </a>
          </div>
        </div>

        {/* Questions and answers */}
        <div className="flex flex-col items-start gap-3 self-stretch">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => toggleFAQ(index)}
              className="flex flex-col items-start self-stretch p-6 rounded-3xl bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]"
            >
              <div className="flex items-center justify-between self-stretch">
                <h1 className="flex flex-col items-start text-[#0A0A0A] text-[16.9px] font-[510] leading-7 ">
                  {faq.que}
                </h1>

                <MyChevronDown
                  className={`flex flex-col items-start w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {activeIndex === index && (
                <div className="flex flex-col items-start self-stretch pt-4">
                  <p className="self-stretch text-[#737373] text-[15.3px] font-normal leading-6.5">
                    {faq.ans}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
