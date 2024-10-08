import Image from "next/image";

export default function Logo(){
    return(
            <Image
                src="meulogo.svg"
                width={90}
                height={90}
                style={{padding:4,zIndex:1 }}     
                className="hover:transition duration-500 cursor-pointer"
                alt="Logotipo"
                priority
            />
        
    )
}