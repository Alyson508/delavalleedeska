import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import SEO from '../../components/SEO'

export default function List({ dogs }){
  return (
    <>
      <SEO title="Reproducteurs — De la vallée d'Eska" description="Fiches complètes de nos reproducteurs" />
      <h1 className="text-2xl font-bold">Reproducteurs</h1>
      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {dogs.map((d:any) => (
          <Link key={d.id} href={`/reproducteurs/${d.id}`} className="border rounded-lg overflow-hidden">
            <img src={d.images[0]} alt={d.nom} className="w-full h-56 object-cover" />
            <div className="p-4">
              <div className="font-semibold">{d.nom}</div>
              <div className="text-sm text-slate-600">{d.sexe} — {d.pedigree}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps(){
  const dataPath = path.join(process.cwd(), 'data', 'reproducteurs.json')
  const dogs = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
  return { props: { dogs } }
}
