
////////////////////////////////////////////////////////////////////////////////////////////
// solution to find which is larger than 20 and also not restaurant pushes into new array.

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations(stations) {
  const final = [];

  for (const station of stations) {
    const num = station[1];
    if (num >= 20) {

      const venue = station[2];

      if (venue === 'school' || venue === 'community centre') {
        final.push(station[0]);
      }

    }

  }
  return final;
}



console.log(chooseStations(stations));

////////////////////////////////////////////////////////////////////////////////////////
//// navigating steps on x - y grid
const directions = ['north', 'north', 'west', 'west', 'north', 'east', 'north']


function finalPosition(directions) {
  let x = 0;
  let y = 0;
  let result = [x, y];

  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === 'east') {
      x++;
    } else if (directions[i] === 'west') {
      x--;
    } else if (directions[i] === 'north') {
      y++;
    } else if (directions[i] === 'south') {
      y--;
    }

  }
  result = [x, y]
  return result;
}

finalPosition(directions);

//////////////////////////////////////////////////////////////////////////////////
/////// array range (forgot if statments to return if params were undefined)




function range(start, end, step) {
  const final = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return [];
  } else {
    for (let i = start; i <= end; i += step) {
      final.push(i);
    }
  }

  return final;
}




console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-9, 3, 3));




/////////////////////////////////////////////////////////
///// last index of array
function lastIndexOf(array, num) {
  return array.lastIndexOf(num)
}


console.log(lastIndexOf([0, 1, 4, 1, 2], 1))

//////////////////////////////////////////////////////
// array concat
function concat(a, b) {
  return a.concat(b)
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);


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
  cars.push({
    time: Date.now(),
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

for (let i = 0; i < elm.length; i++) {
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


/////////////////////////////////////////////
////////// kata 1 sort an array by interger and find its 2 last indexes and add them (highest interger)


const sumLargestNumbers = function (data) {
  let finalSolution = [];

  const sorting = data.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  })

  finalSolution = sorting;
  let finalSolutionOne = sorting[sorting.length - 1];
  let finalSolutionTwo = sorting[sorting.length - 2];
  return finalSolutionOne + finalSolutionTwo;

}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


///////////////////////////////////////////////////////
////////////////// kata 2 sorting by even or odd then summing those even or odd numbers

const conditionalSum = function (values, condition) {
  // if statment to check even or odd
  // loop and add based on even or odd

  let newArr = [];
  let finalArr = 0;


  if (condition === 'even') {
    for (i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        newArr.push(values[i])
      }
    }
  } else if (condition === 'odd') {
    for (i = 0; i < values.length; i++) {
      if (values[i] % 2 === 1) {
        newArr.push(values[i])
      }
    }

  }

  ////////sum results
  for (let i = 0; i < newArr.length; i++) {
    finalArr += newArr[i];
  }

  return finalArr
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

////////////////////////////////////////////////////////
/////// kata 3


// Possible solution but found easier shorter way :)
// let num = 0;
// const numberOfVowels = function(data) {
//   for (let i= 0; i < data.length; i++) {
//     if (i === 'a' || i === 'e' || i === 'i') {
//       num += 1;
//     } else {
//       num += 0
//     }

//   }
//   return num
// };


let num;
const numberOfVowels = function (data) {
  const vowels = /[A,E,I,O,U]/gi;
  num = data.match(vowels)
  return num.length
}


console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));


//////////////////////////////////////////////////////
/////// kata 4
let sorting = [];
const instructorWithLongestName = function (instructors) {

  instructors.sort(function compare(a, b) {
    if (a.name.length < b.name.length) {
      return -1;
    }
    if (a.name.length > b.name.length) {
      return 1;
    }
    return 0;
  })

  return instructors.pop();
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));


///////////////////////////////////////////////////////
//////// kata 5 was having a hard time 
////////getting the loop to commit the characters to a new 
////////string and use splice to change the spaces into %20


const urlEncode = function (text) {
  // loop through String
  let newArr = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newArr = newArr + '%20';
    } else {
      newArr = newArr + text[i]
    }
  }
  return newArr
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


////////////////////////////////////////////////
///////// kata 6

