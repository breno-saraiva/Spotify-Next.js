import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize,
  Maximize2,
  Volume1,
  Volume1Icon,
  Volume2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a
              className="flex items-center gap-2 text-xs font-semibold text-zinc-200"
              href=""
            >
              <HomeIcon size={24} />
              Home
            </a>
            <a
              className="flex items-center gap-2 text-xs font-semibold text-zinc-200"
              href=""
            >
              <Search />
              Search
            </a>
            <a
              className="flex items-center gap-2 text-xs font-semibold text-zinc-200"
              href=""
            >
              <Library />
              Your Library
            </a>

            <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                playlist 1
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                playlist 2
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                playlist 3
              </a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
                playlist 4
              </a>
            </nav>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="mt-2 grid grid-cols-3 gap-4">
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/image.png"
                alt="capa dos albuns"
              />
              <strong>Wasting Light</strong>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/image.png"
                alt="capa dos albuns"
              />
              <strong>Wasting Light</strong>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/image.png"
                alt="capa dos albuns"
              />
              <strong>Wasting Light</strong>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/image.png"
                alt="capa dos albuns"
              />
              <strong>Wasting Light</strong>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/image.png"
                alt="capa dos albuns"
              />
              <strong>Wasting Light</strong>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/image.png"
                alt="capa dos albuns"
              />
              <strong>Wasting Light</strong>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Breno Saraiva
          </h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2 "
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/image.png"
                alt="capa dos albuns"
              />
              <strong className="font-normal">Daily Mix</strong>
              <span className="text-xs texte-zinc-500">
                Dominguinhos, COIN, girls in red and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-e-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            className="w-full rounded-sm"
            width={56}
            height={56}
            src="/image.png"
            alt="capa dos albuns"
          />
          <div className="flex flex-col">
            <strong className="font-normal">Psiu</strong>
            <span className="text-xs text-zinc-400">Dominguinhos</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>

            <SkipForward className="taxt-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume2 size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-12 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
