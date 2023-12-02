
# Admin

The Question Paper Generator is a full-stack application designed to dynamically create question papers based on various criteria such as total marks and distribution of difficulty levels. The project is structured with a backend built on Node.js and Express, while the frontend is developed using React.
## Key Features:

1.  **Dynamic Question Generation:**  Generates question papers based on specified total marks and difficulty distribution.
   
2.  **Backend with Express:**  Utilizes Node.js and Express for handling routes, data logic, and generation of question papers.
    
3.  **Frontend with React:**  Provides a user-friendly interface for configuring parameters and displaying the generated question paper.
    
4.  **Modularized Codebase:**  Organized structure with separate directories for backend and frontend components for enhanced maintainability.
    


## Technology Stack

Question_paper_generator is built using the following technologies:

-   **Frontend**: React.js
-   **Backend**: Node.js with Express.js

## Project Structure
 **Backend Structure:**
-   **backend/ Directory:** Contains the server-side code.
-   **data/ Directory:** Holds data files or data access logic.
-   **routes/ Directory:** Contains Express routes for handling questions.
-   **controllers/ Directory:** Includes logic for generating the question paper.
-   **index.js File:** Entry point for the Express application.

 **Frontend Structure:**
-   **frontend/ Directory:** Houses the client-side code..
-   **src/ Directory:** Holds the React application source code.
-   **components/ Directory:** Contains various React components
-   **App.js File:** Main React app component.
-   **index.js File:** Entry point for the React app.
## Installation

To install and run Question_paper_generator locally, follow these steps:

1.  Clone the repository:
    ```sh    
    git clone https://github.com/yash7488/Question_paper_generator.git
    ```
    
2.  Navigate to the cloned repository:
     
    `cd Question_paper_generator` 
    
3.  Install the dependencies for the frontend:
    
    ```sh    
    cd frontend
    npm install
    ``` 
    
4.  Install the dependencies for the backend:
        
    ```sh    
    cd ../backend
    npm install
    ```
    


## Running Question_paper_generator

After completing the configuration steps, you can now run Question_paper_generator locally.

1.  Start the backend server:
	```sh
	cd backend 
	node index.js
	```
2. Start the frontend development server:
	```sh
	cd ../frontend 
	npm start
	```
3. Access Question_paper_generator in your browser at `http://localhost:3000`.



