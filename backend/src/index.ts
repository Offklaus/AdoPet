import express from 'express'
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid'


const app = express()
app.use(cors())
app.use(express.json())


interface Animal {
id: string
name: string
age?: number
species: string
description?: string
adopted?: boolean
}


let animals: Animal[] = [
{ id: uuidv4(), name: 'Bidu', species: 'Cachorro', age: 3, description: 'Amigável e brincalhão', adopted: false },
{ id: uuidv4(), name: 'Mimi', species: 'Gato', age: 2, description: 'Calmo e carinhoso', adopted: false }
]


app.get('/animals', (req, res) => {
res.json(animals)
})


app.get('/animals/:id', (req, res) => {
const animal = animals.find(a => a.id === req.params.id)
if (!animal) return res.status(404).json({ message: 'Não encontrado' })
res.json(animal)
})


app.post('/animals', (req, res) => {
const { name, species, age, description, adopted } = req.body
const newAnimal: Animal = { id: uuidv4(), name, species, age, description, adopted: !!adopted }
animals.push(newAnimal)
res.status(201).json(newAnimal)
})


app.listen(4000, () => {
console.log('Backend rodando em http://localhost:4000')
})