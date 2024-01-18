let productsHTML = "<h2>Ninjago</h2>"

products.map(product => productsHTML += `<article>
<img src="website_images/PROD_${product.imagefile}" alt="${product.title}">
<a href="#">${product.category}</a>
<h3>${product.title}</h3>
<span>Kr. ${product.price}</span>
<button onclick="addToCart(${product.prodid})">Legg i handlekurv</button>
</article>`)

//console.log(productsHTML)

const main = document.getElementsByTagName("main")
main[0].innerHTML = productsHTML

//HANDLEVOGNFUNKSJONALITET
function addToCart(productid) {
    //console.log("add to cart kjører!" + productid)
    cart.push({product: productid, quantity: 1})
    console.log(cart)
    
    updateCartDisplay()
}

function updateCartDisplay() {
    let.cartHTML = ""
    cart.map(prod => {

        cartHTML.innerHTML += `<li>
    <span class="title">Produkttittel</span>
    <span class="price">89,-</span>
    <span class="quantity">x1</span>
    <span class="functions">
        <button>X</button>
    </span>
</li>`})
}