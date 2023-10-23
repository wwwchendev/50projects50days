const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
const types = {
    "grass": { typeName: "草系", color: "#DEFDE0" },
    "fire": { typeName: "火系", color: "#FDDFDF" },
    "water": { typeName: "水系", color: "#DEF3FD" },
    "bug": { typeName: "昆蟲系", color: "#f8d5a3" },
    "normal": { typeName: "普通系", color: "#F5F5F5" },
    "poison": { typeName: "毒系", color: "#98d7a5" },
    "electric": { typeName: "電系", color: "#FCF7DE" },
    "ground": { typeName: "地面系", color: "#f4e7da" },
    "fairy": { typeName: "妖精系", color: "#fceaff" },
    "fighting": { typeName: "格鬥系", color: "E6E0D4" },
    "psychic": { typeName: "超能力系", color: "#eaeda1" },
    "rock": { typeName: "岩石系", color: "#d5d5d4" },
    "dragon": { typeName: "龍系", color: "#97b3e6" },
    "flying": { typeName: "飛行系", color: "#F5F5F5" },
};

const main_types = Object.keys(types)
//['grass', 'fire', 'water', 'bug', 'normal', 'poison', 'electric', 'ground', 'fairy', 'fighting', 'psychic', 'rock', 'dragon', 'flying']

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

//Ｐokeapi :https://pokeapi.co/ 
//https://pokeapi.co/api/v2/pokemon/1
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    //使用 await fetch(url) 时，它会等待 Promise 对象的解决，而在 Promise 解决后，才会将结果赋值给 res。
    const res = await fetch(url)
    //從 fetch 請求取得的回應資料解析為 JSON 格式。
    const data = await res.json()
    // console.log(data)
    createPokemonCard(data)
}

//創建寶可夢卡片
const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    //把名字第一個字母大寫+第二個字母開始維持原本小寫
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    //希望id統一顯示三位數的格式
    //str.padStart(targetLength, padString)字串方法，用於在字串的前面添加指定的字符，以達到指定的長度。
    //targetLength 是最終字串的目標長度，如果原始字串長度小於目標長度，將會在前面加上字元。 
    //padString 是要添加到字串前面的字符，通常是一個字串。如果不提供 padString，預設是空格字元。
    const id = pokemon.id.toString().padStart(3, '0')

    /*屬性
    [
     {
         "slot": 1,
         "type": {
             "name": "electric",
             "url": "https://pokeapi.co/api/v2/type/13/"
         }
     },
     {
         "slot": 2,
         "type": {
             "name": "flying",
             "url": "https://pokeapi.co/api/v2/type/3/"
         }
     }
     ]*/
    const poke_types = pokemon.types.map(type => type.type.name) //["electric","flying"]
    //在主要屬性 main_types 陣列中尋找第一個與 Pokémon 的屬性清單 poke_types 中的元素相符的主要 Pokémon 類型。
    //它透過檢查 poke_types 中的元素是否存在於 main_types 中來找到第一個匹配的屬性
    // Array.indexOf() 用於在陣列中尋找特定元素的方法。如果元素存在於數組中，它會傳回該元素的索引，否則傳回 -1。
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = types[type].color
    pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">屬性: <span>${types[type].typeName}</span> </small>
    </div>
    `
    pokemonEl.innerHTML = pokemonInnerHTML
    poke_container.appendChild(pokemonEl)
}

fetchPokemons()
