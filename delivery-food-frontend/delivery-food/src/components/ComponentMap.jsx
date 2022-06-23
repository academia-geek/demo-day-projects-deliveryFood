import { useLoadScript } from "@react-google-maps/api";
import { Loading } from "./Loading";
import Maps from "./Maps";

export const ComponentMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA6YHrzKAkEgvk-wjz7yM3YFqNvC5eS6Dc",
    libraries: ["places"],
  });

  if (!isLoaded) return <Loading />;

  return <Maps />;
};
