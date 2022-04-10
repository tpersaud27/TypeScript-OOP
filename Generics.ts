export class User<T> {
  name: string;
  age: number;
  email: string;
  isMale: boolean;
  public classicUserData: T;

  public mergeClassUser(params: T): void {
    const { name, age, email, isMale } = this;

    // We use the rest function to insert the rest of the params inserted
    this.classicUserData = { name, isMale, age, email, ...params };
  }
}

interface ClassicUser {
  name: { first: string; last: string };
}

interface ClassicUser2 {
  name: { first: string; middle: string; last: string };
}
// This user will be a generic type of classic user
// So we can access first and last from ClassicUser generic
const user1 = new User<ClassicUser>();
user1.mergeClassUser({ name: { first: "Tommy", last: "Persaud" } });

console.log(user1.classicUserData.name.first);
