const container = document.getElementById("container");

const createNode = (el) => document.createElement(el);
const append = (parent, el) => parent.appendChild(el);

let id = 80;

const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

const generatorPokemon = async () => {
  const response = await fetch(url);
  const dataJson = await response.json();
  // console.log(dataJson.abilities);

  const h1 = createNode("h1");
  const img = createNode("img");
  const h2 = createNode("h2");

  img.setAttribute("class", "pokemon");
  img.setAttribute("alt", "imagem do pokemon");

  h1.innerHTML = dataJson.name;
  img.src = dataJson.sprites.front_shiny;

  dataJson.abilities.map((item) => {
    console.log(item.ability.name);

    h2.innerHTML = ` Habilidade: ${item.ability.name}`;
  });

  append(container, h1);
  append(container, img);
  append(container, h2);
};

console.log(id);
generatorPokemon();

//karstenbelt
