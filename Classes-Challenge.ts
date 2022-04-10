/**
 * ------------------------------------------------------------------------
 * Challenge 1: Classes
 * ------------------------------------------------------------------------
 * 1. Create a User class.
 * 2. Add a firstName, lastName, and email property.
 * 3. Add a get to return fullName,
 * 4. Add a method to check if your email param matches the user's current email.
 */

class User {
  // Properties
  private _firstName: string;
  private _lastName: string;
  private _email: string;

  /**
   * Returns fullname of user
   */
  get fullName(): string {
    return this._firstName + " " + this._lastName;
  }

  /**
   * Returns boolean based on param email and current email comparison
   * @param email
   * @returns True: if email param matches user's current email
   */
  checkEmail(email: string): boolean {
    return this._email === email;
  }
}
