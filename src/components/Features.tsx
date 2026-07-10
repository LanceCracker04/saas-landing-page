import { motion } from 'motion/react';
import { Zap, Shield, BarChart3, Cloud, Layout, Smartphone } from 'lucide-react';

const features = [
  {
    name: 'Lightning Fast',
    description: 'Built on edge infrastructure to deliver sub-millisecond response times globally.',
    icon: Zap,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC2 compliance, and granular role-based access control.',
    icon: Shield,
  },
  {
    name: 'Advanced Analytics',
    description: 'Real-time dashboards, custom reports, and actionable insights to drive growth.',
    icon: BarChart3,
  },
  {
    name: 'Cloud Native',
    description: 'Auto-scaling infrastructure that grows seamlessly with your business needs.',
    icon: Cloud,
  },
  {
    name: 'Intuitive Layout',
    description: 'A beautifully designed interface that requires zero training for your team.',
    icon: Layout,
  },
  {
    name: 'Mobile First',
    description: 'Manage your entire business from anywhere with our fully responsive design.',
    icon: Smartphone,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Features
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Everything you need to scale
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We've built all the tools you need to manage your business effectively, so you can focus on what matters most: growing your revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-slate-900/10 dark:border-white/10 rounded-3xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.name}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
