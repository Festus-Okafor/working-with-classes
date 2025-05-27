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







