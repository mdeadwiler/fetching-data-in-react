// src/services/weatherService.js
// apiKey= 812112c3e7da4d92a11175210241510
const API_KEY = '812112c3e7da4d92a11175210241510';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {
        const queryString = `&q=${city}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();
        console.log('Data:', data);
        return data;
    } catch (error) {
    console.log(error);
}
};

export{ show };