function filterImp(someList, cb){
    let res = [];
    for (i = 0; i < someList.length; i++){
        if (cb(someList[i])){
            res.push(someList[i]);
        }
    }
    return res;
}