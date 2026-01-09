import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Silverleaf
          </div>
          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#" className="hover:text-purple-400 transition">Home</a>
            <a href="#" className="hover:text-purple-400 transition">Features</a>
            <a href="#" className="hover:text-purple-400 transition">About</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Hero Section */}
        <section className="text-center mb-12 sm:mb-20">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Welcome to Silverleaf
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            A responsive web application that works seamlessly on mobile, tablet, and desktop.
          </p>
        </section>

        {/* Interactive Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 sm:p-8 backdrop-blur-sm hover:border-purple-500/50 transition">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-300 mb-4">Counter Demo</h2>
            <div className="bg-slate-800/50 rounded-lg p-6 text-center">
              <p className="text-4xl sm:text-5xl font-bold text-purple-400 mb-4">{count}</p>
              <button
                onClick={() => setCount(count + 1)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105 active:scale-95"
              >
                Increment
              </button>
              <button
                onClick={() => setCount(0)}
                className="w-full mt-3 bg-slate-700 hover:bg-slate-600 text-gray-300 font-semibold py-3 px-6 rounded-lg transition"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-6 sm:p-8 backdrop-blur-sm hover:border-pink-500/50 transition">
            <h2 className="text-xl sm:text-2xl font-bold text-pink-300 mb-4">Responsive Design</h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              This app adapts beautifully to any screen size:
            </p>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>✓ Mobile phones (320px+)</li>
              <li>✓ Tablets (768px+)</li>
              <li>✓ Laptops & Desktops</li>
              <li>✓ Dark mode optimized</li>
            </ul>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {['Fast', 'Secure', 'Accessible'].map((feature) => (
            <div key={feature} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-lg p-6 text-center hover:border-purple-500/50 transition">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-2">{feature}</h3>
              <p className="text-gray-400 text-sm sm:text-base">Optimized for performance and user experience</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 mt-16 sm:mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Silverleaf. Works on all devices. 📱💻</p>
        </div>
      </footer>
    </div>
  )
}

export default App
