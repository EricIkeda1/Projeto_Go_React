import { useParams } from 'react-router-dom';
import { ArrowUp, Share2, ArrowRight } from 'lucide-react';
import amaLogo from '../assets/ama-logo.svg';

export function Room() {
    const { roomId } = useParams();

    return (
        <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
            <div className="flex items-center gap-3 px-3">
                <img src={amaLogo} alt="AMA" className="h-5" />

                <span className="text-sm text-zinc-500 truncate">
                    Código da sala: <span className="text-zinc-300">{roomId}</span>
                </span>

                <button 
                    type="button"  // Alterado para "button" já que não é um formulário
                    className="bg-zinc-800 text-zinc-300 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-zinc-700"
                >
                    Compartilhar
                    <Share2 className="h-4 w-4 ml-2" />
                </button>
            </div>

            <div className="h-px w-full bg-zinc-900" />
            
            <form 
                className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1"
            >
                <input
                    type="text"
                    name="theme"
                    placeholder="Qual a sua pergunta?"
                    autoComplete="off"  // Remover sugestões ao digitar
                    className="flex-1 text-sm bg-transparent mx-2 outline-none placeholder:text-zinc-500"
                />
                
                <button 
                    type="submit" 
                    className="bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500"
                >
                    Criar Pergunta
                    <ArrowRight className="h-4 w-4 ml-2" />
                </button>
            </form>

            <ol className="list-decimal list-inside px-3 space-y-8">
                <li className="ml-4 leading-relaxed text-zinc-100">
                    O que é GoLang e quais são suas principais vantagens em comparação com outras linguagens de programação como Python, Java ou C++?
                    
                    <div className="flex items-center mt-3">
                        <button type="button" className="flex items-center gap-2 text-orange-400 text-sm font-medium">
                            <ArrowUp className="h-4 w-4 mr-2" />
                            Curtir Pergunta (123)
                        </button>
                    </div>
                </li>
                <li className="ml-4 leading-relaxed text-zinc-100">
                    O que é GoLang e quais são suas principais vantagens em comparação com outras linguagens de programação como Python, Java ou C++?
                </li>
            </ol>
        </div>
    );
}
