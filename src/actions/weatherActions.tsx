const addWeather = (weather: any) => {
    return {
        type: "ADD_WEATHER",
        payload: weather
    }
};


export default {
    addWeather
}
