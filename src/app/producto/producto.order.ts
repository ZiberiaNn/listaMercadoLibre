
export class Producto{
    id:number;
    title:string;
    price:string;
    thumbnail:string;
    constructor(id:number,title:string, price:string, date:Date, total_cost:number, is_delivered:boolean,thumbnail:string){
        this.id=id;
        this.title=title;
        this.price=price;
        this.thumbnail=thumbnail;
    }
}