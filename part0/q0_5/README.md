> Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at [Website](https://studies.cs.helsinki.fi/exampleapp/spa). 

```mermaid
	sequenceDiagram
	participant browser
	participant server
	
	browser ->> server : GET https://studies.cs.helsinki.fi/exampleapp/spa
	activate server
	server -->> browser : HTML document (spa)
	deactivate server
	Note right of browser : Rendering of webpage starts
	Note right of browser : HTML document contains connections to /exampleapp/main.css and /exampleapp/spa.js
	
	browser ->> server : GET https://studies.cs.helsinki.fi/exampleapp/main.css
	activate server
	server -->> browser : CSS File
	deactivate server
	
	browser ->> server : GET https://studies.cs.helsinki.fi/exampleapp/spa.js
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
