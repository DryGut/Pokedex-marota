const showPokemon = document.getElementById('fullname');

const buscarPokemon = document.getElementById('buscar');
const inputBuscar = document.createElement('input');
inputBuscar.classList.add('nome-pokemon');
inputBuscar.setAttribute('type', 'text');
buscarPokemon.appendChild(inputBuscar);

const pokemonTag = document.createElement('h2');
pokemonTag.classList.add('status-pokemon');
const pokemonImage = document.createElement('img');
pokemonImage.setAttribute('src', '#');
pokemonImage.classList.add('pokeimage');

const btnBuscar = document.createElement('button');
btnBuscar.setAttribute('type', 'button');
btnBuscar.innerHTML = 'Buscar';
buscarPokemon.appendChild(btnBuscar);


async function getPoke(pokemon){
  const SOME_API = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const response = await fetch(SOME_API);
  if(response.status == 200){
    const data = await response.json();
    pokemonImage.src = await data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokemonTag.innerHTML = 
      "Nome: " + data.name +
      "<br>Tipo: " + data['types'][0]['type']['name']+
      "<br>Hp: " + data['stats'][0]['base_stat']+
      "<br>Attack: " + data['stats'][1]['base_stat']+
      "<br>Defense: " + data['stats'][2]['base_stat'];
    showPokemon.appendChild(pokemonImage);
    showPokemon.appendChild(pokemonTag);
  }
}

btnBuscar.addEventListener('click',(event =>{
  event.preventDefault();
  getPoke(inputBuscar.value);
}));