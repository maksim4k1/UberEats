import Card from "./components/Card";

const URL = "http://localhost:1717";

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

export async function getRestaurant(id){
  try{
    const response = await fetch(`${URL}/eats/places`);
    const data = await response.json();
    const restaurant = data.find(restaurant => restaurant.id === id);
    if(restaurant === undefined){
      window.location.href = "/error/500";
      return;
    }
    return restaurant;
  } catch(error){
    return(`При запросе произола ошибка: ${error}`);
  }
}

export async function getDishes(id, currency){
  try{
    const response = await fetch(`${URL}/eats/dishes/${id}`);
    const data = await response.json();
    if(data.length <= 0){
      return(["Список блюд пуст", "Все блюда"]);
    } else{
      const filteredMenu = [];
      data.forEach(item => {
        if(filteredMenu.find(el => el === item.category) === undefined){
          filteredMenu.push(item.category);
        }
      });
      const dishes = data.map(dish => {
        return <Card key={dish.id} name={dish.name} body={dish.desc} image={dish.img} info={`${dish.price} ${currency}`} category={dish.category} />
      })
      return [dishes, filteredMenu]
    }
  } catch(error){
    return([`При запросе произола ошибка: ${error}`, "Все блюда"]);
  }
}