"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(3)} M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryDataAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render country
    renderCountry(data);
    // get neighbour country 2
    const [neighbour] = data.borders;

    if (!neighbour) return;
    else {
      const requestNeighbour = new XMLHttpRequest();
      requestNeighbour.open(
        "GET",
        `https://restcountries.com/v2/alpha/${neighbour}`
      );
      requestNeighbour.send();
      requestNeighbour.addEventListener("load", function () {
        const data2 = JSON.parse(this.responseText);
        renderCountry(data2, "neighbour");
      });
    }
  });
};

// getCountryDataAndNeighbour('usa');
getCountryDataAndNeighbour("italy");
