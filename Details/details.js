//Selectors
let rankItem = document.querySelector(".rank")
let publisherItem = document.querySelector(".publisher")
let titleItem = document.querySelector(".title")
let posterItem = document.querySelector(".book_image")
let descriptionItem = document.querySelector(".description")
let authorItem = document.querySelector(".author")
let buyContent = document.querySelector(".page__content-title-buy")


//LocalGet
let detailData = localStorage.getItem('detailData');
detailData = JSON.parse(detailData)


//Destructuring
const { rank, publisher, book_image, title, description, author, amazon_product_url } = detailData
//InnerHTML
rankItem.innerHTML = rank
publisherItem.innerHTML = publisher
posterItem.src = book_image
titleItem.innerHTML = title
descriptionItem.innerHTML = description
authorItem.innerHTML = author
// buyItem.href = amazon_product_url

detailData.buy_links.forEach(items => {
    const buyName = document.createElement("a");
    buyName.classList.add("buyName");
    buyName.innerHTML += `<br>${items.name}`
    buyName.href = items.url
    buyName.style.color = "black"
    buyName.style.zIndex = "100"
    buyContent.appendChild(buyName)
})



