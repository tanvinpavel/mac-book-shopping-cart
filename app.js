//add price on price filed
function addPrice(price, fieldName){
    const fieldElement = document.getElementById(fieldName+'-field-id');
    fieldElement.innerText = price;
}

//get all functional button
const customizeBtn = document.getElementsByClassName('btn-outline-dark');

//set event listener on every functional button
for(element of customizeBtn){
    element.addEventListener('click', function(event){
        const btnName = event.target.innerText;
        if(btnName == '8GB unified memory'){
            // console.log('first');
            addPrice(0, "memory");
        }else if(btnName == '16GB unified memory'){
            addPrice(180, "memory");
        }else if(btnName == "256GB SSD storage"){
            addPrice(0, "storage");
        }else if(btnName == "512GB SSD storage"){
            addPrice(100, "storage");
        }else if(btnName == "1TB SSD storage"){
            addPrice(180, "storage");
        }else if(btnName == "Friday, Aug 25 FREE Prime Delivery"){
            addPrice(0, "delivery");
        }else if(btnName == "Friday, Aug 21 Delivery charge $20"){
            addPrice(20, "delivery");
        }
        //count total price
        totalPrice();
    });
}

//count total selected product price
function totalPrice(){
    let totalPrice = 0;
    const productPrice = document.getElementsByClassName("priceField");
    for(product of productPrice){
        const eachProductPrice = parseFloat(product.innerText);
        totalPrice = totalPrice + eachProductPrice;
    }
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('discount-price').innerText = totalPrice;
}

//promo code functionality
document.getElementById('promoCodeBtn').addEventListener('click', function(){
    const promoCodeInput = document.getElementById('promoCodeInput');
    const userInputPormoCode = promoCodeInput.value;
    const netPrice = parseFloat(document.getElementById("total-price").innerText);
    if(userInputPormoCode == "stevekaku"){
        const discountPrice = netPrice - (netPrice * 0.2);
        document.getElementById('discount-price').innerText = discountPrice;
    }
    promoCodeInput.value = "";
})