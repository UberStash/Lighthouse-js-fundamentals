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
