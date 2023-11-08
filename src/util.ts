class User {
  protected id:string;   
  protected userName:string; 
  protected isBot:boolean;
  protected groop:string;

    constructor(id:string, userName:string, isBot:boolean, groop:string) {
        this.id = id;
        this.userName = userName;
        this.isBot = isBot;
        this.groop = groop;
    }
}

export { commandMessage ,User} ;

const commandMessage = {
  name: "My",
  value: 123,
};