
////////////////////////////////////////////////////////////////////////////////////////////
// solution to find which is larger than 20 and also not restaurant pushes into new array.

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations (stations) {
  const final = [];

  for (const station of stations) {
    const num = station[1];
    if (num >= 20) {
      
      const venue = station[2];

      if ( venue === 'school' || venue === 'community centre') {
        final.push(station[0]);
      }
       
    }

  }
  return final;
}



console.log(chooseStations(stations));

////////////////////////////////////////////////////////////////////////////////////////
//// navigating steps on x - y grid
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


function finalPosition (moves) {
  let x = 0;
  let y = 0;
  let result = [x, y];

  for (let i = 0; i < moves.length; i++) {
  if (moves[i] === 'east') {
    x++;     
  } else if (moves[i] === 'west') {
    x--;
  } else if (moves[i] === 'north') {
    y++;
  } else if (moves[i] === 'south') {
    y--;
  }
  
  }
  result = [x, y]
  return result;
  }
  
finalPosition(moves);

//////////////////////////////////////////////////////////////////////////////////
/////// array range not solved yet!!!!!

let final = [];
function range (start, end, step) {
  if (start >= 0) {
  
  for (let i = start; i <= end; i += step) {
  final.push(i)
  } }
  
  else {
    final = [];
    }
    
    return final
  } 




console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

/////////////////////////////////////////////////////////
///// last index of array
function lastIndexOf(array, num){
 return array.lastIndexOf(num)
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1))

//////////////////////////////////////////////////////
// array concat
function concat(a, b) {
  return a.concat(b)
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);


////////////////////////////////////////////////////////
// codeville garbage
const smartGarbage = function (trash, bins) {
  let numCount = bins;
  if (trash === 'waste') {
    numCount.waste++;
  } else if (trash === 'recycling') {
    numCount.recycling++;
  } else if (trash === 'compost') {
    numCount.compost++;
  }

return numCount; 
}


smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 })

///////////////////////////////////////////////
// Driving mayor daisy
const carPassing = function (cars, speed) {
  cars.push({time: Date.now(),
                speed: speed
  });

  
  return cars;
}


///////////////////////////////////////////////////////
//// vegetable picker based on metric returning 
const judgeVegetable = (veggies, metric) => {
  const vegSlice = veggies.slice();
  return vegSlice.sort((a, b) => b[metric] - a[metric])[0].submitter;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

judgeVegetable(vegetables, metric)


////////////////////////////////////////////////////////////////
///////// concatinating an array taken from an html object(array)
///////// using class name can change to either id or tagname 


///html example///

{/* <h2>
  List of People:
</h2>

<ul class='people'>
  <li class='name'>
    Clara
  </li>
  <li class='name'>
    James
  </li>
  <li class='name'>
    Sara
  </li>
</ul> */}

/////////////////

let elm = [];
let names = [];
elm = document.getElementsByClassName("name");

for (let i = 0; i < elm.length; i++){
  names.push(" " + elm[i].innerText);
}


alert(names);


/////////////////////////////////////////////////////////////////
////////////// setting width change intervals using setTimeout


let timeOut = document.getElementById('lhl-logo'); 
timeOut.width = "200"

 const timerReSize = function (number) {
  timeOut.width = number;
}


setTimeout(timerReSize, 20000, '400');


////////////////////////////////////////////////////////////
////// changing inner html

const elm = document.getElementById('info');
elm.innerHTML = 'Javascript Rock!';

//////////////////////////////////////////////////////////
///////////  setting an attribute that doesnt exist yet.

document.getElementById('name').setAttribute('placeholder', 'I am actually a place setting HAHAHAHA');