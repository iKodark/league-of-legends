import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header>
      <div className="fixed w-screen flex items-center justify-between top-0 left-0 py-5 px-10 z-50 bg-black">
        <Link href="/">
          <Image className="w-28" src="/images/logo.png" alt="Logo" width={2000} height={2000} priority />
        </Link>
        <div className="flex gap-6 text-white uppercase">
          <Link className="hover:text-primary transition-colors" href="/how-to-play">O jogo</Link>
          <Link className="hover:text-primary transition-colors" href="/champions">Campeões</Link>
          <Link className="hover:text-primary transition-colors" href="/patch-notes">Notas de atualizações</Link>
        </div>
      </div>
    </header>
  )
}

export default Header