const info = [
    {name: "Chwanpar",
    nickName: "Bam",
    hobby: "play game",
    address:{
        province:"Bangkok",
        postcode:10250
    }},

    {name: "Supachot",
    nickName: "Book",
    hobby: "sleep",
    address:{
        province:"Bangkok",
        postcode:10250}},
    
    
    { name: "Jirayut",
    nickName: "Boy",
    hobby: "listen music",
    address:{
        province:"Bangkok",
        postcode:10250
    }}
]

for  (const myarr of info){
    console.log(`My nick name is ${myarr.nickName},  My hobby is ${myarr.hobby} and my postcode is ${myarr.postcode}`);}