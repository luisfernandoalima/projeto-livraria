export default class User {
  constructor() {
    this.id = 1;
    this.name = "Luis";
    this.email = "luis@gmail.com";
    this.cargo = "admin";
  }

  private id: number;
  private name: String;
  private email: String;
  private cargo: String;

  Create = (): boolean => {
    return false;
  };

  Read = (): User => {
    let user = new User();

    return user;
  };

  Update = (): boolean => {
    return true;
  };

  Delete = (): boolean => {
    return false;
  };

  Login = (): boolean => {
    return false;
  };
}
