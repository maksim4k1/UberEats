import Card from "./components/Card";

const URL = "http://localhost:171";

export async function getPlaces(){
  try{
    const response = await fetch(`${URL}/eats/places`);
    const data = await response.json();
    if(data.length <= 0){
      return("Список рестаранов пуст");
    } else{
      return data.map(place => {
        return <Card key={place.id} name={place.name} body={place.cuisine} link={`/restaurant/${place.id}`} />
      })
    }
  } catch(error){
    return(`При запросе произола ошибка: ${error}`);
  }
}