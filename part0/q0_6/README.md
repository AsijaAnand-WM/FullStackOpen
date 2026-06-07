> Create a diagram depicting the situation where the user creates a new note using the single-page version of the [Website](https://studies.cs.helsinki.fi/exampleapp/spa).

```mermaid
	sequenceDiagram
	participant browser
	participant server
	
	Note right of browser : User write something in the box and press save
	browser ->> server : A HTTP POST request to server address https://studies.cs.helsinki.fi/exampleapp/new_note_spa containing user input as JSON data including with timestamp.
	activate server
	server -->> browser : Code 201 Created
	deactivate server
	Note right of browser : The JS code prevents the default action when we press save, adds the new note to the list and sends this note to the server
```
