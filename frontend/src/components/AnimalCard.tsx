import React from 'react'
import type { Animal } from '../types/Animals'
import { Link } from 'react-router-dom'


export default function AnimalCard({ animal }: { animal: Animal }) {
return (
<article style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8 }}>
<h3>{animal.name} {animal.adopted ? '(adotado)' : ''}</h3>
<p>{animal.species} • {animal.age ?? 'idade não informada'}</p>
<p>{animal.description}</p>
<Link to={`/adopt/${animal.id}`}>Ver</Link>
</article>
)
}