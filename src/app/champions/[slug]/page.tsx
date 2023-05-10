import Image from "next/image"
import services from '@services'
import { Lore, DifficultyBars, Spells } from '@components'

export default async function Page({ params }: any) {
  const champion: any = await services.champions.byName(params.slug)

  const translateRole = (role: String) =>
    role === 'Assassin' ? 'Assassino'
      : role === 'Fighter' ? 'Lutador'
        : role === 'Mage' ? 'Mago'
          : role === 'Marksman' ? 'Atirador'
            : role === 'Support' ? 'Suporte'
              : role === 'Tank' ? 'Tanque'
                : ''

  const translateDifficulty = (difficulty: number) =>
    difficulty <= 3 ? 'Fácil'
      : difficulty <= 7 ? 'Moderado'
        : 'Difícil'
      
  return (
    <section className="relative bg-tertiary text-white pb-72">
      <div className="flex flex-col mx-60">
        <div className="relative h-full">
          <div className="after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-black/75">
            <Image className="w-full h-full object-cover object-center" src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} alt="patch-banner" width={2000} height={2000} />
          </div>
          <div className="absolute w-full -bottom-60 text-center py-10">
            <div className="relative mb-10 z-10 italic uppercase">
              <span className="text-xl font-bold">{champion.title}</span>
              <h1 className="text-8xl font-black">{champion.name}</h1>
            </div>
            <div className="relative flex justify-between z-10">
              <div className="w-1/2 flex items-start justify-evenly gap-5">
                <div className="flex flex-col items-center justify-center gap-5">
                  <span className="text-primary font-bold">Funções</span>
                  <div className="flex gap-10">
                    {
                      champion.tags.map((role: any, index: any) => (
                        <div key={index} className="flex flex-col items-center justify-center text-secondary text-sm font-bold">
                          <Image src={`/icons/${role.toLowerCase()}.svg`} alt={role} width={30} height={30} />
                          {translateRole(role)}
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                  <span className="text-primary font-bold">Dificuldade</span>
                  <div className="flex flex-col w-full">
                    <div className="h-[30px]">
                      <DifficultyBars difficulty={champion.info.difficulty} />
                    </div>
                    <span className="text-secondary text-sm font-bold">
                      {translateDifficulty(champion.info.difficulty)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 text-left text-secondary/75">
                <Lore resume={champion.blurb} complete={champion.lore} />
              </div>
            </div>
            <div className="absolute w-full h-full left-0 top-0 z-0">
              <Image className="w-full h-full" src="/images/border.png" width={2000} height={2000} alt="border" />
            </div>
          </div>
        </div>
        <div className="w-full flex gap-10 pt-80">
          <Spells spells={champion.spells} passive={champion.passive} />
        </div>
      </div>
    </section>
  )
}