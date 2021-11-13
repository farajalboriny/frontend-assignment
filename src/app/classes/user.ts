export class User {
    username:string | undefined;
    password:string | undefined;
    birthDate:Date | undefined;
    gender:string | undefined;
    constructor(){this.gender=''
    this.birthDate=new Date();
}
}
