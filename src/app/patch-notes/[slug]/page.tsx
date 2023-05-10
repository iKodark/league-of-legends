import Image from "next/image"
import services from '@services'

export default async function Page({ params }: any) {
  const patchNote = await services.patchNotes.byName(params.slug)

  return (
    <section className="bg-tertiary text-white">
      <div className="flex flex-col items-center mx-40 pb-10">
        <div className="w-full h-[60vh]">
          <Image className="object-cover w-full h-full" src={patchNote.banner} alt="patch-banner" width={2000} height={2000} />
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="uppercase">
            <h1 className="text-6xl font-black italic">{patchNote.title}</h1>
            <div className="flex justify-between text-primary font-semibold">
              <span>{patchNote.date}</span>
              <span>~{patchNote.author}</span>
            </div>
          </div>
          <div className="mt-10" dangerouslySetInnerHTML={{ __html: patchNote.html }} />
        </div>
      </div>
    </section>
  )
}