"use client"

import Image from "next/image"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

const Skins = ({ champion, skins }: { champion: any, skins: any }) => {
  const [active, setActive] = React.useState(skins[0].id)

  const handleSelectSkin = (skin: string) => {
    setActive(skin)
  }

  return (
    <div className="relative">
      <div className="relative w-full pb-[60%]">
        {
          skins.map((skin: any) => (
            <div key={skin.id} className={`absolute top-0 left-0 w-full h-full transition ease-in-out duration-500 ${active === skin.id ? 'opacity-1' : 'opacity-0'}`}>
              <div className="w-full h-full">
                <Image className="block w-full h-full object-cover" src={skin.image} alt={skin.name} width={2000} height={2000} />
              </div>
            </div>
          ))
        }
      </div>
      <div className="absolute flex flex-col top-0 left-0 h-full w-1/3 z-10 bg-black/50 backdrop-blur-sm">
        <span className="font-black text-4xl uppercase italic mx-10 mt-10 p-5">Skins disponíveis</span>
        <div className="overflow-hidden flex-auto w-[calc(100%_+_15px)]">
          <div className="flex flex-col w-full h-[calc(100%_+_20vw)]">
            <Swiper
              className="w-full h-full mt-10"
              direction="vertical"
              slidesPerView={1.5}
              centeredSlides={true}
              slideToClickedSlide={true}
              height={100}
            >
              {
                skins.map((skin: any) => (
                  <SwiperSlide key={skin.id} className="h-[100px_!important] pl-10">
                    <div className="relative">
                      <button className="group relative w-full flex items-center p-0 bg-transparent z-10" onClick={() => handleSelectSkin(skin.id)}>
                        <div className="relative flex-[0_0_auto] w-[100px] h-[100px]">
                          <div className={`w-full h-full overflow-hidden transition ease-in-out duration-500 ${active === skin.id ? 'scale-100' : 'scale-[.6] group-hover:scale-75'}`}>
                            <Image className="block w-full h-full object-cover" src={skin.image} alt={skin.name} width={2000} height={2000} />
                          </div>
                        </div>
                        <label className={`block text-sm text-left m-5 uppercase flex-auto cursor-pointer transition ease-in-out duration-500 ${active === skin.id ? 'text-white' : 'text-white/50 group-hover:text-white'}`}>{skin.num === 0 ? champion : skin.name}</label>
                      </button>
                      <div className={`absolute w-full h-full top-0 p-2 z-0 transition ease-in-out duration-500 ${active === skin.id ? 'opacity-1' : 'opacity-0'}`}>
                        <Image className="w-full h-full" src="/images/border.png" width={2000} height={2000} alt="border" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Skins