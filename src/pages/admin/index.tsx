import { useState, useEffect } from 'react'

const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS || 'Eska2025!'

export default function Admin(){
  const [auth, setAuth] = useState(false)
  const [pass, setPass] = useState('')
  const [repro, setRepro] = useState<any[]>([])

  useEffect(()=>{
    fetch('/data/reproducteurs.json').then(r=>r.json()).then(setRepro)
  },[])

  if(!auth) return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-xl">Admin</h1>
      <input value={pass} onChange={e=>setPass(e.target.value)} className="mt-4 p-2 border w-full" placeholder="Mot de passe" />
      <button onClick={()=>{ if(pass===ADMIN_PASS) setAuth(true); else alert('Mdp incorrect') }} className="mt-4 px-4 py-2 bg-greenpastel rounded">Se connecter</button>
    </div>
  )

  return (
    <div className="p-4">
      <h1 className="text-xl">Edition reproducteurs</h1>
      <div className="mt-4">
        {repro.map(r => (
          <div key={r.id} className="p-3 border rounded mb-2">
            <div className="font-semibold">{r.nom}</div>
            <div className="text-sm text-slate-600">{r.pedigree}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm text-slate-500">Pour modifier/ajouter, édite les fichiers CSV/JSON dans /data ou utilise l'upload (optionnel).</div>
    </div>
  )
}
