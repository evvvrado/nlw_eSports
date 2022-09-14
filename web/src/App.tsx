import { MagnifyingGlassPlus } from "phosphor-react"
import "./styles/main.css"
import logoImg from "./assets/logo_nlw_esports.svg"

function App() {
    return (
        <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
            <img src={logoImg} alt="" />

            <h1 className="text-6xl text-white font-black mt-20">
                Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está
                aqui.
            </h1>

            <div className="grid grid-cols-6 gap-6 mt-16">
                <a href="" className="relative rounded-lg overflow-hidden">
                    <img src="/jogo_exemplo_1.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
                        <strong className="font-bold text-white block">League of Legends</strong>
                        <span className="text-zinc-300 text-sm">4 anúncios</span>
                    </div>
                </a>

                <a href="" className="relative rounded-lg overflow-hidden">
                    <img src="/jogo_exemplo_2.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
                        <strong className="font-bold text-white block">League of Legends</strong>
                        <span className="text-zinc-300 text-sm">4 anúncios</span>
                    </div>
                </a>

                <a href="" className="relative rounded-lg overflow-hidden">
                    <img src="/jogo_exemplo_3.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
                        <strong className="font-bold text-white block">League of Legends</strong>
                        <span className="text-zinc-300 text-sm">4 anúncios</span>
                    </div>
                </a>

                <a href="" className="relative rounded-lg overflow-hidden">
                    <img src="/jogo_exemplo_4.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
                        <strong className="font-bold text-white block">League of Legends</strong>
                        <span className="text-zinc-300 text-sm">4 anúncios</span>
                    </div>
                </a>

                <a href="" className="relative rounded-lg overflow-hidden">
                    <img src="/jogo_exemplo_5.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
                        <strong className="font-bold text-white block">League of Legends</strong>
                        <span className="text-zinc-300 text-sm">4 anúncios</span>
                    </div>
                </a>

                <a href="" className="relative rounded-lg overflow-hidden">
                    <img src="/jogo_exemplo_6.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
                        <strong className="font-bold text-white block">League of Legends</strong>
                        <span className="text-zinc-300 text-sm">4 anúncios</span>
                    </div>
                </a>
            </div>

            <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8">
                <div className="bg-[#2a2634] px-8 py-6 self-stretch flex justify-between items-center">
                    <div>
                        <strong className="text-2xl text-white font-black block">
                            Não encontrou seu duo?
                        </strong>
                        <span className="text-zinc-400 block">
                            Publique um anúncio para encontrar novos players!
                        </span>
                    </div>

                    <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
                        <MagnifyingGlassPlus size={24} />
                        Publicar anúncio
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
