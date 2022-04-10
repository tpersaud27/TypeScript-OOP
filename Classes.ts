/**
 * This class: Message contains properties: title, message, id
 */
export class Message {
  title: string;
  message: string;
  id: number;
  deliveryDate: Date;
  /**
   * This is a private property
   * We typically as a _ before the property name to denote it is private
   */
  private _isSent: boolean;

  /**
   * This is a setter for _isSent
   */
  set isSent(value: boolean) {
    if (value === true) {
      this.deliveryDate = new Date();
    }
    // We set the private _isSent property to the value passed in the parameter
    this._isSent = value;
  }
  /**
   * This is a getter for _isSent
   */
  get isSent(): boolean {
    return this._isSent;
  }

  /**
   * Upon construction of the object, there will be some initial configurations
   * Here, we can add some of the properties we defined above and intialize them when we create the object
   * @param title
   * @param message
   * @param id
   * @param isSent
   */
  constructor(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.isSent = false;
  }

  /**
   * This is a getter that will return the message status
   * Remember get must return the message status
   * Get is a property, so to invoke we do not include (), as we would with methods
   */
  get messageStatus(): string {
    const status = this.isSent ? "Has been sent" : "Has not been sent";
    return `${status}`;
  }

  /**
   * This method takes the message and shortens it and appends ...
   * @returns message with the first 10 characters followed by ...
   */
  previewMessage(): string {
    return this.message.slice(0, 10).concat("...");
  }
}

const message1 = new Message("Message 1", "This is a new message");
message1.isSent = true;
console.log(message1.previewMessage());
console.log(message1.messageStatus);
console.log(message1);