const whereCanIPark = function (spots, vehicle) {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {

      if (vehicle === 'regular') {
        if (spots[x][y] === 'R') {
          return [x, y]
        }
      } else if (vehicle === 'small') {
        if (spots[x][y] === 'S' || spots[x][y] === 'R') {
          return [x, y]
        }
      } else if (vehicle === 'motorcycle') {
        if (spots[x][y] === 'S' || spots[x][y] === 'R' || spots[x][y] === 'M') {
          return [x, y]
        }
      } else {
        return false;
      }



    }

  }

};





console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))




////////////////////////////////////////////////
/////////// kata 7

const checkAir = function (samples, threshold) {
  const length = samples.length
  let answer = 0;
  for (let i = 0; i < length; i++) {
    if (samples[i] === 'dirty') {
      answer += 1;
    }



  }
  //console.log(answer)
  if (answer / length > threshold) {
    return "polluted";
  } else {
    return "clean";
  }
  //get number of total index
  // divide number of count by index 
  // if higher than threshold then polluted if not clean 
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))


/////////////////////////////////////////////
///// loopy lighthouse 1


for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (i % 3 === 0) {
    console.log('Loopy');
  } else if (i % 4 === 0) {
    console.log('Lighthouse');
  } else {

    console.log(i);
  }
}


//////////////////////////////////////////////
/////////// loopy lighthouse 2
// Wrote it to store in an array but the requirement was 
// seperate logs decided to keep the code for array method 
// but commeneted it out.

function loopyLighthouse(range) {
  //  const newArr = [];
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % 2 === 0 && i % 5 === 0 || i % 10 === 0) {
      //    newArr.push('BattyBeacon');
      console.log('BattyBeacon');
    } else if (i % 2 === 0) {
      //    newArr.push('Batty');
      console.log('Batty');
    } else if (i % 5 === 0) {
      //    newArr.push('Beacon');
      console.log('Beacon');
    } else {
      //    newArr.push(i);
      console.log(i);
    }
  }
  //console.log(newArr);
}

loopyLighthouse([15, 90]);


////////////////////////////////////////////////
///////// merge array then sort
function merge(a, b) {
  const mergedArr = a.concat(b)
  const sortedArr = mergedArr.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  })
  return sortedArr;

}




console.log(merge([4, 5, 6], [1, 2, 3, 4]))
console.log(merge([4], [2, 5, 8]))
console.log(merge([1, 2, 6], []))


////////////////////////////////////////////////////
/////// kata 6 stretch

const repeatNumbers = function (data) {
  let newArr = [[],];
  let innerArr = [];

  for (let i = 0; i < data.length; i++) {

    for (let j = 1; j <= data[i][1]; j++) {

      if (j === data[i][1]) {
        innerArr.push(data[i][0] + ', ')
      } else {
        innerArr.push(data[i][0])
      }
    }
  }
  newArr = innerArr.join('')
  return newArr
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));



///////////////////////////////////////////////////////
//////// kata 7 stretch camelCase converter


const camelCase = function (input) {
  // for loop to go through the string
  let newStr = '';

  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === ' ') {
      newStr += (input.charAt(i + 1).toUpperCase());
      i++;
    } else {
      newStr += input.charAt(i)
    }
  }


  return newStr;

};


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

//////////////////////////////////////////////////////
//////// kata 8 multiplication tables stretch

const multiplicationTable = function (maxValue) {
  let rowCounter = 0;
  let newLine = 0;
  // // nested for loop iterating till max value on both. nested
  //  loop takes starting position of previous loop us a counter
  //   variable with 1 added each time and nested loop takes count 
  // from row # to iterate by that ammount maxValue times

  for (let i = 0; i < maxValue; i++) {
    rowCounter += 1;

    for (let j = rowCounter; j <= maxValue * rowCounter; j += rowCounter) {
      newLine += [j];
    }
    newLine += '\n'
  }
  return newLine;
};


console.log(multiplicationTable(10));


/////////////////////////////////////////////////
//////// kata 9 bouncy castles stretch






const PI = 3.14159;

