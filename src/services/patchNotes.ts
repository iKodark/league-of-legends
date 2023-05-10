import { format } from "timeago.js"

export const versions = async () => {
  return fetch('https://ddragon.leagueoflegends.com/api/versions.json')
}

export const all = async (quantity: Number) => {
  const response = await versions()

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const patchNotes = (await response.json()).slice(0, quantity).map((patch: String) => patch.split('.').slice(0, 2).join('-'))

  return (await Promise.all(patchNotes.map(async (patch: String) => {
    const response = await fetch(`https://www.leagueoflegends.com/page-data/pt-br/news/game-updates/notas-da-atualizacao-${patch}/page-data.json`);
    return response.json();
  }))).map(update => {
    const { title, category, banner, author, date, url } = update?.result?.data?.all?.nodes[0]
    return {
      title,
      category: category[0].title,
      banner: banner.url,
      author: author[0].title,
      date: format(date, 'pt_BR'),
      url: url.url.split('/').slice(3, -1)
    }
  });
}

export const byName = async (name: String) => {
  const res = await fetch(`https://www.leagueoflegends.com/page-data/pt-br/news/game-updates/${name}/page-data.json`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const { title, category, banner, author, date, url, patch_notes_body } = (await res.json()).result.data.all.nodes[0]

  return {
    title,
    category: category[0].title,
    banner: banner.url,
    author: author[0].title,
    date: format(date, 'pt_BR'),
    url: url.url.split('/').slice(3, -1),
    html: patch_notes_body[0].patch_notes.html
  }
}