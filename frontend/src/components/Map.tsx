import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

type MapProps = {
  latitude: number;
  longitude: number;
};

const containerStyle = {
  width: "100%",
  height: "300px",
};

export function Map({ latitude, longitude }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <p>Carregando mapa...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: latitude, lng: longitude }}
      zoom={15}
    >
      <Marker position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  );
}
