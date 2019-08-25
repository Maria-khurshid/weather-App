function getWeather() {
    const cityName = document.querySelector("input").value;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5575d2706856280c8e76417f7db98697`)
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