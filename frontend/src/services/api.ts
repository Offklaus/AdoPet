import axios from "axios";

import type { Animal } from '../types/Animals'


const api = axios.create({
baseURL: 'http://localhost:4000/api'
})


export async function getAnimals() {
const res = await api.get<Animal[]>('/animals')
return res.data
}


export async function getAnimal(id: string) {
const res = await api.get<Animal>(`/animals/${id}`)
return res.data
}


export async function createAnimal(payload: Omit<Animal, 'id'>) {
const res = await api.post<Animal>('/animals', payload)
return res.data
}


export default api