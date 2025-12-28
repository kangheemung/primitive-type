type Product={
    id: string;
    name: string;
    price: number;
}
//stype OldProduct
type DiscountProduct = Product & {discountRatio:number}

interface Product{
    id : string;
    name : string;
    price : number;
}
interface DiscountProduct extends Product{
    discountRation: number;
}