import { verifyRequest } from "@utils"

const base = 'http://ddragon.leagueoflegends.com/cdn'

export const all = async () => {
  const response = await fetch(`${base}/13.9.1/data/pt_BR/champion.json`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const champions = (await response.json()).data

  return Object.values(champions)
}

export const byName = async (name: String) => {
  const response = await fetch(`${base}/13.9.1/data/pt_BR/champion/${name}.json`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const responseData = (await response.json()).data

  const championData: any = Object.values(responseData)[0]

  const keys = ['Q', 'W', 'E', 'R']

  const championKey = championData.key.padStart(4, '0')

  const spells = await championData.spells.map(async (spell: any, index: any) => {
    const webm = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${championKey}/ability_${championKey}_${keys[index]}1.webm`
    const mp4 = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${championKey}/ability_${championKey}_${keys[index]}1.mp4`

    const existFile = await verifyRequest(webm)

    return {
      ...spell,
      key: keys[index],
      preview: existFile ? {
        webm: webm,
        mp4: mp4
      } : null
    }
  })

  const spellsResolve = await Promise.all(spells).then(function (results) {
    return results
  })

  const webm = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${championKey}/ability_${championKey}_P1.webm`
  const mp4 = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${championKey}/ability_${championKey}_P1.mp4`

  const existFile = await verifyRequest(webm)

  const passive = {
    ...championData.passive,
    key: 'P',
    preview: existFile ? {
      webm: webm,
      mp4: mp4
    } : null
  }

  const skins = championData.skins.map((skin: any) => (
    {
      ...skin,
      image: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_${skin.num}.jpg`
    }
  ))

  return { ...championData, spells: spellsResolve, passive: passive, skins: skins }
}