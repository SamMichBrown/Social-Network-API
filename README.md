  # Social Network API

  ## Description

  This App uses NoSQL and Mongoose functionality to create a simple Social Network, using CRUD functions on users, friends thoughts (like posts!) and even reactions on a particular users thought!

  Links: 
  
-

-

  ## Installation
  
  ```
  npm i
  ```

  ## Usage

  Ensure that you have an API client installed such as insomnia. Clone this repo and then start the server using `npm start`. Use the following routes to try out the App.

   User Routes
   ---
   - GET all users `localhost:3001/api/users`
   - GET user by Id `localhost:3001/api/users/:userId`
   - POST user `localhost:3001/api/users`
   - PUT user `localhost:3001/api/users/:userId`
   - DELETE `localhost:3001/api/users/:userId`

   Thought Routes
   ---
   - GET all thoughts `localhost:3001/api/thoughts`
   - GET thought by Id `localhost:3001/api/thoughts/:userId`
   - POST thought `localhost:3001/api/thoughts`
   - PUT thought `localhost:3001/api/thoughts/:thoughtId`
   - DELETE `localhost:3001/api/thoughts/:thoughtId`

   Reaction Routes
   ---
   - POST reaction `localhost:3001/api/:thoughtId/reactions`
   - DELETE reaction `localhost:3001/api/:thoughtId/reactions/:reactionId`

   Friend Routes
   ---
   - POST('add') friend `localhost:3001/api/users/:id/friends/:friendId`
   - DELETE friend `localhost:3001/api/users/:id/friends/:friendId`


  ## Contributing
  
  Samantha Brown (c) Github - https://github.com/SamMichBrown

  ## Screenshots

  ### Create a new user
  ---
  ![Screenshot 2021-04-11 193957](https://user-images.githubusercontent.com/71106177/114325372-c5bf8b00-9afd-11eb-8680-af1320b686eb.png)

  ### Get all users
  ---
  ![find all users](https://user-images.githubusercontent.com/71106177/114325402-f6072980-9afd-11eb-92d5-1653468867fb.png)

  ### Get all thoughts
  ---
  ![get all thoughts](https://user-images.githubusercontent.com/71106177/114325413-08816300-9afe-11eb-93c7-cd1bf0b128a9.png)

