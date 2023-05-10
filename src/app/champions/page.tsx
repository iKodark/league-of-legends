import Link from "next/link";
import Image from "next/image";
import services from "@services"

export default async function Page () {
  const champions = await services.champions.all()

  return(
    <section className="bg-tertiary text-white">
      <div className="flex flex-col items-center mx-40 py-10">
        <h1 className="text-6xl font-black italic uppercase">Campeões</h1>
        <div className="grid-cols-6 grid gap-10 mt-10">
          {
            champions.map((champion: any, index) => (
              <Link key={index} className="group flex flex-col hover:scale-105 transition cursor-pointer" href={`/champions/${champion.id}`}>
                <Image className="w-full h-auto outline outline-2 -outline-offset-4 outline-white/25 group-hover:outline-primary transition" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} alt="Patch Note" width={2000} height={2000} />
                <div className="flex flex-col gap-3 p-3">
                  <div className="flex flex-col font-semibold">
                    <span className="text-xl">{champion.name}</span>
                    <span className="text-white/30 group-hover:text-primary transition">{champion.title}</span>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  )
}