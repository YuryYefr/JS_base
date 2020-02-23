function someImp(someList, cb){
    if (_.isEmpty(someList)){
        console.log('Empty list');
        return;
    }else {
    for (i = 0; i < someList.length; i++){
        if cb(someList[i]){
            return true
        }else {
            continue;
        }
    }
    return false;
}}