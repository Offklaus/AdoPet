import axios from "axios";

export async function geocodeEndereco(endereco: string) {
  const response = await axios.get(
    "https://maps.googleapis.com/maps/api/geocode/json",
    {
      params: {
        address: endereco,
        key: process.env.GOOGLE_MAPS_API_KEY
      }
    }
  );

  if (response.data.status !== "OK") {
    throw new Error("Endereço inválido");
  }

  const result = response.data.results[0];

  return {
    latitude: result.geometry.location.lat,
    longitude: result.geometry.location.lng,
    enderecoFormatado: result.formatted_address
  };
}
