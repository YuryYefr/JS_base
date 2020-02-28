var first = {
  name: "Dima",
  age: 25,
  isAdmin: false,
  canSpeak: true,
  get: function(a, b) {
    return a + b;
  },
  friendNames: ["Саша", "Дмитрий", "Оля"],
  parents: {
    mother: {
      name: "Катя",
      hobbies: ["Пляж", "Фото", "Море"],
      friends: [
        {
          name: "Петр",
          age: 49
        }
      ]
    },

    father: {
      name: "Виктор",
      hobbies: ["Бег", "Солнце", "Туризм"],
      friends: [
        {
          name: "Алексей",
          age: 40
        }
      ]
    }
  }
};
var second = {
  name: "Dima",
  age: 25,
  isAdmin: false,
  canSpeak: true,
  get: function(a, b) {
    return a + b;
  },
  friendNames: ["Саша", "Дмитрий", "Оля"],
  parents: {
    mother: {
      name: "Катя",
      hobbies: ["Пляж", "Фото", "Море"],
      friends: [
        {
          name: "Петр",
          age: 49
        }
      ]
    },

    father: {
      name: "Виктор",
      hobbies: ["Бег", "Солнце", "Туризм"],
      friends: [
        {
          name: "Алексей",
          age: 40
        }
      ]
    }
  }
};

function deepEqual(obj, obj2){
    if (Object.keys(obj).length !== Object.keys(obj2).length){
        return false
    } else if((typeof obj == "object" && obj != null) && (typeof obj2 == "object" && obj2 != null)){
        for (i in obj){
            if (obj2.hasOwnProperty(i)) {
                for (i in obj) {
                    if (!deepEqual(obj[i], obj2[i])) {
                        return false;
                    }
                } return true;
            } else return false;
        }
        return true;
    } else {
        if (obj.toString() !== obj2.toString()){
            return false;
        }
    }
   return true;
}
console.log(deepEqual(first, second))