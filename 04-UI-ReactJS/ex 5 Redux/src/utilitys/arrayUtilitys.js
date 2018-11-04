function getLastValidId(array){
    let validId = 0;
    if(Array.isArray(array)){
      array.forEach((element) => {
        validId = element.id + 1;
      })
    }
    return validId;
  }
  function deleteElementByID(array,id){
    if(Array.isArray(array) && typeof id === "number"){
      let newArray = array.slice()
        return newArray.filter(element => element.id !== id)
    }
  }
  function getElementById(array,id){
    if(Array.isArray(array)){
      return array.find((element) => element.id === id)
    }
  }

  function remplaceElementInArray(array, element){
    if(Array.isArray(array)){
      let newArray = array.slice();
      newArray.forEach( (item, index) => {
        if(item.id === element.id){
          newArray[index] = element;
        }
      });
      return newArray;
    }
}

  export { getLastValidId , deleteElementByID, getElementById, remplaceElementInArray }