/**
 * Methods / param overriding -> Child overrides parent method
 * Method overloading -> same name methods (JavaScript doesnt support this)
 * Interfaces / abstract classes implements
 */

export class User {
  firstName: string;
  age: number;
  email: string;

  constructor(firstName: string, age: number, email: string) {}
}

class BaseUser extends User {}
