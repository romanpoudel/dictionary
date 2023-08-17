import Image from "next/image"

const Navbar = () => {
  return (
      <header className="flex items-center gap-2 pl-16 h-20 select-none">
          <Image src="/images/suvaye.jpg" alt="logo" width={63} height={63} />
          <h1 className="font-bold ">Suvaye Dictionary</h1>
    </header>
  )
}
export default Navbar