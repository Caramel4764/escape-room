import { addItem } from "../functions/item/addItem.js";
import { displayInspect } from "../functions/inspect/displayInspectMenu.js";
import { openMenu } from "../functions/popup/openMenu.js";
import { player } from "./player.js";
import { createSingleRoomObject } from "../functions/room/createSingleRoomObject.js";
import { changeRoomImg } from "../functions/room/changeRoomImg.js";
let computerDiv = document.querySelector("#computer-screen");
let computerScreen = document.getElementById("computer-content");
let computerScreenDiv = document.getElementById("computer-screen-div");

let rooms = {
  dims: {
    x: 1000,
    y: 600,
  },
  entrance: {
    name: "entrance",
    isDark: false,
    icon: {
      src: "./assets/misc/icons/exit-icon.jpg",
      x: "0px",
      y: "100px",
    },
    wall: "./assets/wall/wood-wall.jpg",
    floor: "./assets/floor/wood-floor.png",
    divider: "./assets/floor/floor-divider.png",
    entities: [
      {
        name: "carpet",
        src: "./assets/floor/carpet.png",
        desc: "There's something underneath",
        dims: {
          x: "340px",
          y: "450px",
          width: "320px",
          z: "3",
        },
      },
      {
        name: "carpetSection",
        src: "./assets/floor/carpet-small-section.png",
        desc: "You flip the rug",
        dims: {
          x: "560px",
          y: "495px",
          width: "100px",
          z: "5",
        },
        puzzle: {
          type: "inspect",
          isSolved: false,
          //solveImg: './assets/furniture/entrance/shelf.png',
          newZ: '3',
          solveDescription: "Dummy text",
          afterDesc: "There's nothing else underneath now",
          solveFunction: () => {
            console.log('test')
          },
        },
      },
      {
        name: "shelf",
        src: "./assets/furniture/entrance/shelf.png",
        desc: "Smells like freshly cut pine wood.",
        dims: {
          x: "640px",
          y: "50px",
          width: "350px",
          z: "3",
        },
      },
      {
        name: "darkstalker",
        src: "./assets/furniture/entrance/books/darkstalker.png",
        desc: "This book is titled Darkstalker by Tui T. Sutherland. It tells the tale of three young dragons, an unavoidable destiny, and the dangers of reality warping powers that comes at a terrible cost",
        dims: {
          x: "760px",
          y: "90px",
          width: "20px",
          z: "3",
        },
      },
      {
        name: "holes",
        src: "./assets/furniture/entrance/books/holes.png",
        desc: 'This book is titled "Holes" by Louis Sachar. It is a young adult novel about a kid who spends his summer at a juvenile detention center after he was falsely accused of theft. In that desert camp, all the boys are forced to dig holes as their punishment but pretty soon, there is more to it than meets the eye. This is a great book for anyone who loves mysteries, a heart-warming story, or that feeling of when everything clicks together.',
        dims: {
          x: "950px",
          y: "86px",
          width: "14px",
          z: "3",
        },
      },
      {
        name: "theJoyLuckClub",
        src: "./assets/furniture/entrance/books/holes.png",
        desc: 'This book is titled "The Joy Luck Club" by Amy Tan. It is a book made up of sixteen short stories about four Chinese Immigrant Mothers and their America-born daughters. Although the stories switches points of view frequently, they all interconnect and teach a lesson with a beautiful prose style.',
        dims: {
          x: "950px",
          y: "86px",
          width: "14px",
          z: "3",
        },
      },
      {
        name: "theJoyLuckClub",
        src: "./assets/furniture/entrance/books/joy-luck-club.png",
        desc: 'This book is titled "The Joy Luck Club" by Amy Tan. It is a book made up of sixteen short stories about four Chinese Immigrant Mothers and their America-born daughters. Although the stories switches points of view frequently, they all interconnect and teach a lesson with a beautiful prose style.',
        dims: {
          x: "680px",
          y: "414px",
          width: "14px",
          z: "3",
        },
      },
      {
        name: "rainScript",
        src: "./assets/furniture/entrance/books/rain-script.jpeg",
        desc: "There's not title on this one but it's a fanfiction piece about three friends spending time together on a rainy day. Skimming through the pages, the writing is mediocre at best and the plot diverges routinely. The story itself looks unfinished and the dates of publications for each chapters are spread extremely far apart. The last update has been forever ago and it seems like it may never recieve another update again——so typical of fanfictions.",
        dims: {
          x: "960px",
          y: "220px",
          width: "8px",
          z: "3",
        },
      },
      {
        name: "sleepScript",
        src: "./assets/furniture/entrance/books/sleep-script.png",
        desc: "It's a folder holding an audio drama script told in second person. The listener is stuck in an interdimensional realm and encounters a dream demon whose obliged to serve outsiders as a tour guide. It's very thin and there contains only a couple pages. With no title and little content, it may have been scaped.",
        dims: {
          x: "660px",
          y: "205px",
          width: "12px",
          z: "3",
        },
      },
      {
        name: "bookChronicle",
        src: "./assets/furniture/entrance/books/book-chronicle.png",
        desc: "It's stack of books",
        dims: {
          x: "800px",
          y: "398px",
          width: "120px",
          z: "3",
        },
      },
      {
        name: "succulent",
        src: "./assets/furniture/entrance/succulent.png",
        desc: "Touching the leaves, you know it's an artifical plant.",
        dims: {
          x: "760px",
          y: "210px",
          width: "50px",
          z: "3",
        },
      },
      {
        name: "cactus",
        src: "./assets/furniture/entrance/cactus.png",
        desc: "Carefully touching the cactus flesh, you connfirm that it's a REAL cactus.",
        dims: {
          x: "820px",
          y: "200px",
          width: "44px",
          z: "3",
        },
      },
      {
        name: "spiderWeb",
        src: "./assets/furniture/entrance/spider-web.png",
        desc: "It's a thick spider web.",
        dims: {
          x: "0px",
          y: "0px",
          width: "200px",
          z: "3",
        },
      },
      {
        name: "exitDoor",
        src: "./assets/wall/exit-door.png",
        desc: "The door which you came in from",
        dims: {
          x: "400px",
          y: "54px",
          width: "200px",
          z: 3,
        },
      },
      {
        name: "shoeRack",
        src: "./assets/furniture/entrance/shoe-rack.png",
        desc: "All the shoes are brand new and look unworn. The sizes from left to right are 8, 10, 5",
        dims: {
          x: "40px",
          y: "370px",
          width: "280px",
          z: 3,
        },
      },
      {
        name: "lockBox",
        src: "./assets/furniture/entrance/box.png",
        desc: "Surprise, surprise. It's locked. There's this hidden rule that if there isn't a locked container in plain sight, it's not a real escape room.",
        dims: {
          x: "700px",
          y: "307px",
          width: "100px",
          z: 3,
        },
        puzzle: {
          type: "item",
          isSolved: false,
          solveDescription:
            "The key fits perfectly into the lock and you open the box",
          afterDesc: "There's no more stuff in here. Look elsewhere",
          itemNeeded: "key2",
          solveFunction: () => {
            addItem("blueLightBulb");
          },
        },
      },
      {
        name: "key",
        isItem: true,
        src: "./assets/object/key.png",
        desc: "You've found a key!",
        dims: {
          x: "590px",
          y: "510px",
          width: "30px",
          z: 3,
        },
      },
    ],
  },
  lounge: {
    name: "lounge",
    isDark: false,
    icon: {
      src: "./assets/misc/icons/lounge-icon.png",
      x: "-160px",
      y: "220px",
    },
    wall: "./assets/wall/gray-wall.webp",
    floor: "./assets/floor/carpet-floor.jpg",
    divider: "./assets/floor/floor-divider.png",
    entities: [
      {
        name: "loungeChair",
        src: "./assets/furniture/lounge/lounge-chair.png",
        desc: "Cushy",
        dims: {
          x: "660px",
          y: "200px",
          width: "350px",
          z: "3",
        },
      },
      {
        name: "deltaruneArt",
        src: "./assets/wall/artwork/deltarune-framed.png",
        desc: "The power of fluffy boys and means girls shine within you!",
        dims: {
          x: "770px",
          y: "20px",
          width: "150px",
          z: "3",
        },
      },
      {
        name: "table",
        src: "./assets/furniture/lounge/table.png",
        desc: "It's covered in dust. The drawer is locked.",
        dims: {
          x: "80px",
          y: "290px",
          width: "300px",
          z: "3",
        },
        puzzle: {
          type: "item",
          isSolved: false,
          solveDescription:
            "The key fits perfectly into the lock and you open the box",
          afterDesc: "The drawer is already unlocked.",
          itemNeeded: "key",
          solveFunction: () => {
            addItem("battery");
          },
        },
      },
      {
        name: "window",
        src: "./assets/wall/window.png",
        desc: "The rain seems to have picked up",
        dims: {
          x: "380px",
          y: "40px",
          width: "300px",
          z: "2",
        },
      },
      {
        name: "rain",
        src: "./assets/wall/night-rain.gif",
        desc: "The rain seems to have picked up",
        dims: {
          x: "380px",
          y: "60px",
          width: "300px",
          z: "0",
        },
      },
      {
        name: "vase",
        src: "./assets/furniture/lounge/vase.png",
        desc: "There is not a single drop of water left inside",
        dims: {
          x: "115px",
          y: "150px",
          width: "160px",
          z: "5",
        },
        /*specialWrongItem: [
            {
              item: 'filledCup',
              desc: 'There's no reason to fill it up. The rose is already dead.'
            }
          ], */
      },
      {
        name: "deadRose",
        src: "./assets/furniture/lounge/dead-rose.png",
        desc: "It's completely dried up",
        dims: {
          x: "150px",
          y: "84px",
          width: "80px",
          z: "4",
        },
      },
      {
        name: "umbrellaStand",
        src: "./assets/furniture/lounge/umbrella-stand.png",
        desc: "There's a bunch of umbrellas here",
        dims: {
          x: "470px",
          y: "220px",
          width: "160px",
          z: "4",
        },
        puzzle: {
          type: "inspect",
          isSolved: false,
          solveDescription: "Dummy text",
          afterDesc: "You already got an umbrella.",
          solveFunction: () => {
            addItem("umbrella");
          },
        },
      },
      {
        name: "scissor",
        isItem: true,
        src: "./assets/object/scissor.png",
        desc: "You grab the scissor",
        dims: {
          x: "240px",
          y: "260px",
          width: "100px",
          z: 3,
        },
        combine: {
          requiredItem: "plush",
          newItem: "key2",
        },
      },
    ],
  },
  fireplace: {
    name: "fireplace",
    isDark: false,
    icon: {
      src: "./assets/misc/icons/fireplace-icon.png",
      x: "0px",
      y: "300px",
    },
    wall: "./assets/wall/green-wall.png",
    floor: "./assets/floor/fireplace-carpet-floor.jpg",
    divider: "./assets/floor/floor-divider.png",
    entities: [
      {
        name: "chimney",
        src: "./assets/furniture/fireplace/chimney.png",
        desc: "A fat white-bearded man dressed in red is rumored to enter houses through these.",
        dims: {
          x: "150px",
          y: "0px",
          width: "192px",
          z: "3",
        },
      },
      {
        name: "fireplace",
        src: "./assets/furniture/fireplace/fireplace.png",
        desc: "Sooty",
        dims: {
          x: "60px",
          y: "230px",
          width: "380px",
          z: "3",
        },
      },
      {
        name: "grandfatherClock",
        src: "./assets/furniture/fireplace/grandfather-clock.png",
        desc: "It's an old grandfather clock. There's dials on the side to adjust the minute and hour.",
        dims: {
          x: "480px",
          y: "160px",
          width: "100px",
          z: "3",
        },
        puzzle: {
          type: "interact",
          isSolved: false,
          solveDescription:
            "You take a closer look at the grandfather clock. There's two dials on the side for adjusting the hour and minute.",
          afterDesc: "After testing",
          solveFunction: () => {
            openMenu("clock");
          },
        },
      },
      {
        name: "picture1",
        src: "./assets/wall/artwork/anxiety.png",
        desc: 'This piece is titled "Anxiety". The captions below says: "Only you and you alone can conquer yourself"',
        dims: {
          x: "5px",
          y: "10px",
          width: "140px",
          z: "3",
        },
      },
      {
        name: "picture2",
        src: "./assets/wall/artwork/monarch.png",
        desc: 'This piece is titled "Monarch". The captions below says: "A piece of art dedicated to his majesty himself"',
        dims: {
          x: "620px",
          y: "20px",
          width: "200px",
          z: "3",
        },
      },
      {
        name: "picture3",
        src: "./assets/wall/artwork/arcade.png",
        desc: 'This piece is titled "Arcade". It features two familar friends.',
        dims: {
          x: "400px",
          y: "10px",
          width: "160px",
          z: "3",
        },
      },
      {
        name: "elevatedShelf",
        src: "./assets/furniture/fireplace/elevated-shelf.png",
        desc: "What an elevated Design!",
        dims: {
          x: "630px",
          y: "150px",
          width: "350px",
          z: "3",
        },
      },
      {
        name: "emptyGlass",
        isItem: true,
        src: "./assets/object/empty-glass.png",
        desc: "You've obtained an empty glass!",
        dims: {
          x: "790px",
          y: "200px",
          width: "50px",
          z: 3,
        },
      },
    ],
  },
  courtyard: {
    name: "courtyard",
    isDark: false,
    icon: {
      src: "./assets/misc/icons/courtyard-icon.png",
      x: "160px",
      y: "200px",
    },
    wall: "./assets/wall/courtyard-wall.jpg",
    floor: "./assets/floor/tile-floor.png",
    divider: "./assets/floor/floor-divider.png",
    entities: [
      {
        name: "frogStatue",
        src: "./assets/furniture/courtyard/frog-statue.png",
        desc: "It's a statue of a frog. There's something gleaming inside its throat but your hands are too big to reach inside",
        dims: {
          x: "550px",
          y: "420px",
          width: "150px",
          z: "4",
        },
        puzzle: {
          type: "item",
          isSolved: false,
          solveDescription:
            "You pour the water into the frog's mouth and the water raises the object inside. You grab the quarter inside. Coin Obtained!",
          afterDesc: "It's a frog statue",
          itemNeeded: "filledGlass",
          solveFunction: () => {
            addItem("coin");
          },
        },
      },
      {
        name: "bush1",
        src: "./assets/furniture/courtyard/long-bush.png",
        desc: "It's a bushy bush",
        dims: {
          x: "-30px",
          y: "310px",
          width: "600px",
          z: "3",
        },
      },
      {
        name: "dandelion",
        src: "./assets/furniture/courtyard/dandelions.png",
        desc: "Add description later",
        dims: {
          x: "500px",
          y: "460px",
          width: "40px",
          z: "5",
        },
      },
      {
        name: "bush2",
        src: "./assets/furniture/courtyard/long-bush.png",
        desc: "It's a bushy bush",
        dims: {
          x: "500px",
          y: "310px",
          width: "600px",
          z: "3",
        },
      },
      {
        name: "gnome",
        src: "./assets/furniture/courtyard/gnome.webp",
        desc: "Okay, tell me that isn't creepy looking",
        dims: {
          x: "160px",
          y: "340px",
          width: "80px",
          z: "3",
        },
      },
      {
        name: "blueFlower",
        src: "./assets/furniture/courtyard/blue-flower.png",
        desc: "Very healthy looking",
        dims: {
          x: "-75px",
          y: "442px",
          width: "320px",
          z: "3",
        },
      },
      {
        name: "pinkFlower",
        src: "./assets/furniture/courtyard/pink-flower.png",
        desc: "It's some pretty flowers",
        dims: {
          x: "780px",
          y: "440px",
          width: "370px",
          z: "4",
        },
      },
      {
        name: "toolShed",
        src: "./assets/furniture/courtyard/toolShed.png",
        desc: "There's definitely something you can use in the tool shed but you'll to solve the lock",
        dims: {
          x: "750px",
          y: "70px",
          width: "200px",
          z: "3",
        },
        puzzle: {
          type: "interact",
          isSolved: false,
          solveDescription:
            "There's definitely something you can use in the tool shed but you'll to solve the lock",
          finishDescription: "With a click, the lock drops to the ground. There's fertilizer, soil, watering cans, and a bunch of gardening equipment, but only the shovel seems useful",
          afterDesc: "There's nothing of interest now",
          solveFunction: () => {
            if (player.shedPuzzle.isSolved) {
              //displayInspect("toolShed", 100);
            } else {
              openMenu("shedLock");
            }
          },
        },
      },
      {
        name: "fountain",
        src: "./assets/furniture/courtyard/fountain.png",
        desc: "There's a bunch of dead flies in the fountain. Gross.",
        dims: {
          x: "260px",
          y: "120px",
          width: "300px",
          z: "3",
        },
        puzzle: {
          type: "item",
          isSolved: false,
          solveDescription: "You fill up your cup with the fountain.",
          afterDesc: "It's still gross",
          itemNeeded: "emptyGlass",
          solveFunction: () => {
            addItem("filledGlass");
          },
        },
      },
    ],
  },
  attic: {
    name: "attic",
    isDark: true,
    icon: {
      src: "./assets/misc/icons/attic-icon.png",
      x: "-200px",
      y: "80px",
    },
    wall: "./assets/wall/wood-wall.jpg",
    floor: "./assets/floor/attic-floor.jpg",
    divider: "./assets/floor/floor-divider.png",
    entities: [
      {
        name: "hangingLight",
        src: "./assets/wall/hanging-light.png",
        desc: "The bulb is completely burned out.",
        dims: {
          x: "500px",
          y: "0px",
          width: "50px",
          z: "5",
        },
        puzzle: {
          type: "item",
          isSolved: false,
          solveDescription:
            "You replace the burned out lightbulb with a new one. Try turning on the switch now",
          afterDesc: "It's a new light bulb.",
          itemNeeded: "blueLightBulb",
          solveImg: "./assets/wall/lit-blue-hanging-light.png",
          solveFunction: () => {
            player.flashlight.color = "rgba(30, 30, 255, 0.5)";
            player.flashlight.domRef.style.backgroundImage = `radial-gradient(circle 5em at ${player.mouseX}px ${player.mouseY}px, rgba(0, 0, 0, 0.2), ${player.flashlight.color})`;
            displayInspect(
              "You replace the burned out lightbulb with a new one.",
              100
            );
            changeRoomImg("packingBox", "./assets/animation/packing-box.gif");
            createSingleRoomObject("goggle", 9050);
          },
        },
      },
      {
        name: "stool",
        src: "./assets/furniture/attic/stool.png",
        desc: "Stool",
        dims: {
          x: "800px",
          y: "300px",
          width: "170px",
          z: "3",
        },
      },
      {
        name: "packingBox",
        src: "./assets/furniture/attic/packing-box.png",
        desc: "The box is filled with folders, books, and papers. With a quick skim, none of them seem particularly useful",
        dims: {
          x: "20px",
          y: "220px",
          width: "400px",
          z: "3",
        },
      },
      {
        name: "singlePackingBox",
        src: "./assets/furniture/attic//single-packing-box.png",
        desc: "There's a slipped of paper inside the box.",
        dims: {
          x: "660px",
          y: "420px",
          width: "140px",
          z: "3",
        },
        puzzle: {
          type: "inspect",
          isSolved: false,
          solveDescription: "There's a slip of paper sticking out.",
          afterDesc: "There's nothing else of interest now",
          solveFunction: () => {
            addItem("passwordPaper");
          },
        },
      },
      {
        name: "craneMachine",
        src: "./assets/furniture/attic//crane-machine.png",
        desc: "Gambling: Children's edition.",
        dims: {
          x: "400px",
          y: "120px",
          width: "270px",
          z: "3",
        },
        puzzle: {
          type: "item",
          isSolved: false,
          solveDescription:
            "Congrats! Against all odds and due to plot armor, you've obtained a plush",
          afterDesc: "No more. That's enough",
          itemNeeded: "coin",
          solveFunction: () => {
            addItem("plush");
          },
        },
      },
      {
        name: "picture-frame-5",
        src: "./assets/wall/artwork/pizzaria.JPG",
        desc: 'This work is titled "Pizzeria". The caption below says: "I always come back!"',
        dims: {
          x: "680px",
          y: "20px",
          width: "300px",
          z: "3",
        },
      },
      {
        name: "light-switch",
        src: "./assets/wall/light-switch.png",
        desc: "Flicking this does nothing.",
        dims: {
          x: "30px",
          y: "220px",
          width: "40px",
          z: "3",
        },
      },
    ],
  },
  atticDream: {
    name: "atticDream",
    isDream: true,
    isDark: false,
    icon: {
      src: "./assets/misc/icons/dream-attic-icon.png",
      x: "-200px",
      y: "80px",
    },
    wall: "./assets/furniture/atticDream/wood-wall.jpg",
    floor: "./assets/furniture/atticDream/attic-floor.jpg",
    divider: "./assets/floor/floor-divider.png",
    entities: [
      {
        name: "hangingLightDream",
        src: "./assets/furniture/atticDream/blue-light-bulb.gif",
        desc: "I think it's looking at you.",
        dims: {
          x: "500px",
          y: "0px",
          width: "50px",
          z: "5",
        },
      },
      {
        name: "craw-mark",
        src: "./assets/furniture/atticDream/claw-mark.png",
        desc: "It's a giant claw mark",
        dims: {
          x: "700px",
          y: "180px",
          width: "90px",
          z: "5",
        },
      },
      {
        name: "stoolDream",
        src: "./assets/furniture/atticDream/toadStool.png",
        desc: "It's a toad-stool",
        dims: {
          x: "800px",
          y: "300px",
          width: "170px",
          z: "3",
        },
      },
      {
        name: "packingBoxDream",
        src: "./assets/furniture/atticDream/packing-box.png",
        desc: "Most of the boxes are taped shut. However, a few of them were opened. It's empty but there's some black goo left behind",
        dims: {
          x: "20px",
          y: "220px",
          width: "400px",
          z: "3",
        },
        puzzle: {
          type: "inspect",
          isSolved: false,
          solveDescription: "There's a slip of paper sticking out.",
          afterDesc: "There's nothing else of interest now",
          solveFunction: () => {
            addItem("goop");
          },
        },
      },
      {
        name: "craneMachine",
        src: "./assets/furniture/atticDream/crane-machine.gif",
        desc: "There's something squirming inside.",
        dims: {
          x: "400px",
          y: "120px",
          width: "270px",
          z: "3",
        },
      },
    ],
  },
  bedroom: {
    name: "bedroom",
    isDark: false,
    icon: {
      src: "./assets/misc/icons/bedroom-icon.PNG",
      x: "0px",
      y: "200px",
    },
    wall: "./assets/wall/bedroom-wall.png",
    floor: "./assets/floor/bedroom-floor.png",
    divider: "./assets/floor/floor-divider.png",
    entities: [
      {
        name: "bed",
        src: "./assets/furniture/bedroom/bed.png",
        desc: "The sheets and pillows are folded and placed neatly",
        dims: {
          x: "300px",
          y: "300px",
          width: "400px",
          z: "3",
        },
      },
      {
        name: "nightstand",
        src: "./assets/furniture/bedroom/nightstand.png",
        desc: "There's a bunch of socks, clothings, and dust inside. A paper sticks out and you pull it out",
        dims: {
          x: "80px",
          y: "360px",
          width: "200px",
          z: "3",
        },
        puzzle: {
          type: "inspect",
          isSolved: false,
          solveDescription: "There's a slip of paper sticking out.",
          afterDesc: "Nothing else worth taking",
          solveFunction: () => {
            addItem("plushPaper");
          },
        },
      },
      {
        name: "lamp",
        src: "./assets/furniture/bedroom/night-light.png",
        desc: "It's a lamp",
        dims: {
          x: "130px",
          y: "210px",
          width: "100px",
          z: "3",
        },
      },
      {
        name: "desk",
        src: "./assets/furniture/bedroom/desk.png",
        desc: "This is a desk. The chair is missing for unknown reasons which absolutely has nothing to do with blocking the computer",
        dims: {
          x: "720px",
          y: "370px",
          width: "230px",
          z: "3",
        },
      },
      {
        name: "mouse",
        src: "./assets/furniture/bedroom/mouse.png",
        desc: "It's a mouse",
        dims: {
          x: "885px",
          y: "355px",
          width: "30px",
          z: "3",
        },
      },
      {
        name: "computer",
        src: "./assets/furniture/bedroom/computer.png",
        desc: "It's a really old computer",
        dims: {
          x: "770px",
          y: "255px",
          width: "110px",
          z: "3",
        },
        puzzle: {
          type: "interact",
          isSolved: false,
          solveDescription: "You power up the old computer.",
          solveFunction: () => {
            openMenu("computer");
          },
        },
      },
      {
        name: "elkHead",
        src: "./assets/wall/elk-head.png",
        desc: "It's the head of an elk.",
        dims: {
          x: "400px",
          y: "20px",
          width: "200px",
          z: "3",
        },
      },
    ],
  },
  graveyard: {
    name: 'graveyard',
    isDream: true,
    isDark: false,
    icon: {
      src: "./assets/misc/icons/graveyardIcon.png",
      x: "160px",
      y: "200px",
    },
    wall: './assets/wall/outside-sky.png',
    floor: './assets/floor/grass-floor.png',
    divider: "./assets/floor/floor-divider.png",
    entities: [
      {
        name: 'grave1',
        src: './assets/furniture/graveyard/grave1.png',
        desc: "RIP Jeff. Died full of himself",
        dims: {
          x: "840px",
          y: "370px",
          width: "150px",
          z: "3",
        }
      },
      {
        name: 'grave2',
        src: './assets/furniture/graveyard/grave2.png',
        desc: "Here lies Avery. Crushed by a vending machine",
        dims: {
          x: "700px",
          y: "340px",
          width: "150px",
          z: "3",
        }
      },
      {
        name: 'earthMound',
        src: './assets/furniture/graveyard/earth-mound.png',
        desc: "It looks like something was buried here",
        dims: {
          x: "730px",
          y: "550px",
          width: "80px",
          z: "3",
        },
        puzzle: {
          type: "item",
          isSolved: false,
          solveDescription:
            "With the shovel, you dig the object out. Whenever it belonged to, they probably don't need it anymore",
          afterDesc: "It's an empty hole. The empty hole you dug. The hole that's empty because you dug.",
          itemNeeded: "shovel",
          solveFunction: () => {
            addItem("crowbar");
          },
        },
      },
      {
        name: 'fish-fountain',
        src: './assets/animation/fountain.gif',
        desc: "Splish Splash. Built in honor of a cat named Fluffy.",
        dims: {
          x: "160px",
          y: "140px",
          width: "250px",
          z: "3",
        }
      },
      {
        name: 'cat-grave1',
        src: './assets/furniture/graveyard/cat-graves/cat-grave1.png',
        desc: "In memory of Fluffy. Killed by curiosity",
        dims: {
          x: "90px",
          y: "370px",
          width: "80px",
          z: "3",
        }
      },
      {
        name: 'cat-grave2',
        src: './assets/furniture/graveyard/cat-graves/cat-grave2.png',
        desc: "Fluffy hit the ground too hard",
        dims: {
          x: "200px",
          y: "450px",
          width: "80px",
          z: "3",
        }
      },
      {
        name: 'cat-grave3',
        src: './assets/furniture/graveyard/cat-graves/cat-grave3.png',
        desc: "In memory of Fluffy. Had an accident with the neighborhood dog",
        dims: {
          x: "610px",
          y: "480px",
          width: "80px",
          z: "3",
        }
      },
      {
        name: 'cat-grave4',
        src: './assets/furniture/graveyard/cat-graves/cat-grave4.png',
        desc: "Fluffy discovered gravity",
        dims: {
          x: "510px",
          y: "440px",
          width: "80px",
          z: "3",
        }
      },
      {
        name: 'cat-grave5',
        src: './assets/furniture/graveyard/cat-graves/cat-grave5.png',
        desc: "In memory of Fluffy. Became liquid and couldn't turn back",
        dims: {
          x: "420px",
          y: "370px",
          width: "80px",
          z: "3",
        }
      },
      {
        name: 'cat-grave6',
        src: './assets/furniture/graveyard/cat-graves/cat-grave6.png',
        desc: "In memory of Fluffy. Accidentally exploded",
        dims: {
          x: "10px",
          y: "450px",
          width: "80px",
          z: "3",
        }
      },
      {
        name: 'cat-grave7',
        src: './assets/furniture/graveyard/cat-graves/cat-grave7.png',
        desc: "In memory of Fluffy. Did not land on her feet",
        dims: {
          x: "310px",
          y: "470px",
          width: "80px",
          z: "3",
        }
      },
      {
        name: 'cat-grave8',
        src: './assets/furniture/graveyard/cat-graves/cat-grave8.png',
        desc: "In memory of Fluffy. Had too much catnip",
        dims: {
          x: "120px",
          y: "480px",
          width: "80px",
          z: "3",
        }
      },
      {
        name: 'cat-grave9',
        src: './assets/furniture/graveyard/cat-graves/cat-grave9.png',
        desc: "In memory of Fluffy. Failed world domination",
        dims: {
          x: "400px",
          y: "480px",
          width: "80px",
          z: "3",
        }
      },
    ]
  },
  basement: {
    name: 'basement',
    isDream: true,
    isDark: false,
    icon: {
      "src":'./assets/misc/icons/basement-icon.png',
      x: "0px",
      y: "200px",
    },
    wall: './assets/wall/stone-wall.png',
    floor: './assets/floor/stone-floor.png',
    divider: "./assets/floor/floor-divider.png",
    entities: [
      {
        name: 'nailedDoor',
        src: './assets/furniture/hallway/exit-door.png',
        desc: "Something glows green on the top window but unless you remove the boards, you won't be able to go inside.",
        dims: {
          x: "450px",
          y: "120px",
          width: "170px",
          z: "3",
        },
        puzzle: {
          type: "item",
          isSolved: false,
          solveDescription:
            "The key fits perfectly into the lock and you open the box",
          afterDesc: "There's no more stuff in here. Look elsewhere",
          itemNeeded: "crowbar",
          solveFunction: () => {
            displayInspect("The demo ends here. Otherwise this door would open and unlock a new location.", 100);
          },
        },
      },
      {
        name: 'acidHole',
        src: './assets/furniture/hallway/bottomless-pit.png',
        desc: "Some acid melted through the floor and now, you can't see the end.",
        dims: {
          x: "800px",
          y: "500px",
          width: "170px",
          z: "3",
        }
      },
      {
        name: 'biohazardSign',
        src: './assets/furniture/hallway/biohazard.png',
        desc: "Haha, I wonder what this sign means",
        dims: {
          x: "320px",
          y: "210px",
          width: "100px",
          z: "3",
        }
      },
      {
        name: 'blackSpiderWeb',
        src: './assets/furniture/hallway/spider-web.png',
        desc: "It's a spider web",
        dims: {
          x: "0px",
          y: "0px",
          width: "190px",
          z: "3",
        }
      },
      {
        name: 'comedian',
        src: './assets/wall/artwork/comedian-framed.png',
        desc: "Potassium. This art piece sold for $120,000",
        dims: {
          x: "800px",
          y: "200px",
          width: "130px",
          z: "3",
        }
      },
    ]
  },
  laboratory: {
    name: 'laboratory',
    isDream: true,
    isDark: false,
    icon: {
      "src":'./assets/misc/icons/plant-room-icon.png',
      x: "10px",
      y: "350px",
    },
    wall: './assets/wall/stone-wall.png',
    floor: './assets/floor/stone-floor.png',
    divider: "./assets/floor/floor-divider.png",
    entities: [
      {
        name: 'labTable',
        src: './assets/furniture/plantRoom/labTable.png',
        desc: "There's a crank in the bottom cabinet",
        dims: {
          x: "10px",
          y: "300px",
          width: "500px",
          z: "3",
        }
      },
      {
        name: 'labCabinet',
        src: './assets/furniture/plantRoom/labCabinet.png',
        desc: "There's a crank in the bottom cabinet",
        dims: {
          x: "10px",
          y: "30px",
          width: "500px",
          z: "3",
        }
      },
      {
        name: 'chomper',
        src: './assets/furniture/plantRoom/chomper.png',
        desc: "Familar plant",
        dims: {
          x: "400px",
          y: "145px",
          width: "130px",
          z: "3",
        }
      },
      {
        name: 'mouthPlant',
        src: './assets/furniture/plantRoom/mouthPlant.png',
        desc: "For safety reasons, you do not stick your fingers inside",
        dims: {
          x: "200px",
          y: "160px",
          width: "130px",
          z: "3",
        }
      },
      {
        name: 'roots',
        src: './assets/furniture/plantRoom/roots.png',
        desc: "A bunch of roots have grown through the ceilings",
        dims: {
          x: "700px",
          y: "0px",
          width: "200px",
          z: "3",
        }
      },
      {
        name: 'mold',
        src: './assets/furniture/plantRoom/mold.png',
        desc: "A colony of mold",
        dims: {
          x: "800px",
          y: "230px",
          width: "200px",
          z: "2",
        }
      },
      {
        name: 'mouseTrap',
        src: './assets/furniture/plantRoom/mouseTrap.png',
        desc: "A giant oversized mouse trap. Something has already triggered it and ate the cheese, leaving behind only a few crumbs",
        dims: {
          x: "550px",
          y: "540px",
          width: "200px",
          z: "3",
        }
      },
      {
        name: 'knife',
        isItem: true,
        src: './assets/furniture/plantRoom/knife.png',
        desc: "You grab the knife on the counter",
        dims: {
          x: "100px",
          y: "260px",
          width: "25px",
          z: "3",
          rotation: "-90"
        },
      },
      {
        name: 'cauldron',
        src: './assets/furniture/plantRoom/cauldron.gif',
        desc: "How long has this been here?",
        dims: {
          x: "530px",
          y: "230px",
          width: "300px",
          z: "3",
        },
      },
    ]
  },
  heart: {
    name: 'heart',
    isDream: true,
    isDark: false,
    icon: {
      "src":'./assets/misc/icons/crystal-icon.png',
      'x': "-200px",
      'y': "300px",
    },
    wall: './assets/wall/stone-wall.png',
    floor: './assets/floor/stone-floor.png',
    divider: "./assets/floor/floor-divider.png",
    entities: [
      {
        name: 'gem',
        isItem: true,
        src: './assets/misc/icons/crystal-icon.png',
        desc: "There it is! You've gotten what you've came for. It's time to leave now.",
        dims: {
          x: "450px",
          y: "60px",
          width: "200px",
          z: "3",
        }
      },
      {
        name: 'purplePillar',
        src: './assets/furniture/heart/gemPillar.png',
        desc: "Made to hold something.",
        dims: {
          x: "450px",
          y: "230px",
          width: "200px",
          z: "2",
        }
      },
      {
        name: 'torch6',
        src: './assets/furniture/heart/torch.png',
        desc: "A torch...With the right tools, you could ignite it",
        dims: {
          x: "280px",
          y: "430px",
          width: "30px",
          z: "2",
        }
      },
      {
        name: 'torch1',
        src: './assets/furniture/heart/torch.png',
        desc: "A torch...With the right tools, you could ignite it",
        dims: {
          x: "360px",
          y: "400px",
          width: "30px",
          z: "2",
        }
      },
      {
        name: 'torch8',
        src: './assets/furniture/heart/torch.png',
        desc: "A torch...With the right tools, you could ignite it",
        dims: {
          x: "440px",
          y: "430px",
          width: "30px",
          z: "2",
        }
      },
      {
        name: 'torch2',
        src: './assets/furniture/heart/torch.png',
        desc: "A torch...With the right tools, you could ignite it",
        dims: {
          x: "520px",
          y: "400px",
          width: "30px",
          z: "2",
        }
      },
      {
        name: 'torch7',
        src: './assets/furniture/heart/torch.png',
        desc: "A torch...With the right tools, you could ignite it",
        dims: {
          x: "610px",
          y: "440px",
          width: "30px",
          z: "2",
        }
      },
      {
        name: 'torch9',
        src: './assets/furniture/heart/torch.png',
        desc: "A torch...With the right tools, you could ignite it",
        dims: {
          x: "690px",
          y: "400px",
          width: "30px",
          z: "2",
        }
      },
      
    ]
  },
  //insert new rooms here
};

export { rooms };

/*
entrance: {
    name: 'graveyard',
    isDream: true,
    isDark: false,
    icon: {
      "src":'./assets/misc/icons/exit-icon.jpg',
      'x': "0px",
      'y': "100px",
    },
    wall: './assets/wall/wood-wall.jpg',
    floor: './assets/floor/wood-floor.png',
    divider: "./assets/floor/floor-divider.png",
    entities: [
      {
        name: 'replace',
        src: './assets/furniture/graveyard/earth-mound.png',
        desc: "Replace",
        dims: {
          x: "640px",
          y: "90px",
          width: "350px",
          z: "3",
        }
      },
    ]
  },
*/
