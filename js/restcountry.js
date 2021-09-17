
const losdeCountry = () => { 
    fetch('https://restcountries.eu/rest/v2/all')
     .then(res => res.json())
     .then(data => displayCountry(data))
}
losdeCountry();
const displayCountry = (countrys) => {
    console.log (countrys[0]);
    const displayDitails =  document.getElementById('countryes')
    const countryHtml = countrys.map(country => getCountryHtml(country));
    displayDitails.innerHTML = countryHtml.join(' ');
    // console.log (country.name);
}

const getCountryHtml = country =>{
    const {name, capital, flag} = country;
    // console.log (country.name);
    return `
        <div class="area">
            <img src="${flag}">
            <h2>${name}</h2>
            <h4>${capital}</h4>
        </div>
    `
}


