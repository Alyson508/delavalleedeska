import fs from 'fs'
import path from 'path'
import SEO from '../../components/SEO'

export default function Dog({ dog }){
  return (
    <>
      <SEO title={`${dog.nom} — De la vallée d'Eska`} description={dog.description} image={dog.images[0]} url={`https://delavalleedeska.fr/reproducteurs/${dog.id}`} />
      <div className="grid md:grid-cols-2 gap-6">
        <img src={dog.images[0]} alt={dog.nom} className="w-full h-96 object-cover rounded-lg" />
        <div>
          <h1 className="text-2xl font-bold">{dog.nom}</h1>
          <p className="mt-2">{dog.description}</p>
          <ul className="mt-4 text-sm text-slate-600">
            <li><strong>Naissance :</strong> {dog.naissance}</li>
            <li><strong>Pedigree :</strong> {dog.pedigree}</li>
            <li><strong>Santé :</strong> {dog.sante}</li>
            <li><strong>Caractère :</strong> {dog.caractere}</li>
            <li><strong>Activités :</strong> {dog.activites.join(', ')}</li>
          </ul>
          <div className="mt-6">
            <a className="px-4 py-2 rounded bg-greenpastel" href={`mailto:elevage-lve@orange.fr`}>Contacter</a>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths(){
  const dataPath = path.join(process.cwd(), 'data', 'reproducteurs.json')
  const dogs = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
  const paths = dogs.map((d:any) => ({ params: { slug: d.id } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any){
  const dataPath = path.join(process.cwd(), 'data', 'reproducteurs.json')
  const dogs = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
  const dog = dogs.find((x:any) => x.id === params.slug)
  return { props: { dog } }
}
