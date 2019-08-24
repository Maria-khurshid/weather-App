
let cityName;


function getWeather() {
    const cityName = document.querySelector("input").value;



    // Make a request for a user with a given ID
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5651b311f4bde3b478a18fbf9b55efcd`)

        .then(function (response) {
            // handle success
            console.log(response.data.weather[0].main);
            // document.querySelector("h1").innerHTML =
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

}