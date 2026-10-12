import { useEffect, useState } from 'react';
import FloatingChat from './components/FloatingChat';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Donate from './pages/Donate';

// Hash router: "#/", "#/learn", "#/donate", with optional in-page anchor "#/#about" or "#/learn#levels".
function parse(hash: string) {
  const raw = hash.replace(/^#/, '') || '/';
  const [path, anchor] = raw.split('#');
  return { path: path || '/', anchor };
}

export default function App() {
  const [route, setRoute] = useState(() => parse(window.location.hash));

  useEffect(() => {
    const onHash = () => setRoute(parse(window.location.hash));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    if (route.anchor) {
      const t = setTimeout(() => document.getElementById(route.anchor!)?.scrollIntoView({ behavior: 'smooth' }), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [route]);

  const Page = route.path === '/learn' ? Learn : route.path === '/donate' ? Donate : Home;

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
