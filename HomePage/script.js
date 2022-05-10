//Selectors
const booksContainer = document.querySelector(".books-container")
const booksBox = document.querySelector(".books-box")
const BestsellerDateBooks = document.querySelector(".best-seller-books")
const loader = document.querySelector(".loader")

//Event Listener
BestsellerDateBooks.addEventListener("change", getDateFilm)
getDateList(BestsellerDateBooks.value)


function getDateFilm() {
    booksBox.innerHTML = ""
    getDateList(BestsellerDateBooks.value)
};

//API
function getDateList(published) {
    loader.style.display = "block";
    fetch(`https://api.nytimes.com/svc/books/v3/lists/${published}/hardcover-fiction.json?api-key=Dn5PTqs4Gd1irM9bD0vcm9NNFauJaEpn`)
        .then((response) => response.json())
        .then(res => {
            res.results.books.forEach(item => {

                //Books Card Creator
                const booksCard = document.createElement("div")
                booksCard.classList.add("books-card")

                const rank = document.createElement("h2");
                rank.classList.add("rank");
                rank.innerHTML = item.rank;

                const poster = document.createElement("img");
                poster.classList.add("books-image");
                poster.src = item.book_image
                poster.setAttribute("target", "_blank")

                poster.addEventListener("click", setDetails)

                function setDetails() {
                    localStorage.setItem('detailData', JSON.stringify(item));
                    window.open("/Details/details.html");
                }

                const title = document.createElement("h2");
                title.classList.add("title");
                title.innerHTML = item.title;

                const author = document.createElement("p");
                author.classList.add("author");
                author.innerHTML = `by ${item.author}`

                const description = document.createElement("p");
                description.classList.add("description");
                description.innerHTML = item.description;



                booksCard.appendChild(rank);
                booksCard.appendChild(poster);
                booksCard.appendChild(title);
                booksCard.appendChild(author);
                booksCard.appendChild(description);
                booksBox.appendChild(booksCard);
            })
        })
        .catch(err => console.log(err))
        .finally(() => loader.style.display = "none");
}