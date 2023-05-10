import Link from "next/link";
import Image from "next/image";
import services from "@services";


export default async function Page() {
  const patchNotes = await services.patchNotes.all(12)

  return (
    <section className="bg-tertiary text-white">
      <div className="flex flex-col items-center mx-40 py-10">
        <h1 className="text-6xl font-black italic uppercase">NOTAS DE ATUALIZAÇÃO</h1>
        <div className="grid-cols-3 grid gap-10 mt-10">
          {
            patchNotes.map((patchNote, index) => (
              <Link key={index} className="flex flex-col hover:scale-105 transition cursor-pointer" href={`/patch-notes/${patchNote.url}`}>
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
      </div>
    </section>
  )
}