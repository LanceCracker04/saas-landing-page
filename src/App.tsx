import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans selection:bg-indigo-500/30 relative">
        {/* Ambient Glows */}
        <div className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
        <div className="fixed bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
        
        <Header />
        <main>
          <Hero />
          <Features />
          <Pricing />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
