//To the pass this type of object to the greeter() function
class student { 
	fullName: string;
	constructor(public firstName:string, public middleName:string, public lastName:string) { 
		this.fullName = firstName+" "+middleName+" "+lastName
	}
}

//To tell greeter function to accespt objects that have this type of
interface iuser{
	firstName:string;
	lastName: string;
	middleName: string;
}

//object that follows iuser interface
let person1 = {firstName:"Chandler",middleName:"Muriel", lastName:"Bing"};

//Generic Array
//Using expression - Importance of backquote
//If the string have a expression we need to implement the string in the backquotes (``)
let list2:Array<string> = ["Muriel","Chandler"]
let lname:String = "Bing"
let person2 = new student(list2[0],list2[1],`${lname}`)
let age2: number = 23;

//Tuples
//Use of substring function
let list3: [string, string, string, number] = ["Chandler", "Muriel", "Bing", 23]
let person3 = new student(list3[0], list3[1].substring(1), list3[2]);

//Enums - Default indexes
enum list4 { Chandler, Muriel, Bing};
let person4 = new student(list4[0], list4[1].substring(1), list4[2]);

//Enums - Changing every element's indexes
enum list5 { Chandler=1, Muriel=0, Bing=2};
let person5 = new student(list5[0], list5[1].substring(1), list5[2]);

//Enums - Starting enum from index 1
enum list6 { Chandler = 1, Muril, Bing };
let person6 = new student(list6[1], list6[2].substring(1), list6[3]);


//Any datatype
//length function
let list7: any[] = ["Pobudu", "Oshan", "Mendis", ("dfsdfsdfsfdsggshsgfh".length)];
let person7 = new student(list7[0], list7[1].substring(1), list7[2]);

//null - Please ingonre these
let x: null = null;

//Undefines - Please ignore these
let y: undefined = undefined;


function greeter(user:iuser):string{
	return "Good Morning! "+user.firstName+" "+user.middleName+" "+user.lastName+". "+ ` You are ${list7[3]+1} years old!`;
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
