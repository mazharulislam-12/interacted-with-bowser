const addProduct = () =>{
    const productField = document.getElementById('produce-name')
    const quantityField = document.getElementById('produce-quantity')
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = ''
    quantityField.value = ''
    console.log(product, quantity);
    displayProduct(product, quantity)
    saveProductToLocalStorage(product, quantity)
} 
const displayProduct = (product, quantity) =>{
    const ul = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`
    ul.appendChild(li)
} 

const getStoredShoppingCard = () =>{
    let card = {}
    const storedCard = localStorage.getItem('card')
    if (storedCard) {
        card = JSON.parse(storedCard)
    }
    return card;
}

const saveProductToLocalStorage = (product, quantity) =>{
    const card = getStoredShoppingCard()
    card [product] = quantity;
    const cardStringified = JSON.stringify(card)
    localStorage.setItem('card', cardStringified)
}
const displayProductFromLocalStorage = () =>{
    const saveCard = getStoredShoppingCard()
    console.log(saveCard);
    for(const product in saveCard){
        const quantity = saveCard [product]
        console.log(product, quantity);
        displayProduct(product, quantity)
    }
}
displayProductFromLocalStorage()