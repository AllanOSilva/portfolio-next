import Image from "next/image";

export default function Logo(){
    return(
        
            <Image
                src="meulogo.svg"
                width={64}
                height={64}
                style={{padding:4}}     
                className="hover:transition duration-500 hover:scale-125"
                alt="Logotipo"
            />
        
    )
}