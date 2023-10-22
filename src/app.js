const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // var score=document.getElementById("score")
    let hero=0
    let villan=0
    let hero1=parseInt(sessionStorage.getItem('item')) || 0
    let villan1=parseInt(sessionStorage.getItem('item2')) || 0
    var heropoint=document.querySelector(".hero-point")
    var villanpoint=document.querySelector(".villan-point")
    



    var heroes = document.querySelector("#heroes");
    for (let i = 0; i < players.length; i++) {
        const player = {
            name: players[i],
            strength: getRandomStrength(),
            image: `./images/super-${i+1}.png`,
            type: i % 2 === 0 ? 'hero' : 'villain'
        };
        detailedPlayers.push(player);


        
        if (i % 2 == 0 ){
            hero+=player.strength
        }
        else{
            villan+=player.strength
        }
        
        
    }
    if (hero>villan){
        hero1+=1
        sessionStorage.setItem('item',hero1)
    }
    else{
        villan1+=1
        sessionStorage.setItem('item2',villan1)
    }
    heropoint.innerHTML=hero1
    villanpoint.innerHTML=villan1

        


    return detailedPlayers

}


// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    var strength= Math.ceil(Math.random() * 100);
    return strength
}
getRandomStrength()

const buildPlayers = (players, type) => {
    let fragment = '';
    hero=0
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for (let i = 0; i < players.length; i++) {
        fragment += `<div class="player">
            <img src="${players[i].image}" alt="">
            
                <div class="name">${players[i].name}</div>
                <div class="strength">${players[i].strength}</div>

                </div>`;
            }

    return fragment;
}




const viewPlayers = (players) => {
    // console.log(players)
    const heroesContainer = document.getElementById('heroes');
    const villainsContainer = document.getElementById('villains');

    const heroes = players.filter(player => player.type === 'hero')
    const villains = players.filter(player => player.type === 'villain');

    heroesContainer.innerHTML = buildPlayers(heroes);
    villainsContainer.innerHTML = buildPlayers(villains);

}



window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}