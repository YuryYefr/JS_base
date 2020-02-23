function someImp(someList, cb){
    for (i = 0; i < someList.length; i++){
        if (!cb(someList[i])) {
            return false;
        }
    }
    return true;
    }