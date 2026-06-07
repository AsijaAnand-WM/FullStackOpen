> Create a Diagram depicting what happens in the situation where the user creates a new note on the [Website](https://studies.cs.helsinki.fi/exampleapp/notes) by writing something into the text field and clicking the _Save_ button.

```mermaid
	sequenceDiagram
	participant browser
	participant server
	
	Note right of browser : User write something in the box and press save
	browser ->> server : A HTTP POST request to server address https://studies.cs.helsinki.fi/exampleapp/new_note containing user input.
	activate server
	server -->> browser : Code 302 Found, i.e, URL Redirect
	deactivate server
	Note left of server : URL Redirect - Server asks the browser to perform a new HTTP GET request to the address defined in Response Header Location (/exampleapp/notes)

	browser ->> server : GET https://studies.cs.helsinki.fi/exampleapp/notes
	activate server
	server -->> browser : HTML document
	deactivate server
	Note right of browser : Rendering of webpage starts
	Note right of browser : HTML document contains connections to /exampleapp/main.css and /exampleapp/main.js
	
	browser ->> server : GET https://studies.cs.helsinki.fi/exampleapp/main.css
	activate server
	server -->> browser : CSS File
	deactivate server
	
	browser ->> server : GET https://studies.cs.helsinki.fi/exampleapp/main.js
	activate server
	server -->> browser : JS File
	deactivate server
	Note right of browser: Execution of JS code led to fetching of a JSON File 
	
	browser ->> server : GET https://studies.cs.helsinki.fi/exampleapp/data.json
	activate server
	server -->> browser : JSON File
	deactivate server

	Note right of browser: Now Callback function in JS code will be executed by browser and the 'note website' is rendered properly
```
