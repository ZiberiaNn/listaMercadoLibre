
export class Producto{
    id:number;
    title:string;
    price:string;
    constructor(id:number,title:string, price:string, date:Date, total_cost:number, is_delivered:boolean){
        this.id=id;
        this.title=title;
        this.price=price;
    }
}