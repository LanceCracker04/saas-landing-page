import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            v2.0 is now live — Read more
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 leading-tight"
          >
            Scale your business with <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">intelligent</span> automation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Automate workflows, analyze complex data points, and ship products faster with our integrated AI-driven management platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 group">
              Start free trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 hover:bg-slate-900/10 dark:hover:bg-white/10 text-slate-900 dark:text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 group backdrop-blur-sm">
              <Play className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex justify-center gap-4"
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-300 dark:bg-slate-700"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-400 dark:bg-slate-600"></div>
            </div>
            <p className="text-sm text-slate-500 flex items-center">Trusted by 12,000+ engineers worldwide</p>
          </motion.div>
        </div>

        {/* Hero Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="mt-16 relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-950 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="rounded-3xl border border-slate-900/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl p-2 md:p-4 shadow-2xl shadow-indigo-500/10">
            <div className="rounded-2xl overflow-hidden bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-white/5 aspect-video relative flex items-center justify-center">
              {/* Abstract App Mockup Content */}
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-2 p-4 md:p-8 opacity-50 dark:opacity-40">
                <div className="col-span-3 row-span-6 bg-slate-900/5 dark:bg-white/5 rounded-xl border border-slate-900/10 dark:border-white/10 animate-pulse" />
                <div className="col-span-9 row-span-2 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-xl border border-indigo-500/20 dark:border-indigo-500/30 animate-pulse" style={{ animationDelay: '100ms' }} />
                <div className="col-span-6 row-span-4 bg-slate-900/5 dark:bg-white/5 rounded-xl border border-slate-900/10 dark:border-white/10 animate-pulse" style={{ animationDelay: '200ms' }} />
                <div className="col-span-3 row-span-4 bg-slate-900/5 dark:bg-white/5 rounded-xl border border-slate-900/10 dark:border-white/10 animate-pulse" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
