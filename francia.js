fetch("https://raw.githubusercontent.com/astockwell/countries-and-provinces-states-regions/master/countries/france.json")
.then(x => x.json)
.then(y => y.megjelenites(y))

function megjelenites(y){
    console.log(y)
}