import Image from "next/image";

export default function Logo(){
    return(
        
            <Image
                src="../../../../public/meulogo.svg"
                width={32}
                height={32}
                alt="Logotipo"
            />
        
    )
}