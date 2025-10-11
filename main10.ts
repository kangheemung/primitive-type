interface Product{
    img:string;
    name:string;
    description:string
    // discountPercent?:number
}
//エラーを起こさないため分ける
interface salseProducts extends Product{
    discountPercent:number
}//＜＝このデータは必ずあるデータだ。！！
type ApiResponse={
    product:Product[],
    salseProducts:Product[],
}
const apiResponse:ApiResponse = {
    products:[
            {img:"pants.png",name:"ズボン",description:"newpants"},
            {img:"jacket.png",name:"ジャケット",description:"jacket"}
        ],
    salseProducts:[
        {img:"skirts.png",name:"スカート",description:"skirts",discountPercent:20},
        {img:"shirts.png",name:"シャーヅ",description:"shirts",discountPercent:10}
    ]
}
apiResponse.map(item=?item.discountPercent)
// apiResponse.map(item=>item.discountPercent)
//에러 간다. 이유타입이 여러개여서
