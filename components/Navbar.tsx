import Image from "next/image"
import React from "react"

const Navbar = () => {
  return (
      <nav className="flex items-center gap-2 pl-16 h-20 select-none">
          <Image src="/images/suvaye.jpg" alt="logo" width={63} height={63} />
          <h1 className="font-bold ">Suvaye Dictionary</h1>
    </nav>
  )
}
export default Navbar