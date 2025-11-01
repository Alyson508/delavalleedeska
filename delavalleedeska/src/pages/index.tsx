import SEO from '../components/SEO'
import fs from 'fs'
import path from 'path'

export default function Home({ infos }){
  return (
    <>
      <SEO title={infos.titre_complet} description={infos.phrase_accroche} />
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl font-serif">{infos.nom}</h1>
          <p className="mt-4 text-slate-700">{infos.phrase_accroche}</p>
          <div className="mt-6 flex gap-3">
            <a href="/portees" className="px-4 py-2 rounded bg-greenpastel">Voir les chiots</a>
            <a href="/reproducteurs" className="px-4 py-2 rounded border">Nos reproducteurs</a>
          </div>
        </div>
        <div>
          <img src="/images/header.jpg" alt="Elevage" className="w-full h-96 object-cover rounded-lg shadow" />
        </div>
      </section>
    </>
  )
}

export async function getStaticProps(){
  const dataPath = path.join(process.cwd(), 'data', 'infos.json')
  const infos = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
  return { props: { infos } }
}
