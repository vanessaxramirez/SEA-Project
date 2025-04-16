/*
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const SHOHEI_OHTANI_URL =
  "https://i.pinimg.com/736x/b2/6e/32/b26e320a4ac1c2f7cd0b0d8283eb70fc.jpg";
const FREDDIE_FREEMAN_URL =
  "https://i.pinimg.com/736x/e7/74/e6/e774e6d2c1d68e28fa3f25afdb12149d.jpg";
const MOOKIE_BETTS_URL =
  "https://i.pinimg.com/736x/35/32/e0/3532e0fa8ac3ab88f3453c402712f25d.jpg";
const TEOSCAR_HERNANDEZ_URL =
  "https://i.pinimg.com/736x/b5/0c/10/b50c10c8b9dcff58829458eb2f643ee5.jpg";
const TOMMY_EDMAN_URL =
  "https://i.pinimg.com/736x/63/36/77/6336772f8f81af98d582f7db41a5f72d.jpg";
const KIKE_HERNANDEZ_URL =
  "https://i.pinimg.com/736x/67/61/a5/6761a5a398ffa930a54423b525e09637.jpg";
const MICHAEL_CONFORTO_URL =
  "https://www.justbaseball.com/wp-content/uploads/sites/2/2025/02/Michael-Conforto-Dodgers-Spring-Training-1.jpg?resize=768%2C432";
const ANDY_PAGES_URL =
  "https://i.pinimg.com/736x/9f/89/fd/9f89fd4d95f1912389555f3654364879.jpg";
const WILL_SMITH_URL =
  "https://i.pinimg.com/736x/25/24/34/2524348c9129a05260f91183f76fc866.jpg";
const AUSTIN_BARNES_URL =
  "https://i.pinimg.com/736x/63/36/77/6336772f8f81af98d582f7db41a5f72d.jpg";
const MAX_MUNCY_URL =
  "https://i.pinimg.com/736x/36/6f/f0/366ff0ad52f17df9618ed1ff8303a1a0.jpg";
const MIGUEL_ROJAS_URL =
  "https://i.pinimg.com/736x/38/74/8b/38748bdfc8d3bcd05d7c8db2920fa3ab.jpg";
const CHRIS_TAYLOR_URL =
  "https://i.pinimg.com/736x/85/d5/8a/85d58abbfb961e26ef3808321e763b89.jpg";
const YOSHINOBU_YAMAMOTO_URL =
  "https://i.pinimg.com/736x/71/a3/7e/71a37ed3b315939f5dbcdee4a0e3c23b.jpg";
const BLAKE_TREINEN_URL =
  "https://i.pinimg.com/736x/22/c0/b4/22c0b4ff75d7d5e9fb5017c995c56726.jpg";
const ROKI_SASAKI_URL =
  "https://i.pinimg.com/736x/ac/36/3b/ac363b14aebcbac799260cf44179e672.jpg";
const TYLER_GLASNOW_URL =
  "https://i.pinimg.com/736x/07/7a/8d/077a8d2bfaf8b604b8d53b32177dab0f.jpg";
const DUSTIN_MAY_URL =
  "https://i.pinimg.com/736x/85/26/44/852644f8b3daea1a6f01c5ffc8d390f5.jpg";
const ALEX_VESIA_URL =
  "https://i.pinimg.com/736x/8e/91/3e/8e913e1c3320c962cda0598bbb85a706.jpg";
const JACK_DREYER_URL =
  "https://img.mlbstatic.com/mlb-photos/image/upload/ar_9:16,g_auto,q_auto:good,w_2608,c_fill,f_jpg/v1/people/676263/action/vertical/current";
const BEN_CASPARIUS_URL =
  "https://s.hdnux.com/photos/01/44/11/42/26253495/5/1920x0.jpg";
const ANTHONY_BANDA_URL =
  "https://ca-times.brightspotcdn.com/dims4/default/ff58ada/2147483647/strip/true/crop/6000x4000+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb4%2Ffe%2Fb020c75c4deab8f3c662f0c9ba8e%2F1446557-sp-dodgers-reds-30-gmf.jpg";
const LUIS_GARCIA_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10wKVFWR0fmX1ZVDXqJgDR6IdTU1jyyxcIw&s";
const TANNER_SCOTT_URL =
  "https://img.mlbstatic.com/mlb-photos/image/upload/ar_9:16,g_auto,q_auto:good,w_2608,c_fill,f_jpg/v1/people/656945/action/vertical/current";
const BLAKE_SNELL_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7xxEIfnOG__jRrMZIATWm8atwyxPpCOL1Ifzb_52fj-4MKYdKzK5zD2nMsF_I33eDDE&usqp=CAU";
const LANDON_KNACK_URL =
  "https://img.mlbstatic.com/mlb-photos/image/upload/ar_9:16,g_auto,q_auto:good,w_2608,c_fill,f_jpg/v1/people/689017/action/vertical/current";
const KIRBY_YATES_URL =
  "https://img.mlbstatic.com/mlb-photos/image/upload/ar_9:16,g_auto,q_auto:good,w_2608,c_fill,f_jpg/v1/people/489446/action/vertical/current";

// This is an array of strings (TV show titles)
let players = [
  {
    name: "Shohei Ohtani",
    position: "Designated Hitter",
    AVG: 0.296,
    OBP: 0.390,
    SLG: 0.549,
    OPS: 0.939,
    image: SHOHEI_OHTANI_URL
  },
  {
    name: "Freddie Freeman",
    position: "First Base",
    AVG: 0.250,
    OBP: 0.280,
    SLG: 0.275,
    OPS: 0.529,
    image: FREDDIE_FREEMAN_URL
  },
  {
    name: "Mookie Betts",
    position: "Short Stop",
    AVG: 0.304,
    OBP: 0.400,
    SLG: 0.554,
    OPS: 0.954,
    image: MOOKIE_BETTS_URL
  },
  {
    name: "Teoscar Hernandez",
    position: "Right Field",
    AVG: 0.281,
    OBP: 0.309,
    SLG: 0.563,
    OPS: 0.872,
    image: TEOSCAR_HERNANDEZ_URL
  },
  {
    name: "Tommy Edman",
    position: "Designated Hitter",
    AVG: 0.235,
    OBP: 0.274,
    SLG: 0.529,
    OPS: 0.803,
    image: TOMMY_EDMAN_URL
  },
  {
    name: "Kike Hernandez",
    position: "First Base",
    AVG: 0.125,
    OBP: 0.173,
    SLG: 0.375,
    OPS: 0.548,
    image: KIKE_HERNANDEZ_URL
  },
  {
    name: "Michael Conforto",
    position: "Left Field",
    AVG: 0.216,
    OBP: 0.355,
    SLG: 0.412,
    OPS: 0.767,
    image: MICHAEL_CONFORTO_URL
  },
  {
    name: "Andy Pages",
    position: "Center Field",
    AVG: 0.137,
    OBP: 0.254,
    SLG: 0.275,
    OPS: 0.529,
    image: ANDY_PAGES_URL
  },
  {
    name: "Will Smith",
    position: "Catcher",
    AVG: 0.364,
    OBP: 0.482,
    SLG: 0.500,
    OPS: 0.982,
    image: WILL_SMITH_URL
  },
  {
    name: "Austin Barnes",
    position: "Catcher",
    AVG: 0.000,
    OBP: 0.000,
    SLG: 0.000,
    OPS: 0.000,
    image: AUSTIN_BARNES_URL
  },
  {
    name: "Max Muncy",
    position: "Third Base",
    AVG: 0.173,
    OBP: 0.267,
    SLG: 0.250,
    OPS: 0.517,
    image: MAX_MUNCY_URL
  
  },
  {
    name: "Miguel Rojas",
    position: "Short Stop",
    AVG: 0.161,
    OBP: 0.188,
    SLG: 0.161,
    OPS: 0.349,
    image: MIGUEL_ROJAS_URL
  },
  {
    name: "Chris Taylor",
    position: "Left Field",
    AVG: 0.250,
    OBP: 0.250,
    SLG: 0.250,
    OPS: 0.500,
    image: CHRIS_TAYLOR_URL
  }
]


// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.
window.onload = function() 
{
  console.log("Window loaded!");
  const cardContainer = document.getElementById("card-container");
  console.log("Card container found:", cardContainer);
  
  const battersTemplate = document.getElementById("batters-template");
  console.log("Batters template found:", battersTemplate);
  
  showCards();
}

// This function adds cards the page to display the data in the array
function showCards() 
{
  const cardContainer = document.getElementById("card-container");
  const battersTemplate = document.getElementById("batters-template");
  console.log("Script is running");
  
  cardContainer.innerHTML = "";

  console.log('Showing cards...');
  console.log('Players array:', players);

  // Iteraties through the hitters
  for (let i = 0; i < players.length; i++) 
    {
      let player = players[i];
      console.log('Creating card for batter:', player.name);
    
      let nextCard = battersTemplate.content.cloneNode(true); // Copy the template card
      editCardContent(
        nextCard, 
        player.name, 
        player.image, 
        player.position, 
        player.AVG, 
        player.OBP, 
        player.SLG, 
        player.OPS);
      cardContainer.appendChild(nextCard);
    }
}

function editCardContent(card, name, imageURL, position, stat1, stat2, stat3, stat4) 
{
  const nameElement = card.querySelector('.card-name');
  if (nameElement) {
    nameElement.textContent = name;
  }
  
  const imageElement = card.querySelector('img');
  if (imageElement) {
    imageElement.src = imageURL;
    imageElement.alt = name;
  }

  const positionElement = card.querySelector('.card-position');
  if (positionElement) {
    positionElement.textContent = "Position: " + position;
  }
  const statAVG = card.querySelector('.card-AVG');
  if (statAVG) {
    statAVG.textContent = "AVG: " + stat1;
  }

  const statOBP = card.querySelector('.card-OBP');
  if (statOBP) {
    statOBP.textContent = "OBP: " + stat2;
  }

  const statSLG = card.querySelector('.card-SLG');
  if (statSLG) {
    statSLG.textContent = "SLG: " +stat3;
  }

  const statOPS = card.querySelector('.card-OPS');
  if (statOPS) {
    statOPS.textContent = "OPS: " + stat4;
  }
}
// This function will fill the template card with the player's/pitcher's data
//is calls the addCards() function when the page is first loaded
// document.addEventListener("DOMContentLoaded", showCards);

// function quoteAlert() {
//   console.log("Button Clicked!");
//   alert(
//     "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
//   );
// }

// document.getElementById("search-bar").addEventListener("input", function () 
// {
//   const query = this.value.toLowerCase(); // Get the search query and convert to lowercase

//   const filteredPlayers = players.filter((player) =>
//     player.name.toLowerCase().includes(query)
//   );

//   // Show filtered cards
//   showCards(filteredPlayers);
// }
// );


// function removeLastCard() {
//   titles.pop(); // Remove last item in titles array
//   showCards(); // Call showCards again to refresh
// }
