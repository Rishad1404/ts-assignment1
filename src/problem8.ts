interface Product{
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}

const calculateTotalPrice=(products:Product[]):number=>{
    
    const totalPrice=products.reduce((totalPrice,product)=>{
        let total=product.price*product.quantity;;

        const discountedPrice=product.discount?total*(1-product.discount/100):total;
        return totalPrice+discountedPrice;
        
    },0);

    return totalPrice;
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));