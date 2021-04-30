let carList = document.querySelector(".car-list");

const cars = [
    {
        mark: "Audi",
        model: "A5",
        year: "2010",
        pojemnosc: "2.0",
        engine: "Diesel",
        picture: "Images/audiA5.jpg",
        seatCount: 1
    },
    {
        mark: "BMW",
        model: "F10",
        year: "2012",
        pojemnosc: "2.0",
        engine: "Diesel",
        picture: "Images/bmwf10.jpg",
        seatCount: 2
    },
    {
        mark: "Seat",
        model: "Leon",
        year: "2005",
        pojemnosc: "1.9",
        engine: "Diesel",
        picture: "Images/leon.jpg",
        seatCount: 3
    },
    {
        mark: "Porsche",
        model: "Cayenne",
        year: "2018",
        pojemnosc: "4.0",
        engine: "Bensin",
        picture: "Images/porsche.jpg",
        seatCount: 4
    },

];

console.log(cars);

(() => {
    let usCars = "";
    cars.map((car) => {
        usCars += `
            <div class="list-of-cars">
                <img src="${car.picture}">
                <h2>Marka: ${car.mark}</h2>
                <h3>Model: ${car.model}</h3>
                <p>Rok produkcji: ${car.year}</p>
                <p>Silnik: ${car.pojemnosc} ${car.engine}</p>
            </div>
        `
    })

    carList.innerHTML = usCars;

})();


