var houseKeeper1 = { //here we have declared an object housekeeper
    name : "timmy", // here we have added values to the object house keeper like name age etc
    age : 19,
    tasks : ["cleaning" , "dishwashing"],
    exp : 7,
    
}


console.log(houseKeeper1.name)//to call an object , we use object.value


// CONSTRUCTOR FUNCTION




function Housekeep (name , age , tasks , exp){ // instead of writing whole object everytime , we create a constructor function in js in which we specify the order of values of the object and put them in the object using this
    this.name = name;
    this.age = age;
    this.tasks = tasks;
    this.exp = exp;
    //method :
    this.cleanroom = function clean(){ // this is how you define a method 
        return console.log("LETS CLEAN DA HOE");
    }
}

var housekeeper2 = new Housekeep("bobby",20,["Cleaning","vaccuimign"],9)//then we call the housekeep using NEW contructor function and add values in specific order


console.log(housekeeper2.name)



//METHODS - functions associated with objects are methods
//call method -> object.method();

console.log(housekeeper2.cleanroom())
 




































































