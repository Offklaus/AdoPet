import axios from "axios";

const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export interface GeocodeResult {
  latitude: number;
  longitude: number;
}

export async function geocodeAddress(
  rua: string,
  bairro: string,
  cidade: string,
  estado: string
): Promise<GeocodeResult> {
  const enderecoCompleto = `${rua}, ${bairro}, ${cidade}, ${estado}, Brasil`;

  const response = await axios.get(
    "https://maps.googleapis.com/maps/api/geocode/json",
    {
      params: {
        address: enderecoCompleto,
        key: GOOGLE_API_KEY,
        region: "BR",
        language: "pt-BR",
      },
    }
  );

  

  if (
    response.data.status !== "OK" ||
    response.data.results.length === 0
  ) {
    throw new Error("Endereço não encontrado");
  }

  const location = response.data.results[0].geometry.location;

  return {
    latitude: location.lat,
    longitude: location.lng,
  };
}


