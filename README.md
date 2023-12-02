
# Admin

This project focuses on building an Admin User Interface that allows administrators to view and manage user data provided via an API. The goal is to create a functional UI to display user information, implement search and filter functionalities, enable editing and deletion of rows, and incorporate pagination.
## Key Features

- **Table Structure:** `Table.js` organizes the user data presentation, while `TableRow.js` handles individual user data rows, enabling editing, selection, and display of user information.

- **User Interaction:** `SearchBar.js` allows users to filter data based on different properties. `Pagination.js` manages pagination controls for navigating through user data. `DeleteButton.js` enables deletion of selected rows.

- **App Management:** `App.js` manages app state, conditional rendering of components based on search, deletion, and pagination. It coordinates communication between different components based on user actions.

- **API Interaction:** Fetches user data via a GET request from an API and adjusts pagination based on the number of returned records.

- **User Interaction Features:** Search and filter data, in-place editing and deletion of rows, selection of multiple rows with highlighting, paginated navigation controls, and a shortcut for selecting/deselecting all displayed rows.

- **Responsiveness:** UI components are designed to be responsive, adjusting to different screen sizes.



## Technologies Used

- React
- JavaScript
- HTML
- CSS


## Installation

To install and run Admin locally, follow these steps:

1.  Clone the repository:
    ```sh    
    git clone https://github.com/yash7488/Admin.git
    ```
    
2.  Navigate to the cloned repository:
     
    `cd Admin` 
    
3.  Install the dependencies for the frontend:
    
    ```sh    
    cd frontend
    npm install
    ``` 
    

    


## Running Admin

After completing the configuration steps, you can now run Admin locally.


1. Start the frontend development server:
	```sh
	cd frontend 
	npm start
	```
3. Access Admin in your browser at `http://localhost:3000`.

## Deployment

The application is deployed using [Netlify](https://www.netlify.com/) and accessible at [Live Link](https://radiant-zuccutto-450828.netlify.app).

To deploy the application on Netlify:
1. Push your code to a repository on GitHub.
2. Log in to Netlify and connect it to your GitHub repository.
3. Configure build settings, such as specifying the build command and output directory.
4. Deploy your site.

Once deployed, the application will be live at the provided Netlify URL.


