import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-black">CUANLY<span className="text-green-600">.</span></div>
        <div className="space-x-8 hidden md:flex font-medium text-sm">
          <a href="#" className="hover:text-green-600 transition">Fitur</a>
          <a href="#" className="hover:text-green-600 transition">Harga</a>
          <a href="#" className="hover:text-green-600 transition">Kreator</a>
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-zinc-800 transition">
          Coba Gratis
        </button>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center text-center px-6 py-20 md:py-32 max-w-4xl mx-auto">
        <span className="bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          The Next Gen Link-in-Bio
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[0.9]">
          Satu Link untuk <span className="text-green-600">Semua Cuan</span> Anda.
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl mb-10 max-w-2xl">
          Platform khusus kreator untuk kelola link, jualan produk fisik, hingga kembangkan ekosistem bisnis dalam satu halaman estetik.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          <div className="flex bg-zinc-100 p-2 rounded-2xl border border-zinc-200 w-full md:w-96">
            <span className="flex items-center pl-3 text-zinc-400 font-medium">cuanly.id/</span>
            <input type="text" placeholder="usernameanda" className="bg-transparent outline-none px-2 w-full font-medium" />
          </div>
          <button className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-700 transition shadow-lg shadow-green-200">
            Claim Username
          </button>
        </div>
        <p className="mt-6 text-zinc-400 text-sm italic italic">Sudah 1,000+ kreator masuk daftar tunggu.</p>
      </header>

      {/* Social Proof / Mockup Section */}
      <section className="bg-zinc-50 py-20 border-y border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="font-bold text-xl mb-2">Desain Premium</h3>
            <p className="text-zinc-500 text-sm">Bukan sekadar link, tapi landing page profesional yang bisa dikustomisasi penuh.</p>
          </div>
          <div>
            <div className="text-3xl mb-4">📦</div>
            <h3 className="font-bold text-xl mb-2">Integrasi Bisnis</h3>
            <p className="text-zinc-500 text-sm">Sambungkan langsung ke sistem stok atau produk fisik Anda tanpa pihak ketiga.</p>
          </div>
          <div>
            <div className="text-3xl mb-4">📈</div>
            <h3 className="font-bold text-xl mb-2">Analitik Cerdas</h3>
            <p className="text-zinc-500 text-sm">Pahami dari mana audiens Anda berasal dan produk apa yang paling laris.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
