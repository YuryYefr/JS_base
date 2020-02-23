function (someList, cb){
    let result = []
    for (i = 0; i < someList.length; i++){
        result.push(cb(someList[i]));
    }
    return result;
}