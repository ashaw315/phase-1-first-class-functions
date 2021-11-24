function receivesAFunction(callback){
    callback();
}


//function returnsANamedFunction() {
 //   return function namedFunction(){}
//}

function returnsANamedfunction(){
    return function namedFunction(){}
}

let returnsAnAnonymousFunction = function(){
    return function(){}
}
