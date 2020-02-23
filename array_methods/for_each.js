function forEachImp(someList, cb){
    let result = 0;
    for (i = 0; i < someList.length; i++){
        cb(someList[i]);
        }
        return result
}
