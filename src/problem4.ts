type ItemType ={
    title:string;
    rating:number
}

const filterByRating=(arrayOfItems:ItemType[]):ItemType[]=>{
    const filteredArray=arrayOfItems.filter(item=>item.rating>=4)
    return filteredArray;
}   

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));