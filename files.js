  //part 1. playing around with classes
 class Cat {
  constructor(age, color, sex) { //the parameters here serves as placeholder for the features of the about to be created instances
    this.age = age;
    this.color = color;
    this.sex = sex;
    this.isMoving = true;
    this.isMale = false;
    this.canBite = true;
  }
  walk(){
    console.log(this.isMoving);
  }
  meow(){
    console.log("Meow!");
  }
  sex() {
    console.log(this.isMale);
  }
  bite(){
    console.log("This is biting")
  }
}

const smallCat = new Cat(12, "white", "male");
const bigCat = new Cat(45, "black", "Female");
console.log(smallCat);
console.log(bigCat);
//
bigCat.walk();
smallCat.meow();
 
//part 2 playing around with classes


console.log(`........................................................`)

class Pirate {
  constructor(gun, ship, knife) {
    this.gun = gun;
    this.ship = ship;
    this.knife = knife;
    this.isSlepTime = true
  }
  attack() {
    console.log("its time to attaaaaaaak!!!!!");
  }
  enemy(){
    console.log("There is an enemy ship ahead");
  }
  sleep(){
    console.log(this.isSlepTime);
    //console.log(this.isSleepTime);
  }
}

const kingPirate =  new Pirate("AK 47" , "Amphibious Ship", "cutlass");               
const queensCult =  new Pirate("machine gun", "Frigate" , "Santoku");
console.log(kingPirate)


queensCult.enemy()
queensCult.attack()
queensCult.sleep()
kingPirate.attack()
kingPirate.enemy()


console.log(`........................................................`)


//part 3 playing around with classes

  class Car{
    constructor(make, model, year, color ){
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color
    }
    
  Drive(){
      console.log(`lets move now`)
  }
  }
  
  function createArr(number){
    const arr = []
    for(let i=0; i<number; i++){
      const toyota = new Car("Benz", "Gla250", 2025,"white");
      //console.log(toyota)
      arr.push(toyota);
      //arr.push(new Car("Benz", "Gla250", 2025,"white"  )+i)
      toyota.Drive()
    }
    return arr;
  }
      const freighter = createArr(100);
      console.table(freighter)





      // morning code problems.... dealing with classes

 

class Hamster {
  constructor(owner, name, price) {
    this.owner = owner,
     this.name = name, 
     this.price = price;
  }
  wheelRun() {
    console.log(`squeak squeak`);
  }
  eatFood() {
    console.log(`nibble nibble`);
  }
  getPrice() {
       let price = 40;   
    };
  }

class Person {
  constructor(name, age, height, weight, mood, hamsters, bankAccount) {
    this.name = name,
      this.age = 0,
      this.height = 0,
      this.weight = 0,
      this.mood = 0,
      this.hamsters = [],
      this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`This is the student information+ ${this.name}`);
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount + 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood+10;
    this.bankAccount-hamster.getPrice;
  }
}

const Timmy = new Person("Timmy", 5)
const Gus = new Hamster("Timmy")

Timmy.eat(5)
Timmy.exercise(5)
Timmy.ageUp(9)
Timmy.buyHamster("Gus")
Timmy.ageUp(15)
Timmy.eat(2)
Timmy.exercise*(2)

console.log