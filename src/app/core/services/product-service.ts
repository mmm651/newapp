import { Service } from '@angular/core';

@Service()
export class ProductService {
  productList=[
    {id:1,name:'moo',desc:'gk',price:60,imgURL:'1.png'},
    {id:2,name:'nopo',desc:'st',price:100,imgURL:'2.png'}
  ]
  addPtoduct(){
   this.productList[0].name="moo"

     this.productList.push({id:1,name:'Joo',desc:'coach',price:10,imgURL:'1.png'})
}
deletProduct(id:number){
  this.productList=this.productList.filter(p=>p.id != id);
  console.log(this.productList);
}
}
