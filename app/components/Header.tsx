import Image from "next/image"
import chef from "../../public/chef.svg"
export default function Header(){
    return (
    <header className="mb-18 border-b border-b-gray-300 flex items-center justify-center gap-2  py-6 w-full">
        <Image className="object-cover text-2xl" src={chef} alt="Chef ai icon" width={40} height={50}/>
        <h1 className="text-3xl regular tracking-tight"> Chef Claude</h1>
    </header>)
}