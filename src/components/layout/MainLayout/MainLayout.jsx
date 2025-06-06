import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto p-4">
        {children}
      </main>

      <Footer />
    </div>
  );
}
