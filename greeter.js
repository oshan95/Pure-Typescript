//To the pass this type of object to the greeter() function
var student = /** @class */ (function () {
    function student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return student;
}());

//object that follows iuser interface
var person1 = { firstName: "Chandler", middleName: "Muriel", lastName: "Bing" };

//Generic Array
//Using expression - Importance of backquote
//If the string have a expression we need to implement the string in the backquotes (``)
var list2 = ["Muriel", "Chandler"];
var lname = "Bing";
var person2 = new student(list2[0], list2[1], "" + lname);
var age2 = 23;

//Tuples
//Use of substring function
var list3 = ["Chandler", "Muriel", "Bing", 23];
var person3 = new student(list3[0], list3[1].substring(1), list3[2]);

//Enums - Default indexes
var list4;
(function (list4) {
    list4[list4["Chandler"] = 0] = "Chandler";
    list4[list4["Muriel"] = 1] = "Muriel";
    list4[list4["Bing"] = 2] = "Bing";
})(list4 || (list4 = {}));
;
var person4 = new student(list4[0], list4[1].substring(1), list4[2]);

//Enums - Changing every element's indexes
var list5;
(function (list5) {
    list5[list5["Chandler"] = 1] = "Chandler";
    list5[list5["Muriel"] = 0] = "Muriel";
    list5[list5["Bing"] = 2] = "Bing";
})(list5 || (list5 = {}));
;
var person5 = new student(list5[0], list5[1].substring(1), list5[2]);

//Enums - Starting enum from index 1
var list6;
(function (list6) {
    list6[list6["Chandler"] = 1] = "Chandler";
    list6[list6["Muril"] = 2] = "Muril";
    list6[list6["Bing"] = 3] = "Bing";
})(list6 || (list6 = {}));
;
var person6 = new student(list6[1], list6[2].substring(1), list6[3]);

//Any datatype
//length function
var list7 = ["Pobudu", "Oshan", "Mendis", ("dfsdfsdfsfdsggshsgfh".length)];
var person7 = new student(list7[0], list7[1].substring(1), list7[2]);

//null - Please ingonre these
var x = null;

//Undefines - Please ignore these
var y = undefined;

function greeter(user) {
    return "Good Morning! " + user.firstName + " " + user.middleName + " " + user.lastName + ". " + (" You are " + (list7[3] + 1) + " years old!");
}

//Greeting function using object with iuser interface
document.body.textContent = "Greeting method 1 : " + greeter(person1);

//Greeting function using generic array
document.body.textContent = "Greeting method 2 : " + greeter(person2);

//Greeting fucntion using tuples
document.body.textContent = "Greeting method 3 : " + greeter(person3);

//Greeting function using enums - template 1
document.body.textContent = "Greeting method 4 : " + greeter(person4);
//Greeting function using enums - template 2
document.body.textContent = "Greeting method 5 : " + greeter(person5);
//Greeting function using enums - template 3
document.body.textContent = "Greeting method 6 : " + greeter(person6);

//Greeting function using Any datatype
document.body.textContent = "Greeting method 7 : " + greeter(person7);
