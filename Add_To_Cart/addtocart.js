const product = [
    {
        id:0,
        image:'infinix.jpg',
        title:'Infinix i9 12th Gen',
        price:85000
    },
    {
        id:1,
        image:'crossbeats.jpg',
        title:'Crossbeats Opera ',
        price:1800
    },
    {
        id:2,
        image:'nike.jpg',
        title:'Nike Air Shoes',
        price:600
    },
    {
        id:3,
        image:'macbook.jpg',
        title:'MacBook Pro',
        price:150000
    },
]
const categories = [...new Set(product.map((item) => {
    return item
}))]
// console.log(categories)
// console.log(product)

let i=0;
document.getElementById('root').innerHTML = product.map((item) => {
    var {image,title,price} = item;
    return(
        `
        <div class='box'>
            <div class = 'img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>${price}.00</h2>` + 
        "<button onClick='addToCart("+(i++)+")'>Add To Cart</button>" +
        `</div>
        </div>`
        
    )
}).join('') 
// => The join() method returns an array as a string.
// => The join() method does not change the original array.
// => Any separator can be specified. The default is comma (,).

var cart = []

function addToCart(a){
    cart.push({...product[a]})
    displayCart();
}

function deleteElement(a){
    cart.splice(a,1)
    displayCart();
}
function displayCart(a){
    let j=0, total=0;
    document.getElementById('count').innerHTML = cart.length
    if(cart.length == 0){
        document.getElementById('cartItem').innerHTML = "Your Cart is empty"
        document.getElementById('total').innerHTML = "$ "+0+ ".00"
    }else{
        document.getElementById('cartItem').innerHTML = cart.map((item) => {
            var {image,title, price} = item; // Destructuring
            total = total + price
            document.getElementById('total').innerHTML = "$ "+total+".00"
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>` + 
                    "<i class='fa-solid fa-trash' onClick='deleteElement("+(j++) +")'></i>" + 
                    `</div>`
            );
        }).join('')
    }
}
// console.log([1,2,3,4,5].splice(4,1))