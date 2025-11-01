import fs from 'fs'
import path from 'path'
import SEO from '../components/SEO'

export default function Galerie({ photos }){
  return (
    <>
      <SEO title="Galerie — De la vallée d'Eska" description="Photos de nos chiots et de l'élevage" />
      <h1 className="text-2xl font-bold">Galerie</h1>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((p:any) => (
          <div key={p.id} className="overflow-hidden rounded">
            <img src={p.src} alt={p.caption} className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps(){
  const dataPath = path.join(process.cwd(), 'data', 'galerie.json')
  const photos = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
  return { props: { photos } }
}
