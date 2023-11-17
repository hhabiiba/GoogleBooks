const userInput = document.getElementById("searchInput")
const searchButton = document.getElementById("button")
const sendClickButton = document.getElementById("submit")
const results = document.querySelector(".results")

function searchClickButton ()
{
    let searchTerm = userInput.value;
    if (searchTerm === ""){
        alert("book name cannot be empty")
    }
    else {
        fetch (`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then (res => res.json())
        .then (data => {
            console.log(data)
            results.innerHTML = "";
            for(let i = 0; i < data.items.length; i++ ){
                const bookList = document.createElement("div")
                bookList.classList.add("book")
                const title = document.createElement("h2")
                title.textContent = data.items[i].volumeInfo.title;
                const author = document.createElement("h4")
                author.textContent = data.items[i].volumeInfo.authors;
                const imageBook = document.createElement("img")
                imageBook.src = data.items[i].volumeInfo.imageLinks.thumbnail;
                const publisher = document.createElement ("p")
                publisher.textContent = data.items[i].volumeInfo.publisher;
                bookList.appendChild(title)
                bookList.appendChild(author)
                bookList.appendChild(imageBook)
                bookList.appendChild(publisher)
                results.appendChild(bookList)
            }
        })
        .catch (err => console.log(err))
    }
}
searchButton.addEventListener("click", searchClickButton)




function sendButton() {
event.preventDefault();
const nameInput = document.getElementById("nameid").value;
const messageInput = document.getElementById("messageid").value;
fetch('https://6555594d84b36e3a431db80b.mockapi.io/Test', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body:JSON.stringify({
             "name": nameInput,
             "message": messageInput,
          }),

})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
}
sendClickButton.addEventListener('click', sendButton);





