const URL = "http://localhost:1717";

export async function getPlaces(){
  const response = await fetch(`${URL}/eats/places`);
  const data = await response.json();
  return data;
}