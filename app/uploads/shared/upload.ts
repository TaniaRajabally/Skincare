export class Upload {

    $key: string;
    file:File;
    name:string;
    url:string;
    progress:number;
    createdAt: Date = new Date();
  email:string;
  user:firebase.User;
    constructor(file:File) {
      this.file = file;
    }
  }