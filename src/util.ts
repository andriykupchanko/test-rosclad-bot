export { commandMessage,messageLimit,timeOut,User} ;

class User {
  protected id:string;   
  protected userName:string; 
  protected isBot:boolean;
  protected groop:string;
  protected userLaguage:string;

  constructor(id:string, userName:string, isBot:boolean, groop:string,userLaguage:string) {
      this.id = id;
      this.userName = userName;
      this.isBot = isBot;
      this.groop = groop;
      this.userLaguage = userLaguage;
  }
}
const messageLimit = 3; // Максимальна кількість повідомлень на секунду
const timeOut = 1000; // Тайм-аут в мілісекундах (1000 мс = 1 секунда)

const commandMessage = {
  startMsg:{
    startWelcomeMsgEn:'1',
    startWelcomeMsgUk:'2',
    startListCommandMsgEn:'2',
    startListCommandMsgUk:'2',
  },
  helpMsg:{
    helpMainMsgEn:'1',
    helpMainMsgUk:'2',
  }, 
};

