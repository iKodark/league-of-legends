import './globals.css'
import { register } from "timeago.js"
import { Header, Footer } from '@components'

export const metadata = {
  title: 'Liga das Lendas'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localeFunc = (number?: number, index?: number, totalSec?: number): [string, string] => {
    return [
      ['agora mesmo', 'agora'],
      ['há %s segundos', 'em %s segundos'],
      ['há um minuto', 'em um minuto'],
      ['há %s minutos', 'em %s minutos'],
      ['há uma hora', 'em uma hora'],
      ['há %s horas', 'em %s horas'],
      ['há um dia', 'em um dia'],
      ['há %s dias', 'em %s dias'],
      ['há uma semana', 'em uma semana'],
      ['há %s semanas', 'em %s semanas'],
      ['mês passado', 'em um mês'],
      ['há %s meses', 'em %s meses'],
      ['há um ano', 'em um ano'],
      ['há %s anos', 'em %s anos'],
    ][index || 0] as [string, string];
  };
  register('pt_BR', localeFunc)

  return (
    <html lang="pt-BR">
      <body className="mt-20">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