const sphereVolume = function (radius) {
  return (4 / 3) * PI * (radius * radius * radius);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return (1 / 3) * PI * ((radius * radius) * height);
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return (width * height) * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let totVolume = 0;

  for (const solid of solids) {
    if (solid.type === 'cone') {
      totVolume += coneVolume(solid.radius, solid.height);
      console.log(totVolume)


    } else if (solid.type === 'sphere') {
      totVolume += sphereVolume(solid.radius);
      console.log(totVolume)



    }
  }
  console.log(totVolume)
  return totVolume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);


////////////////////////////////////////////////////////
//////////// Kata 10 bake off STRETCH

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for (let recipe of recipes) {
    let ingredientA = recipe.ingredients[0];
    let ingredientB = recipe.ingredients[1];
    console.log(`log of a--- ${ingredientA} log of b---- ${ingredientB}`)
    if ((bakeryA.includes(ingredientA) && bakeryB.includes(ingredientB)) ||
      (bakeryA.includes(ingredientB) && bakeryB.includes(ingredientA))) {
      return recipe.name;
    }
  }
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));


/////////////////////////////////////////////////////////
////////////// kata 10 talking calendar STRETCH

const talkingCalendar = function (date) {
  let newDate = [];
  newDate = date;
  finalDate = [];
  let day;
  let month;
  let year;
  let append = '';


  for (let date of newDate) {
    finalDate.push(date);
  }

  day = finalDate.slice(8);
  month = finalDate.slice(5, 7);
  year = finalDate.slice(0, 4);

  month = month.join('');
  // can also use a switch statment instead of if
  if (month[0] === 0 && month[1] === 1) {
    month = 'January';
  } else if (month === '02') {
    month = 'Febuary';
  } else if (month === '03') {
    month = 'March';
  } else if (month === '04') {
    month = 'April';
  } else if (month === '05') {
    month = 'May';
  } else if (month === '06') {
    month = 'June';
  } else if (month === '07') {
    month = 'July';
  } else if (month === '08') {
    month = 'August';
  } else if (month === '09') {
    month = 'September';
  } else if (month === '10') {
    month = 'October';
  } else if (month === '11') {
    month = 'November';
  } else if (month === '12') {
    month = 'December';
  }

  if (day[0] === '0') {
    day = day[1];
  } else {
    day = day.join('');
  }

  if (day === '1') {
    append = 'st';
  } else if (day === '2') {
    append = 'nd';
  } else if (day === '3') {
    append = 'rd';
  } else {
    append = 'th';
  }
  year = year.join('');
  return `${month} ${day}${append}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987


/////////////////////////////////////////////////////////////
///////// kata 11 Change Calculator

const calculateChange = function (total, cash) {
  let result = cash - total;
  let change = {};


  const currency = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  const name = ['Twenty', 'Ten', 'five', 'two', 'one', 'quarter', 'dime', 'nickel', 'penny']

  let amount;

  for (let i = 0; i < currency.length; i++) {
    amount = Math.floor(result / currency[i]); // needed to round results to get the proper amounts
    if (amount > 0) {
      change[name[i]] = amount;
      result = result % currency[i];
    }
  }
  console.log(change)
}

console.log(calculateChange(1787, 2000));


//////////////////////////////////////////////////////////////
/////////////// kata 12 organizing instructors

const organizeInstructors = function (instructors) {
  let newObj = {
    iOS: [],
    Web: [],
    Blockchain: []
  }

  for (let i = 0; i < instructors.length; i++) {


    if (instructors[i].course === 'iOS') {
      newObj.iOS.push(instructors[i].name);
    } else if (instructors[i].course === 'Web') {
      newObj.Web.push(instructors[i].name + ' ');
    } else if (instructors[i].course === 'Blockchain') {
      newObj.Blockchain.push(instructors[i].name + ' ');
    }

  }

  return newObj;


};


console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" },

]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));

// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }

///////////////////////////////////////////////////////
/////////// Kata 13 Case Maker 2 STRETCH

const makeCase = function (input, cases) {
  let newStr = '';
  let operator = ''
  let charTransform;
  for (let i = 0; i < input.length; i++) {
    switch (cases) {
      case 'camel':
        if (input.charAt(i) === ' ') {
          newStr += (input.charAt(i + 1).toUpperCase());
          i++;
        } else {
          newStr += input.charAt(i)
        };
        break;

      case 'pascal':
        if (input.charAt(i) === ' ') {
          newStr += (input.charAt(i + 1).toUpperCase());
          i++;
        } else if (i === 0) {
          newStr += input.charAt(i).toUpperCase();
        } else {
          newStr += input.charAt(i)
        };
        // console.log(newStr)
        break;

      case 'snake':
        if (input.charAt(i) === ' ') {
          let change = input.charAt(i);
          change = '_';
          newStr += change;
        } else {
          newStr += input.charAt(i);
        };
        break;

      case 'kebab':

        if (input.charAt(i) === ' ') {
          let change = input.charAt(i);
          change = '-';
          newStr += change;
        } else {
          newStr += input.charAt(i);
        };
        break;

      case 'title':

        if (i === 0) {
          newStr += input.charAt(i).toUpperCase();
        } else if (input.charAt(i) === ' ') {
          newStr += (' ' + (input.charAt(i + 1).toUpperCase()));
          i++;
        } else {
          newStr += input.charAt(i);
        };
        break;

      case 'vowel':
        if (input.charAt(i) === 'a' ||
          input.charAt(i) === 'e' ||
          input.charAt(i) === 'i' ||
          input.charAt(i) === 'o' ||
          input.charAt(i) === 'u'
        ) {
          newStr += (input.charAt(i).toUpperCase());

        } else {
          newStr += input.charAt(i);
        };
        break;

      case 'consonant':
        if (input.charAt(i) === 'a' ||
          input.charAt(i) === 'e' ||
          input.charAt(i) === 'i' ||
          input.charAt(i) === 'o' ||
          input.charAt(i) === 'u'
        ) {
          newStr += input.charAt(i);

        } else {
          newStr += (input.charAt(i).toUpperCase());
        };
        break;

      default:
        if (input.charAt(i) === ' ') {
          let change = input.charAt(i);
          change = '_';
          newStr += change;
        } else {
          newStr += input.charAt(i).toUpperCase();
        };
        break;



    }

  }


  return newStr;

};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));


//////////////////////////////////////////////////////////
/////// Kata 14 URL string to object started splitting up 
// the arrays but cant seem to get the final "" in the right 
// place might not need them to push the array into an object

const urlDecode = function (text) {
  let newObj = {};
  let newKey = [];
  let newValue = []
  let stringOne = text.replace(/%20/g, " ");
  let stringTwo = stringOne.split('&')
  for (let i = 0; i < stringTwo.length; i++) {
    newKey = stringTwo[i].slice(0, stringTwo[i].search("="));
    newValue = stringTwo[i].slice((stringTwo[i].search("=") + 1), stringTwo[i].length)
    newObj[newKey] = newValue;
  }
  return newObj
};





console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


///////////////////////////////////////////////////////////
///// kata 15 square Code STRETCH
// take string and divide it onto the 
// line lengths num then split it and add to an array as an iteration 

const squareCode = function (message) {

  let rows = [];
  let finalArr = [];
  let splitArr = message.replace(/ /g, "");
  let numOfColumns = Math.ceil(Math.sqrt(splitArr.length));

  splitArr = splitArr.split("");

  for (let i = 0; i < splitArr.length; i++) {
    rows.push(splitArr[i]);
    if ((i + 1) % numOfColumns === 0 && (i + 1) !== splitArr.length) {
      rows.push(" ");
    }
  }

  rows = rows.join("");

  for (let i = 0; i < numOfColumns; i++) {
    finalArr += rows[i];
    for (let j = 0; j < rows.length; j++) {
      if (rows[j - i - 1] === " ") {
        finalArr += rows[j];
      }
    }
    finalArr += " ";
  }
  return finalArr;
};

console.log(squareCode('chill out'));
console.log(squareCode('feed the dog'));
console.log(squareCode('have a nice day'));
console.log(squareCode('if man was meant to stay on the ground god would have given us roots'));

/////////////////////////////////////////////////////////////////
/////////////// kata 16 queen threat detector

// create board
let whiteQueen = [2, 1];
let blackQueen = [2, 0];

const generateBoard = function (whiteQueen, blackQueen) {
  let board = [];
  const queen = [1];
  const space = [0];
  let finalBoard = [];

  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      if (i === whiteQueen[0] && j === whiteQueen[1] || i === blackQueen[0] && j === blackQueen[1]) {
        board += queen;
      } else {
        board += space;
      }

    }
    board += '\n';
  }


  finalBoard = board.split('\n');
  return (finalBoard);
}


//check queen moves
const queenThreat = function () {

  /// create x axis array
  let xAxis = [];
  let whiteQueenLeft = whiteQueen[1] - 1;
  let whiteQueenRight = whiteQueen[1] + 1;

  for (i = whiteQueen[0] + 1; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      if (j === whiteQueenRight || j === whiteQueenLeft) {
        xAxis.push([i, j]);
      }
    }

    whiteQueenLeft -= 1;
    whiteQueenRight += 1;

  }

  /// comapre colmuns and rows
  let isTrue = false;

  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    isTrue = true;
  }

  for (i = 0; i < xAxis.length; i++) {
    if (xAxis[i][0] === blackQueen[0] && xAxis[i][1] === blackQueen[1]) {
      isTrue = true;
    }


  }
  return isTrue;
}

let generatedBoard = generateBoard(whiteQueen, blackQueen);


console.log(generatedBoard);
console.log(queenThreat(generatedBoard));





////////////////////////////////////////////////////////////////
/////////////// Kata 17 taxicab position  

const blocksAway = function (directions) {
  // Put your solution here
  let direction = ''
  let result = {
    east: 0,
    north: 0
  };



  
  if (directions[0] === 'right') {
    direction = 'east' 
    result.east += directions[1];
    // console.log(result)
    for (let i = 2; i < directions.length; i+=2) {
    
     if (direction === 'north' && directions[i] === 'left') {
      result.east -= directions[i + 1];
      direction = 'west'
      // console.log(result)
    } else if (direction === 'north' && directions[i] === 'right') {
      direction = 'east'
      result.east += directions[i + 1];
      // console.log(result)
    } else  if (direction === 'south' && directions[i] === 'left') {
      direction = 'east'
      result.east += directions[i + 1];
      // console.log(result)
    } else if (direction === 'south' && directions[i] === 'right') {
      direction = 'west'
      result.east -= directions[i + 1];
      // console.log(result)
    } else if (direction === 'east' && directions[i] === 'left') {
      direction = 'north'
      result.north += directions[i + 1];
      // console.log(result)
    } else if (direction === 'east' && directions[i] === 'right') {
      direction = 'south'
      result.north -= directions[i + 1];
      // console.log(result)
    } else if (direction === 'west' && directions[i] === 'left') {
      result.north -= directions[i + 1];
      direction = 'south'
      // console.log(result)
    } else if (direction === 'east' && directions[i] === 'right') {
      result.north += directions[i + 1];
      direction = 'north'
      // console.log(result)
    }
  }}

  if (directions[0] === 'left') {
    direction = 'north'
    result.north += directions[1];
    //console.log(result)
    for (let i = 2; i < directions.length; i+=2) {
       
      if (direction === 'north' && directions[i] === 'left') {
        result.east -= directions[i + 1];
        direction = 'west'
        //console.log('left')
      } else if (direction === 'north' && directions[i] === 'right') {
        direction = 'east'
        result.east += directions[i + 1];
      } else  if (direction === 'south' && directions[i] === 'left') {
        direction = 'east'
        result.east += directions[i + 1];
        //console.log('left')
      } else if (direction === 'south' && directions[i] === 'right') {
        direction = 'west'
        result.east -= directions[i + 1];
      } else if (direction === 'east' && directions[i] === 'left') {
        direction = 'north'
        result.north += directions[i + 1];
        //console.log('left')
      } else if (direction === 'east' && directions[i] === 'right') {
        direction = 'south'
        result.north -= directions[i + 1];
      } else if (direction === 'west' && directions[i] === 'left') {
        result.north -= directions[i + 1];
        direction = 'south'
        //console.log('left')
      } else if (direction === 'east' && directions[i] === 'right') {
        result.north += directions[i + 1];
        direction = 'north'
      }

  }}

  return result;

};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));


///////////////////////////////////////////////////////////
/////////// Kata 18 Number Guesser

/// full on JS file with html and links also going to need to use selectors and alerts/