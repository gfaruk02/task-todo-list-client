Live Link: https://todotask-77432.web.app/

======================
TasK Todo List
======================
1. Why Task todo List App?
Answer: This is a simple responsive task/todo list app for managing your daily tasks. It helps you create, edit, delete, and complete tasks on your task list. This app, created using the MERN stack technology, is designed for use on computers, tablets, and mobile devices.

2. How to use this?
Answer: Using the system is very easy. When you open this app, you'll notice its intuitive interface, making it simple to get started.
    1. Create Task List: You will find two input fields and one button:
        Title: Write your task title in this field.
        Description: Enter your task description in this field.
        Add Task Button: Once you've filled in the title and description, click the "Add Task" button.
        Confirmation:You should receive a confirmation alert indicating that your task has been successfully added.
    2. View all task:
        In the task section, you'll see a list of all your created tasks. Each task should display its title and description and edit, delete and complete button.
    3. Edit Button: this is a model option provide you task editing system and you'll be able to modify the task title and description.
    4. Delete Button: Click on "Delete" to remove the task from your list
    5. Complete Button: Click on "Complete" to indicate that the task has been finished. When you click complete then its show Completed.

    6. Compeleted Section: Navigate to the "Completed" section, where all your finished tasks are grouped together in one table.

  Thank You
=================

Provide a brief explanation of the code structure and key decisions you made.


Code Structure:

Client and Server Separation: client-side (React) and server-side (Node.js with Express).
The frontend code is task-todo-list-client folder, and the backend code is task-todo-list-server folder.

Backend (Node.js with Express):
Routes: write functionality for find,edit,delete, put data 
Middleware: Use middleware
Database (MongoDB):


Frontend (React.js):
Components: Organize components based on functionality. 
State Management: Depending on the application size and complexity
API Communication:Fetch or Axios
Custom hooks: user custom hook for fetching data

  