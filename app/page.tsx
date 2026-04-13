import Image from 'next/image';

export default function Home() {
  const data = {
    name: "Cuanly",
    description: "Creative Director | Entrepreneur | Content Creator",
    image: "https://github.com/mrsybn237.png", // Akan otomatis mengambil foto profil GitHub Anda
    links: [
      { title: "Instagram", url: "https://instagram.com/farkhansjati", icon: "📸", color: "bg-zinc-900" },
      { title: "YouTube Content", url: "https://youtube.com/@hansybn", icon: "🎬", color: "bg-zinc-900" },
      { title: "Business Inquiry (WhatsApp)", url: "https://wa.me/yournumber", icon: "💬", color: "bg-green-600" },
      { title: "Latest Project", url: "#", icon: "🚀", color: "bg-zinc-900" },
    ],
    socials: [
      { name: "TikTok", url: "#", icon: "📱" },
      { name: "Twitter", url: "#", icon: "🐦" },
    ]
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col items-center px-6 py-12 font-sans">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="relative w-24 h-24 mb-4 ring-4 ring-zinc-800 rounded-full overflow-hidden">
          <img
            src={data.image}
            alt={data.name}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white">@{data.name.toLowerCase()}</h1>
        <p className="text-zinc-400 text-sm mt-2 max-w-[250px] leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Links Section */}
      <div className="w-full max-w-md space-y-4">
        {data.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between w-full p-4 ${link.color} border border-zinc-800 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl`}
          >
            <span className="text-xl">{link.icon}</span>
            <span className="font-semibold text-sm uppercase tracking-wider">{link.title}</span>
            <div className="w-5"></div>
          </a>
        ))}
      </div>

      {/* Social Icons Footer */}
      <div className="flex space-x-8 mt-12 text-zinc-500">
        {data.socials.map((soc, index) => (
          <a key={index} href={soc.url} className="hover:text-white transition-colors">
            <span className="text-2xl">{soc.icon}</span>
          </a>
        ))}
      </div>

      {/* Brand Footer */}
      <footer className="mt-auto pt-16 pb-4">
        <p className="text-zinc-600 text-[10px] tracking-widest uppercase">
          Powered by <span className="text-zinc-400 font-bold">CUANLY.ID</span>
        </p>
      </footer>
    </div>
  );
}
