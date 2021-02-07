export class Account {
    
    _id: number;
    name:string;
    email:string;
    password:string;
    phone: string;
    constructor(){
        this._id=0;
        this.email="";
        this.name="";
        this.password="";
        this.phone="";
    }
}
