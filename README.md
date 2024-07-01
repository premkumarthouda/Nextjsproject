In this project we want to develop an frontned aplllication.

Milestone 1: Initial Setup

Project Setup:

Frontend: Set up a new Next.js project.🌐

Backend: Set up a new NestJS project.🔧

Version Control: Initialize a Git repository for version control. 🗃️

Milestone 2: Basic Frontend Structure

Project Structure:

Follow best practices for code structure and modularization in the Next.js project.

Create basic components (e.g., TreeNode, Tree).

User Authentication:

Implement a simple username input form.

Set up state management (e.g., React context or Redux) for managing user state.

Milestone 3: Backend Structure and User Management

Backend Setup:

Set up the basic structure for the NestJS project.

Database Integration:

Integrate a database (e.g., MongoDB, PostgreSQL). 🗄️

Design and implement a schema for storing user information and tree structures.📝

API Endpoints for User Management:

Create an endpoint to validate and register unique usernames. 🔐

Implement robust input validation and error handling for these endpoints.

Milestone 4: Tree Data Structure and State Management

Tree Data Structure:

Implement a data structure to represent a tree with a depth of 10,000 nodes in the front end. 🌳

Initialize each node with the value 1.

State Management:

Use appropriate state management to manage the tree's state efficiently.

Milestone 5: Basic Tree UI and Node Interaction

Tree UI Components:

Create React components to represent tree nodes.🖼️

Design a UI that can handle a tree with significant depth, considering performance and usability.⚙️

Node Interaction:

Implement functionality to handle clicks on leaf nodes.

Ensure that when a leaf node is clicked, we can edit its value, and its value is updated and propagated up to all its parent nodes.

Milestone 6: API Endpoints for Tree Management

API Endpoints for Tree Operations:

Implement an endpoint to save the entire tree structure for a given username.

Create an endpoint to retrieve a saved tree structure for a username.

Ensure robust input validation and error handling for these endpoints.

Milestone 7: Frontend-Backend Integration

API Communication:

Set up secure communication between the Next.js frontend and the NestJS backend.

Implement proper error handling for network requests.🚦

Save Functionality:

Add a "Save" button to the front end.

Implement logic to ensure all updates are complete before saving.

Send the entire tree structure to the backend when the "Save" button is clicked.

Milestone 8: Performance Optimization

Optimization Techniques:

Optimize both frontend and backend to handle large tree structures efficiently.⚡

Implement lazy loading or virtualization techniques if necessary.💤
