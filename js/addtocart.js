let cart = document.querySelector("#cart");
let carticon = document.querySelector("#cart-btn");
let add = document.querySelector(".add-btn");


if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
} else{
    ready();
}

function ready(){
    // Remove items form cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem)
    }
    //Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    // Add to cart
    var addCart = document.getElementsByClassName('add-btn')
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
        let searchForm = document.querySelector('.searchbox');
        let shoppingCart = document.querySelector('.shopping-cart');
        let loginForm = document.querySelector('.login-form');
        add.onclick = () =>{
            searchForm.classList.remove('active');
            loginForm.classList.remove('active');
            shoppingCart.classList.add('active');
        }
    }
}


//Remove Items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//Quantity Changes
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}

//Add to cart
function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("p_title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("p-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

function addProductToCart(title, price, productImg){
    var cartShopBox= document.createElement("div");
    cartShopBox.classList.add('box')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartBoxContent = `<img src="${productImg}" class="cart-image">
                            <div class="content">
                            <h3 class="cart-product-title">${title}</h3>
                            <span class="cart-price">${price}</span><br>
                            <input type="number" value="1" class="cart-quantity">
                            </div>
                            <i class="fas fa-trash cart-remove"></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
    .getElementsByClassName('cart-remove')[0]
    .addEventListener("click", removeCartItem);
    cartShopBox
    .getElementsByClassName('cart-quantity')[0]
    .addEventListener("change", quantityChanged);
    
}


//Update total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('box');
    var total = 0;
    for (var i=0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var cprice = parseFloat(priceElement.innerText.replace("₹", ""));
        var quantity = quantityElement.value
        total = total + (cprice * quantity);
    }
    document.getElementsByClassName('total-price')[0].innerText = "₹" + total;
    
}

