const selected_item = document.getElementById("main_item")
const body = document.querySelector("body")
const nav = document.getElementById("nav")
const light_box = document.getElementById("flexdiv2")
const flexdiv = document.getElementById("flexdiv")
const close_icon = document.getElementById("close_icon")
const previous_button = document.getElementById("previous_button")
const next_button = document.getElementById("next_button")
const next_icon = document.querySelector(".icon-next")
const previous_icon = document.querySelector(".icon-previous")
const selected_img = document.getElementById("selected_img")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const num_products = document.getElementById("num_products")
const cartimg = document.getElementById("cartimg")
const num_of_shoes = document.getElementById("num_of_shoes")
const cartItems = document.getElementById("cartItemsDiv")
const addCartBtn = document.getElementById("addcart_btn")
const add_to_cart = document.getElementById("add_to_cart")
const display_div = document.getElementById("display-div")
const notifyer_div = document.getElementById("notifyer-div")
const description = document.getElementById("items-description")
const cartImgDiv = document.getElementById("cartimg_div")
const deleteIcon = document.getElementById("delete-icon")
const img_items = document.querySelectorAll(".lightbox-item")

const itemsArray = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"]

let number_of_products = 0

function cartimgDisplay() {
    cartItems.classList.toggle("displayCartItems")
}

function changeImage(id) {
    const img_items = document.querySelectorAll(".item")
    const element = document.getElementById(id)
    const src = element.getAttribute("src")
    let sliced = src.replace("-thumbnail", "")
    selected_item.src = sliced
    img_items.forEach(
        function (node) {
            node.classList.remove("selected")
        }
    )
    element.classList.add("selected")
}

function changeLightboxImage(id) {
    const element = document.getElementById(id)
    const src = element.getAttribute("src")
    let sliced = src.replace("-thumbnail", "")
    selected_img.src = sliced
    img_items.forEach(
        function (node) {
            node.classList.remove("selected")
        }
    )
    element.classList.add("selected")
}

function closeMouseOver() {
    close_icon.src = "images\\icon-close copy.svg"
}

function closeMouseOut() {
    close_icon.src = "images\\icon-close.svg"
}

selected_item.addEventListener("click", () => {
    light_box.style.display = "flex"
    body.style.backgroundColor = "hsl(219, 9%, 45%)"
    flexdiv.style.filter = "brightness(50%)"
    nav.style.filter = "brightness(50%)"
})

close_icon.addEventListener("click", () => {
    light_box.style.display = "none"
    body.style.backgroundColor = "hsl(0, 0%, 100%)"
    flexdiv.style.filter = "none"
    nav.style.filter = "none"
})

previous_button.addEventListener("click", () => {
    let selectedImgSrc = selected_img.getAttribute("src")
    let indexToChange = itemsArray.indexOf(selectedImgSrc) - 1
    if (indexToChange >= 0) {
        let change_item = itemsArray[indexToChange]
        selected_img.src = change_item
        let configed = change_item.replace(".jpg", "-thumbnail").replace("images/", "")
        const thumbnail = document.querySelector(`.${configed}`)
        img_items.forEach(
            function (node) {
                node.classList.remove("selected")
            }
        )
        thumbnail.classList.add("selected")
    } else {
        selected_img.src = itemsArray[0]
        img_items.forEach(
            function (node) {
                node.classList.remove("selected")
            }
        )
        document.querySelector(".image-product-1-thumbnail").classList.add("selected")
    }
})

next_button.addEventListener("click", () => {
    let selectedImgSrc = selected_img.getAttribute("src")
    let indexToChange = itemsArray.indexOf(selectedImgSrc) + 1
    if (indexToChange >= 0 && indexToChange <= 3) {
        let change_item = itemsArray[indexToChange]
        selected_img.src = change_item
        let configed = change_item.replace(".jpg", "-thumbnail").replace("images/", "")
        const thumbnail = document.querySelector(`.${configed}`)
        img_items.forEach(
            function (node) {
                node.classList.remove("selected")
            }
        )
        thumbnail.classList.add("selected")
    } else {
        return
    }
})

plus.addEventListener("click", () => {
    number_of_products += 1
    num_products.innerHTML = number_of_products
})

minus.addEventListener("click", () => {
    if (parseInt(num_products.innerText) > 0) {
        number_of_products -= 1
    }
    num_products.innerText = number_of_products
})

cartimg.addEventListener("click", cartimgDisplay)

function addToCart() {
    let amount_cart = num_products.innerText
    num_of_shoes.innerText = amount_cart
    cartImgDiv.style.marginTop = "5px"
    num_of_shoes.style.display = "block"
    notifyer_div.style.display = "none"
    display_div.style.display = "flex"
    description.innerHTML = `Fall Limited Edition Sneakers<br>$125.00 x ${amount_cart} <b>$${125 * parseInt(amount_cart)}.00</b>`
    num_products.innerText = "0"
}

function removeFromCart() {
    num_of_shoes.style.display = "none"
    notifyer_div.style.display = "flex"
    display_div.style.display = "none"
    cartImgDiv.style.marginTop = "19px"
}

add_to_cart.addEventListener("click", () => {
    let amount_cart = num_products.innerText
    if (parseInt(amount_cart) > 0) {
        addToCart()
    } else {
        removeFromCart()
    }
})

deleteIcon.addEventListener("click", () => {
    removeFromCart()
})