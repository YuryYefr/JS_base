const STARS = [1, 2, 3, 4, 5]
const NAMES = ['Some', 'NewSome', 'SomeSome']
const TYPE = ['Cheap', 'Middle', 'HiLevel']

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIndex(someList){
  return someList[getRandomInt(someList.length)]
}


let hotel = {
    'stars': getRandomIndex(STARS),
    'name': getRandomIndex(NAMES),
    'type': getRandomIndex(TYPE),
}