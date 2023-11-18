How It Functions💻

"BOOK SEARCH"
Search for Books:🔎📚
The homepage features an input field labeled "Search," accompanied by a corresponding "Search" button.
To locate books on a specific topic, input the desired topic into the designated field and click the "Search" button.

Google Books API Integration:🔗
Upon clicking the "Search" button, the application initiates a GET request to the Google Books API at https://www.googleapis.com/books/v1/volumes?q=${searchTerm}.
The API responds with a comprehensive list of books that align with the provided search term.

"SENDING PERSONALIZED MESSAGES" 
Send a Message:📤💬
The homepage includes a form with two input fields labeled "Name" and "Message," complemented by a "Send" button.
Enter your name and a personalized message into the respective input fields.

Mock API Integration:🔗
Upon clicking the "Send" button, the application executes a POST request to a custom mock API endpoint at https://6555594d84b36e3a431db80b.mockapi.io/Test.
If the POST request proves successful, a confirmation message is logged to the console, indicating the successful transmission of your message.

In the event of an error⚠️ during the POST request, an error message will be presented."Failed🚫".