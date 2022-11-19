const info1 = {
    name: "Chwanpar",
    nickName: "Bam",
    hobby: "play game",
    address:{
        province:"Bangkok",
        postcode:10250
    }

}

let info = `
    My nickname is ${info1.nickName} ,
    My hobby is ${info1.hobby}
    and my postcode is ${info1.address.postcode}
`
console.log (info)