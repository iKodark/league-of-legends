"use client"

import Image from "next/image"
import React from 'react'

const Spells = ({ passive, spells }: { passive: any, spells: any }) => {
  const [active, setActive] = React.useState('P')

  const handleSelectSpell = (key: string) => {
    setActive(key)
  }

  return (
    <>
      <div className="w-1/2">
        <div className="w-full text-center">
          <span className="text-5xl font-black italic uppercase">Habilidades</span>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="inline-flex items-center">
            <button className="bg-transparent p-3 border-none" onClick={() => handleSelectSpell('P')}>
              <Image src={`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/${passive.image.group}/${passive.image.full}`} alt="Passive" width={50} height={50} />
            </button>
            {
              spells.map((spell: any, index: any) => (
                <button key={index} className="bg-transparent p-3 border-none" onClick={() => handleSelectSpell(spell.key)}>
                  <Image src={`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/${spell.image.group}/${spell.image.full}`} alt={spell.id} width={50} height={50} />
                </button>
              ))
            }
          </div>
          <div>
            <span>
              {
                active === 'P' ? (
                  passive.description
                ) : (
                  spells.find((spell: any) => spell.key === active).description
                )
              }
            </span>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        {
          !!passive?.preview ? (
            <video className={`relative w-full h-full object-cover object-[center_center] z-0 ${'P' === active ? 'block' : 'hidden'}`} autoPlay loop muted playsInline>
              <source src={passive?.preview?.webm} type="video/webm" />
              <source src={passive?.preview?.mp4} type="video/mp4" />
            </video>
          ) : (
            <div className={`${'P' === active ? 'block' : 'hidden'}`}>
              <div className="relative w-full h-full flex items-center justify-between">
                <Image className="absolute w-full h-full object-cover object-center" src="https://www.leagueoflegends.com/static/no-ability-background-fdc6db338e4adb76a0dc80e0728ed6d0.jpg" alt="no-video" width={2000} height={2000} />
                <div className="w-full flex flex-col items-center justify-center p-10">
                  <Image className="relative block w-1/2 h-full" src="https://www.leagueoflegends.com/static/no-ability-icon-feb372ba66a6fcea09cdacb239b4f171.png" alt="no-video" width={2000} height={2000} />
                  <span className="relative font-bold text-2xl italic">
                    Não é possível exibir esta habilidade em vídeo
                  </span>
                </div>
              </div>
            </div>
          )
        }
        {
          spells.map((spell: any, index: any) => (
            spell?.preview ? (
              <video key={index} className={`relative w-full h-full object-cover object-[center_center] z-0 ${spell.key === active ? 'block' : 'hidden'}`} autoPlay loop muted playsInline>
                <source src={spell?.preview?.webm} type="video/webm" />
                <source src={spell?.preview?.mp4} type="video/mp4" />
              </video>
            ) : (
              <div className={`${spell.key === active ? 'block' : 'hidden'}`}>
                <div className="w-full h-full flex items-center justify-between">
                  <Image className="absolute w-full h-full object-cover object-center" src="https://www.leagueoflegends.com/static/no-ability-background-fdc6db338e4adb76a0dc80e0728ed6d0.jpg" alt="no-video" width={2000} height={2000} />
                  <div className="p-5">
                    <Image className="absolute w-1/2 h-auto object-cover object-center" src="https://www.leagueoflegends.com/static/no-ability-icon-feb372ba66a6fcea09cdacb239b4f171.png" alt="no-video" width={2000} height={2000} />
                  </div>
                </div>
              </div>
            )
          ))
        }
      </div>
    </>

  )
}

export default Spells