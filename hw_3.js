//1.Создать функцию copy, которая принимает на вход один объект и возвращает точную копию (новый объект) с
//теми же свойствами.
function objectCopy(someobj){
    let copiedObject = {}
    for (val in someobj){
        copiedObject[val] = someobj[val];
    }
    return copiedObject
}
user = {name: 'Some', age: 25, color: 'Black', height: 190}
var newUser = objectCopy(user)
console.log(newUser)
//2.Создать функцию copy, которая принимает на вход один объект и возвращает точную копию (новый объект) с
//теми же свойствами.
function isEqual(firstobj, secondobj){
    for (val in firstobj){
       if (firstobj[val] !== secondobj[val]){
        return false
       }
    }
    return true
    }
var equality = isEqual(user, newUser);
console.log(equality);
//3. первая задачка но с измением name, age color -> перезаписать любыми значениями
function ModifiedCopy(someobj, name, age, color){
    let copiedObject = {}
    for (val in someobj){
        if (val === 'name'){
            copiedObject[val] = name;
        }else if (val === 'age'){
            copiedObject[val] = age;
        }else if (val === 'color'){
            copiedObject[val] = color
        }else{
        copiedObject[val] = someobj[val];
        }
    }
    return copiedObject
}
name = 'Max';
age = 20;
color = 'red'
newUserModified = ModifiedCopy(user, name, age, color)
console.log(newUserModified)
//4. Реализовать аналогичный функционал метода Object.assign():
//copy(first, second, third)
function assignUnderHood({}, ...args){
    i = 0;
    let result = {};
    while (i < args.length){
        for (val in args[i]){
        result[val] = args[i][val];
    }
    i ++;
    }
    return result;
    }

let result = assignUnderHood({}, user, newUser, newUserModified)
console.log(result)
