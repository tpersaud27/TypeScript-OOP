// This is a message class with two properties: title and message
export class Message {
  title;
  message;
  id;
}

const message1 = new Message();
message1.title = "Hello Mega";
message1.message = "Testing if this works";

console.log(message1);
