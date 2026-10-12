import { useEffect, useState } from 'react';
import FloatingChat from './components/FloatingChat';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home, { AboutPage, ContactPage, GalleryPage, SujokPage } from './pages/Home';
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

  const pages: Record<string, () => JSX.Element> = { '/learn': Learn, '/donate': Donate, '/about': AboutPage, '/sujok': SujokPage, '/gallery': GalleryPage, '/contact': ContactPage };
  const Page = pages[route.path] ?? Home;

  return (
    <div className="min-h-screen bg-paper">
      <Navbar path={route.path} />
      <main>
        <Page />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
