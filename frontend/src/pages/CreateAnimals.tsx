import React, { useState } from 'react'
import { createAnimal } from '../services/api'
import { useNavigate } from 'react-router-dom'


export default function CreateAnimal() {
const [name, setName] = useState('')
const [species, setSpecies] = useState('')
const [age, setAge] = useState<number | ''>('')
const [description, setDescription] = useState('')
const navigate = useNavigate()


async function handleSubmit(e: React.FormEvent) {
e.preventDefault()
await createAnimal({ name, species, age: age === '' ? undefined : Number(age), description, adopted: false })
navigate('/adopt')
}


return (
<form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, maxWidth: 400 }}>
<h2>Cadastrar animal</h2>
<input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
<input placeholder="Espécie" value={species} onChange={e => setSpecies(e.target.value)} required />
<input type="number" placeholder="Idade" value={age as any} onChange={e => setAge(e.target.value === '' ? '' : Number(e.target.value))} />
<textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
<button type="submit">Salvar</button>
</form>
)
}