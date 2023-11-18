//👀👋...

// References to HTML elements for book search..^_^
const userInput = document.getElementById("searchInput")
const searchButton = document.getElementById("button")
const sendClickButton = document.getElementById("submit")
const results = document.querySelector(".results")

// Function to handle the book search btn click..-_-
function searchClickButton (){ 

    // To get the UI value..^_^
    let searchTerm = userInput.value;

     // Checkin' if the search term is empty duh!
    if (searchTerm === ""){
        alert("book name cannot be empty")
    }
    else {
          // Makin' a GET request to the Google Books API..ಥ_ಥ
        fetch (`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then (res => res.json())
        .then (data => {
            console.log(data)

            // To clear previous results duh!
            results.innerHTML = "";

            // Displayin' book info in the results container..^_^
            for(let i = 0; i < data.items.length; i++ ){
                const bookList = document.createElement("div")
                bookList.classList.add("book")

                // Createin an anchor element for the "Click to View on Google Books" link..^_^
                const infoLink = document.createElement("a");
                infoLink.href = data.items[i].volumeInfo.infoLink;
                infoLink.target = "_blank"; // Opens link in a new tab duh!
                infoLink.textContent = "View on Google Books:)";
                infoLink.classList.add("info-link"); 
                
                // Creatin' elements for book title, author, img, publisher n text snippet..^_^
                const title = document.createElement("h2")
                title.textContent = data.items[i].volumeInfo.title;

                const author = document.createElement("h4")
                author.textContent = data.items[i].volumeInfo.authors;

                const imageBook = document.createElement("img")
                imageBook.src = data.items[i].volumeInfo.imageLinks.thumbnail;

                const publisher = document.createElement ("p")
                publisher.textContent = data.items[i].volumeInfo.publisher;

                const textSnippet = document.createElement("h6");
                textSnippet.textContent = data.items[i].searchInfo.textSnippet;
                textSnippet.classList.add("text"); 

                // Append elements to the book container..^_^
                bookList.appendChild(title)
                bookList.appendChild(author)
                bookList.appendChild(imageBook)
                bookList.appendChild(publisher)
                bookList.appendChild(textSnippet);
                bookList.appendChild(infoLink);
                results.appendChild(bookList)
            }
        })
        .catch (err => console.log(err))
    }
}
// Event listener for the book search btn click..^_^
searchButton.addEventListener("click", searchClickButton)

// Function to handle the send btn for the POST request..-_-
function sendButton() {

event.preventDefault();// dis prevents the default behavior of the event.

 // Values from input fields..^_^
const nameInput = document.getElementById("nameid").value;
const messageInput = document.getElementById("messageid").value;

 // Makin a POST request to the mock API..ಥ_ಥ
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
// Event listener for the send button click..^_^
sendClickButton.addEventListener('click', sendButton);





