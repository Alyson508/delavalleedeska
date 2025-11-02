import fs from 'fs'
import path from 'path'
import SEO from '../../components/SEO'

export default function Portees({ portees }){
  return (
    <>
      <SEO title="Portées — De la vallée d'Eska" description="Toutes nos portées: anciennes, archivées et à venir" />
      <h1 className="text-2xl font-bold">Portées</h1>
      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {portees.map((p:any) => (
          <div key={p.id} className="border rounded-lg p-4">
            <div className="font-semibold">{p.parents}</div>
            <div className="text-sm text-slate-600">{p.date_naissance} — {p.statut}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps(){
  const dataPath = path.join(process.cwd(), 'data', 'portees.json')
  const portees = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
  return { props: { portees } }
}
