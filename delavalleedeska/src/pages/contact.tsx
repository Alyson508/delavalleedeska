import SEO from '../components/SEO'
import fs from 'fs'
import path from 'path'

export default function Contact({ infos }){
  return (
    <>
      <SEO title="Contact — De la vallée d'Eska" description="Contactez-nous pour une demande de renseignements ou réservation" />
      <h1 className="text-2xl font-bold">Contact</h1>
      <div className="mt-4 p-6 border rounded">
        <div><strong>Email :</strong> <a href={`mailto:${infos.email}`}>{infos.email}</a></div>
        <div className="mt-2"><strong>Téléphone :</strong> {infos.telephone}</div>
        <div className="mt-2 text-sm text-slate-600">Pour toute première prise de contact, merci de détailler votre projet d'adoption.</div>
      </div>
    </>
  )
}

export async function getStaticProps(){
  const dataPath = path.join(process.cwd(), 'data', 'infos.json')
  const infos = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
  return { props: { infos } }
}
