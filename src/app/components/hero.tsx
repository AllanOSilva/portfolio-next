import { Image } from "@nextui-org/react";

export default function Hero() {
    
    return(
        <div className="bg-slate-400 h-[100vh]">
            <Image 
            src="fundo_hero.jpg"
            alt="fundoHero"  
            className="flex relative overflow  w-[100vw] h-[100vh]"
            />
            <h1 className="">Olá! Eu sou Állan</h1>
            <p>Estudo para ser engenheiro de front-end. 
                Apaixonado por criar experiências digitais envolventes e funcionais. <br /> 
                Desenvolvi um profundo interesse em transformar designs criativos em realidade interativa na web para traduzir conceitos de design em interfaces intuitivas e responsivas.</p>
        </div>
    )
};
