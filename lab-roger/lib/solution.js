'use strict';

module.exports = function(array) {
  if(!Array.isArray(array)) return null;

  function createHashValue(string){
    return string.split('').reduce((a, b) => (a + Math.abs(b.charCodeAt(0) - 96)),0);
  }

  let newArray = array.map(subString => {
  
    return {
      value: createHashValue(subString),
      string: subString,
    };
  });

  return newArray.sort((a, b) => a.value - b.value).map(x => x.string);


};