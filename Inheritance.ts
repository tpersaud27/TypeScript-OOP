/**
 * Parent / Base Class
 */
export class Animal {
  age: number;
  legs: number;
  name: string;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.name = name;
    this.legs = legs;
  }

  noise(): string {
    return "I am animal making noise";
  }

  /**
   * Constructor
   * Note: We are using parameter properties
   * Adding a access modified to a constructor parameter will automatrically assign that parameter to a field of the same name
   * https://stackoverflow.com/questions/48571592/private-parameters-in-typescript
   * @param age
   * @param legs
   * @param name
   
  constructor(private age: number, private legs: number, private name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }*/
}

// Child / Derived / Subclasses ...

/**
 * Dog Class.
 * This class extends Animal, thereby inheriting the properties declared in the Animal class
 * When we extend we do not need to implement the properties declared in the parent class
 * Since Dog is a child of Animal, we must use the super() keyword in the constructor
 */
export class Dog extends Animal {
  // We dont need to have three paramters for the constructor, but we must have them in the super()
  constructor(data: { age: number; legs: number; name: string }) {
    super(data.age, data.legs, data.name);
  }

  public woof(): string {
    return "WOOF";
  }

  noise(): string {
    super.noise();
    return "I am dog";
  }
}

/**
 * Cat Class.
 * When we implement Animal, we must also implement all of its properties
 * When we implement, we do not need the super() keyword in the constructor, because it is not a child of animal
 */
export class Cat implements Animal {
  constructor() {}
  noise(): string {
    throw new Error("Method not implemented.");
  }

  // We must implement the properties of the parent class
  age: number;
  legs: number;
  name: string;

  public meow(): string {
    return "meow meow meow";
  }
}

// Note: extends makes the derived class the child of the parent class where implements makes the derived class the shape of the parent class

// Dog instantiation
const dog = new Dog({ age: 3, legs: 4, name: "Max" });
console.log(dog.woof());
console.log(dog.noise());
// Cat instantiation
const cat = new Cat();
console.log(cat.meow());

// True because this is a child of the parent class
console.log(dog instanceof Animal);
// False
console.log(cat instanceof Animal);
