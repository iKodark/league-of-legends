import Image from "next/image"
import Link from "next/link"
import { BsTwitter, BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';

const Footer = () => {
  const social = [
    {
      href: 'https://twitter.com/K0d4rk',
      icon: <BsTwitter />
    },
    {
      href: 'https://www.facebook.com/fernando.henrique99/',
      icon: <BsFacebook />
    },
    {
      href: 'https://www.instagram.com/fernandoh99__/',
      icon: <BsInstagram />
    },
    {
      href: 'https://github.com/iKodark',
      icon: <BsGithub />
    }
  ]
  return (
    <footer>
      <div className="w-full flex flex-col items-center justify-start gap-10 py-3 px-10 z-50 bg-black text-white text-center">
        <div className="flex gap-3">
          {
            social.map((media, index) => (
              <Link key={index} className="p-2 bg-white/10 hover:bg-white/20 transition rounded-lg" href={media.href} target="_blank">
                {media.icon}
              </Link>
            ))
          }
        </div>
        <Image className="w-40" src="/images/logo.png" alt="logo" width={2000} height={2000}/>
        <span className="text-white/50 font-normal">
          Designed & Created by Fernando Ramos<br/>
          Inspired by the real page<br/>
          Built with NextJS & Tailwind CSS
        </span>
      </div>
    </footer>
  )
}

export default Footer