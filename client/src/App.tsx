import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Lobby from "./pages/Lobby";
import WalletPage from "./pages/Wallet";
import { WalletProvider } from "./hooks/useWallet";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="p-4 flex justify-between items-center shadow bg-white sticky top-0 z-10">
            <h1 className="text-xl font-bold">AstroPlay</h1>
            <nav className="flex gap-4">
              <Link to="/" className="hover:underline">Lobby</Link>
              <Link to="/wallet" className="hover:underline">Wallet</Link>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<Lobby />} />
              <Route path="/wallet" element={<WalletPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

          {/* Toast Notifications */}
          <Toaster position="top-right" />
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;
