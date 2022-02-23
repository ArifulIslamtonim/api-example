const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {

        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML =`
        <h3>country: ${country.name}</h3>
        <p>capital: ${country.capital}</p>
        <button onclick ="loadCountry('${country.name}')"> Details </button>
        `;
       /*  const h3 = document.createElement('h3');
        h3.innerText =`country name: ${country.name}`;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText =`capital: ${country.capital}`;
        div.appendChild(p); */
        countriesDiv.appendChild(div);
    });

   
}
const loadCountry = name => {
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h4> ${country.name}</h5>
    <p>population: ${country.population}</p>
    <img width="200px" src="${country.flag}">
    `;
}