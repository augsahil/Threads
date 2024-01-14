export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "4ed3302c49mshc67583086411519p1bdef8jsndf59fd4665af",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}
