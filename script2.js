const mobile_previous_btn = document.getElementById("mobile-previous")
const next_btn = document.getElementById("mobile_next")
const mobile_selected_item = document.getElementById("mobile_selected_item")
const mobile_minus = document.getElementById("mobile_minus")
const mobile_plus = document.getElementById("mobile_plus")
const mobile_num_products = document.getElementById("mobile_num_products")
const menu = document.querySelector("#menu")
const main_content = document.querySelector("#main-content")
const img_navigators = document.querySelector(".image-navigators")
const close_nav = document.querySelector(".nav_close")
const navigation_div = document.getElementById("navigation-div")
const mobile_cartimg = document.getElementById("mobile-cartimg")
const cartInfoDiv = document.getElementById("cart-info-div")
const numProducts = document.querySelector("#mobile_num_products")
const mobileAddToCart = document.querySelector("#mobile-addtocart-btn")
const itemsDescription = document.querySelector("#mobile-items-description")
const mobileNotifyer = document.querySelector("#mobile-notifyer-div")
const details = document.querySelector("#mobile-display-div")
const mobile_nums = document.querySelector(".mobileNumBoughtProducts")
const mobileDeleteIcon = document.querySelector("#mobile-delete-icon")

let mobile_number_products = 0

console.log("Mobile functionality script working");

const itemsArr = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"]

function showMenu() {
    console.log("Clicked")
    navigation_div.style.display = "block"
    img_navigators.style.position = "static"
    mobile_previous_btn.style.position = "static"
    main_content.style.backgroundColor = "hsl(219, 9%, 45%)"
}

function showCart() {
    cartInfoDiv.classList.toggle("displayMobileCart")
    console.log("cart clicked")
}

mobileAddToCart.addEventListener("click", () => {
    if (parseInt(numProducts.innerText) > 0) {
        let results = `Fall Limited Edition Sneakers<br>$125.00 x ${numProducts.innerText} <b>${125 * parseInt(numProducts.innerHTML)}.00</b>`
        itemsDescription.innerHTML = results
        mobile_nums.style.display = "block"
        mobile_nums.innerText = numProducts.innerText
        numProducts.innerText = "0"
        details.classList.remove("mobile-display-div")
        mobileNotifyer.classList.add("mobile-display-div")
    } else {
        mobile_nums.style.display = "none"
        details.classList.add("mobile-display-div")
        mobileNotifyer.classList.remove("mobile-display-div")
    }
})

mobileDeleteIcon.addEventListener("click", () => {
    mobile_nums.style.display = "none"
    details.classList.add("mobile-display-div")
    mobileNotifyer.classList.remove("mobile-display-div")
})

close_nav.addEventListener("click", () => {
    navigation_div.style.display = "none"
    img_navigators.style.position = "relative"
    mobile_previous_btn.style.position = "relative"
    main_content.style.backgroundColor = "white"
})

mobile_previous_btn.addEventListener("click", () => {
    let selectedItemSrc = mobile_selected_item.getAttribute("src")
    console.log(selectedItemSrc)
    changeToIndex = itemsArr.indexOf(selectedItemSrc) - 1
    if (changeToIndex >= 0 && changeToIndex <= 4) {
        mobile_selected_item.src = itemsArr[changeToIndex]
    } else {
        mobile_selected_item.src = itemsArr[0]
    }
})


next_btn.addEventListener("click", () => {
    let selectedItemSrc = mobile_selected_item.getAttribute("src")
    changeToIndex = itemsArr.indexOf(selectedItemSrc) + 1
    if (changeToIndex >= 0 && changeToIndex <= 3) {
        mobile_selected_item.src = itemsArr[changeToIndex]
    } else {
        mobile_selected_item.src = itemsArr[0]
    }
})

mobile_plus.addEventListener("click", () => {
    mobile_number_products += 1
    mobile_num_products.innerText = mobile_number_products
})

mobile_minus.addEventListener("click", () => {
    if (parseInt(mobile_num_products.innerText) > 0) {
        mobile_number_products -= 1
    }
    mobile_num_products.innerText = mobile_number_products
})
