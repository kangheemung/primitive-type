interface Product {
    img: string;
    name: string;
    description: string;
}

interface SalesProduct extends Product {
    discountPercent: number;
}

type ApiResponse = {
    products: Product[];
    salesProducts: SalesProduct[];
}

const apiResponse: ApiResponse = {
    products: [
        { img: "pants.png", name: "ズボン", description: "newpants" },
        { img: "jacket.png", name: "ジャケット", description: "jacket" }
    ],
    salesProducts: [
        { img: "skirts.png", name: "スカート", description: "skirts", discountPercent: 20 },
        { img: "shirts.png", name: "シャーヅ", description: "shirts", discountPercent: 10 }
    ]
}

// Error Explanation
// The map function is not available on ApiResponse directly because it contains multiple types. 
