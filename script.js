function getWeather() {
    const cityName = document.querySelector("input").value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=99bf340ab3242744dbfe45645c790301`)
        .then(function(response) {
            // handle success
            console.log(response.data.weather[0].main);
            document.querySelector("h1").innerHTML = response.data.weather[0].main;
        })
        .catch(function(error) {
            // handle error
            alert("City not found");
        })
        .finally(function() {
            // always executed
        });
}
