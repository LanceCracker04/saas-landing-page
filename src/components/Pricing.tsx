import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    description: 'Perfect for small teams just getting started.',
    monthlyPrice: '$29',
    annualPrice: '$24',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      '24-hour support response time',
      '10GB storage',
      'API access',
    ],
    featured: false,
    cta: 'Start with Starter',
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    description: 'The best option for growing businesses.',
    monthlyPrice: '$79',
    annualPrice: '$64',
    features: [
      'Up to 20 team members',
      'Advanced analytics dashboard',
      '1-hour support response time',
      '100GB storage',
      'Custom integrations',
      'Team collaboration tools',
    ],
    featured: true,
    cta: 'Start free trial',
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    description: 'Dedicated support and infrastructure.',
    monthlyPrice: '$199',
    annualPrice: '$164',
    features: [
      'Unlimited team members',
      'Custom reporting',
      '24/7 dedicated phone support',
      'Unlimited storage',
      'SSO & SAML authentication',
      'Custom SLA',
      'Dedicated success manager',
    ],
    featured: false,
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 md:py-32 bg-transparent relative border-t border-slate-900/10 dark:border-white/10 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Pricing
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Simple, transparent pricing
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Choose the plan that best fits your needs. No hidden fees.
          </p>

          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!annual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Toggle annual billing"
            >
              <motion.span
                layout
                className="inline-block h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform"
                animate={{ x: annual ? 32 : 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Annually <span className="text-indigo-600 dark:text-indigo-400 text-xs ml-1 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                tier.featured
                  ? 'bg-gradient-to-b from-indigo-500/10 to-violet-500/5 dark:from-indigo-500/20 dark:to-violet-500/10 backdrop-blur-xl border-indigo-500/30 dark:border-indigo-500/50 shadow-2xl shadow-indigo-500/10 md:-translate-y-4'
                  : 'bg-white/50 dark:bg-white/5 backdrop-blur-xl border-slate-900/10 dark:border-white/10'
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <span className="bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h4 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                {tier.name}
              </h4>
              <p className="text-sm mb-6 text-slate-600 dark:text-slate-400">
                {tier.description}
              </p>
              
              <div className="mb-8">
                <span className="text-4xl font-display font-bold text-slate-900 dark:text-white">
                  {annual ? tier.annualPrice : tier.monthlyPrice}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400">/mo</span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${tier.featured ? 'text-indigo-500 dark:text-indigo-400' : 'text-indigo-600 dark:text-indigo-400'}`} />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all ${
                  tier.featured
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 hover:bg-slate-900/10 dark:hover:bg-white/10 text-slate-900 dark:text-white'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
