import React from "react";
const plans = [
  {
    title: "Starter",
    price: 199,
    discount: true,
    discountPercent: 75,
    discountedPrice: 199 * 0.25,
    description: "Ideal for small businesses or individuals getting started.",
    features: [
      "3 Page Custom Design",
      "Basic SEO Setup",
      "Mobile Responsive",
      "5 Days Delivery",
      "1 Month Support",
      "Limited Revisions",
    ],
  },
  {
    title: "Professional",
    price: 300,
    discount: true,
    discountPercent: 75,
    discountedPrice: 300 * 0.25,
    description: "Perfect for growing brands needing multi-page websites.",
    features: [
      "Up to 5 Pages",
      "Advanced SEO",
      "Custom Animations",
      "7 Days Delivery",
      "3 Months Support",
      "Unlimited Revisions",
    ],
    popular: true,
  },
  {
    title: "Enterprise",
    price: 500,
    discount: true,
    discountPercent: 50,
    discountedPrice: 500 * 0.50,
    description: "Perfect for growing brands needing multi-page websites.",
    features: [
      "Unlimited Pages",
      "Full-Stack Development",
      "API Integration",
      "Priority Support",
      "Custom Features",
      "Unlimited Revisions",
    ],
    // Removed popular: true
  },
];

     

export default function PricingSection() {
  return (
    <section className="bg-gradient-to-b from-violet-600 to-violet-600 py-20 px-4 text-white font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-100 to-violet-200 drop-shadow-lg">
          Our Pricing Plans
        </h2>
        <p className="text-gray-200 mb-14 text-lg max-w-2xl mx-auto">
          Choose the plan that best suits your project goals and budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group backdrop-blur-xl bg-white/10 border ${
                plan.popular
                  ? "border-pink-400 shadow-2xl scale-[1.03]"
                  : "border-violet-400 shadow-xl"
              } rounded-3xl p-8 pt-12 flex flex-col justify-between transition-all duration-300 hover:scale-105`}
            >
              {/* Discount badge */}
              {plan.discount && (
                <div className="absolute top-4 right-4 bg-violet-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md z-10">
                  {plan.discountPercent}% OFF
                </div>
              )}

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-4 bg-pink-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 text-violet-100">
                {plan.title}
              </h3>
              <p className="text-gray-300 mb-4">{plan.description}</p>

              {plan.discount ? (
                <div className="mb-6">
                  <p className="text-xl text-red-300 line-through">
                    ${plan.price}
                  </p>
                  <p className="text-4xl font-extrabold text-pink-200">
                    ${plan.discountedPrice.toFixed(0)}
                  </p>
                </div>
              ) : (
                <p className="text-4xl font-extrabold text-pink-200 mb-6">
                  ${plan.price}+
                </p>
              )}

              <ul className="mb-8 text-left space-y-2 text-sm text-gray-200">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="text-green-300">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
