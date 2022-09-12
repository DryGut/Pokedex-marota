const objectHtml = {
  buttonToSearch: document.querySelector('.buscar'),
  nameOfPokemon: document.querySelector('.nome-pokemon'),
  statusOfPokemon: document.querySelector('.status-pokemon'),
  pokeImage: document.querySelector('.pokeimage'),
}


async function choosePokemon(pokemon) {
  const pokeAPI = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const response = await fetch(pokeAPI);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
}

const showPokemon = async(pokemon)=>{
  const data = await choosePokemon(pokemon);
  const pokeStatus = [`Nome: ${data.name}`, 
                      `Tipo: ${data['types']['0']['type']['name']}`,
                      `Hp: ${data['stats']['0']['base_stat']}`,
                      `Attack: ${data['stats']['1']['base_stat']}`,
                      `Defense: ${data['stats']['2']['base_stat']}`];
  for(let value of pokeStatus){
    const pokeList = document.createElement('li');
    pokeList.innerHTML = value;
    objectHtml.statusOfPokemon.appendChild(pokeList);
  }
  objectHtml.pokeImage.src = 
    await data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}


objectHtml.buttonToSearch.addEventListener('click',(event =>{
  event.preventDefault();
  showPokemon(objectHtml.nameOfPokemon.value);
}));
