import Image from "next/image"
import Link from "next/link"
import services from '@services'

export default async function Home() {
  const patchNotes = await services.patchNotes.all(3)

  return (
    <>
      <div>
        <section className="relative px-24 py-14">
          <div className="absolute w-full h-[55vh] overflow-hidden top-0 left-0">
            <div className="relative z-0 w-full h-full">
              <video className="relative w-full h-full object-cover object-center z-0" autoPlay loop muted playsInline>
                <source src="/videos/hero-blurred.webm" type="video/webm" />
                <source src="/videos/hero-blurred.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-[55vh] z-[1] m-[0_auto]">
            <div className="absolute w-full h-full left-0 top-0">
              <div className="relative block w-full h-full z-0">
                <video className="relative w-full h-full object-cover object-[center_center] z-0" autoPlay loop muted playsInline>
                  <source src="/videos/hero.webm" type="video/webm" />
                  <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="absolute w-full h-full left-0 top-0">
              <Image className="w-full h-full -m-3" src="/images/border.png" width={2000} height={2000} alt="border" />
            </div>
            <div className="absolute flex flex-col items-center justify-center w-full h-full left-0 top-0">
              <Image className="w-1/3 h-auto" src="/images/logo-with-effect.png" alt="logo-with-effect" width={2000} height={2000} />
              <button className="bg-primary/90 hover:bg-primary py-4 p-10 text-sm font-semibold uppercase">Jogue de graça</button>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="-mt-[120px] pt-[120px] bg-[url(/images/background.png)] bg-repeat-x bg-left-top py-10">
          <div className="flex mx-10 gap-10">
            {
              patchNotes.map((patchNote, index) => (
                <Link key={index} className="flex flex-col w-1/3 hover:scale-105 transition cursor-pointer" href={`/patch-notes/${patchNote.url}`}>
                  <Image className="w-full h-auto" src={patchNote.banner} alt="Patch Note" width={2000} height={2000} />
                  <div className="flex flex-col gap-3 p-3">
                    <div className="flex flex-col">
                      <span className="text-primary">{patchNote.category}</span>
                      <span className="font-semibold text-xl">{patchNote.title}</span>
                    </div>
                    <div className="flex gap-3 text-sm text-primary">
                      <span className="">{patchNote.author}</span>
                      <span>-</span>
                      <span className="">{patchNote.date}</span>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </section>
      </div>
    </>
  )
}