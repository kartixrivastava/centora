import React from "react";
import { TickMark } from "../icons";

type Plan = {
  name: string;
  price: string;
  billing: string;
  features: string[];
  highlight: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$24",
    billing: "Billed annually, or $40/mo billed monthly",
    features: [
      "2 Team Members",
      "10GB Storage",
      "Big Analytics",
      "Email Support",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "$99",
    billing: "Billed annually, or $120/mo billed monthly",
    features: [
      "10 Team Members",
      "50GB Storage",
      "Advanced Analytics",
      "Priority Support",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$125",
    billing: "Billed annually, or $150/mo billed monthly",
    features: [
      "Unlimited Members",
      "2TB Storage",
      "Custom Integration",
      "Dedicated Support",
    ],
    highlight: false,
  },
];

type FeatureItemProps = {
  text: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <li className="flex items-start gap-3 self-stretch">
      <span className="h-4 w-4">
        <TickMark className="h-[7.333px] w-[10.667px] stroke-[#0A0A0A] stroke-[1.667px] opacity-100" />
      </span>

      <span className="flex flex-col items-start text-[#0A0A0A] text-[13.7px] font-normal leading-5">
        {text}
      </span>
    </li>
  );
};

type PricingCardProps = {
  plan: Plan;
};

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const cardBase = "flex flex-1 flex-col items-start self-stretch bg-white p-8";

  const cardStyle = plan.highlight
    ? "relative rounded-2xl"
    : "rounded-3xl border border-[#E5E5E5]";

  return (
    <div
      className={
        plan.highlight ? "relative flex flex-1 self-stretch w-full" : "flex flex-1 w-full"
      }
    >
      {plan.highlight && (
        <div className="absolute -left-1 -top-1 -right-1 -bottom-1 rounded-[19.2px] bg-[#A8D946]" />
      )}

      <div className={`${cardBase} ${cardStyle}`}>
        <h3 className="flex w-full lg:w-63.5 flex-col items-start text-[#0A0A0A] text-[18.8px] font-black leading-7">
          {plan.name}
        </h3>

        <div className="flex w-full lg:w-63.5 flex-col items-start pt-4">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="flex items-end gap-3 self-stretch">
              <div className="flex flex-col items-start text-[#0A0A0A] text-[47.8px] font-bold leading-12 tracking-[-1.2px]">
                {plan.price}
              </div>

              <div className="flex flex-col items-start pb-1 text-[#737373] text-[13.7px] font-normal leading-5">
                /month
              </div>
            </div>

            <p className="flex flex-col items-start self-stretch text-[#737373] text-[13.6px] font-normal leading-5">
              {plan.billing}
            </p>
          </div>
        </div>

        <div className="flex w-full lg:w-63.5 flex-col items-start pt-6">
          <button
            className={`flex flex-col items-center justify-center self-stretch rounded-2xl py-3 text-center text-[13.7px] font-[590] leading-5 ${plan.highlight
              ? "bg-[#0A0A0A] text-white"
              : "bg-[#F5F5F5] text-[#0A0A0A]"
              }`}
          >
            Get Started
          </button>
        </div>

        <div className="flex w-full lg:w-63.5 flex-col items-start pt-6">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <p className="flex flex-col items-start self-stretch text-[#737373] text-[13.6px] font-[510] leading-5">
              Includes:
            </p>

            <ul className="flex flex-col items-start gap-3 self-stretch">
              {plan.features.map((feature: string, index: number) => (
                <FeatureItem key={index} text={feature} />
              ))}
            </ul>
          </div>
        </div>

        {plan.highlight && plan.badge && (
          <div className="absolute left-[93.65px] -top-4 flex w-[132.7px] flex-col items-start">
            <div className="flex items-start rounded-full bg-[#A8D946] px-4 py-1.5 text-[rgba(0,0,0,0.50)] text-[12px] font-[590] uppercase leading-4 tracking-[0.3px]">
              {plan.badge}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-start bg-[#F5F5F5] px-6 lg:px-55.75 py-16 md:pt-12 md:pb-28">
      <div className="flex max-w-5xl flex-col items-start gap-16 self-stretch">
        <div className="flex flex-col items-center gap-[13.3px] self-stretch pt-[2.75px]">
          <h2 className="self-stretch text-center text-[#0A0A0A] text-3xl md:text-[48px] font-[590] leading-tight md:leading-12 tracking-[-1.2px]">
            Simple, transparent pricing
          </h2>

          <p className="w-2xl max-w-2xl pt-[2.7px] text-center text-[#737373] text-[16.9px] font-normal leading-7">
            Choose the plan that works best for your team. All plans include a
            14-day free trial.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch lg:items-start justify-center gap-8 self-stretch w-full">
          {plans.map((plan: Plan, index: number) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
