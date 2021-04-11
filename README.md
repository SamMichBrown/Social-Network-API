  # Social Network API

  ## Description

  This App uses NoSQL and Mongoose functionality to create a simple Social Network, using CRUD functions on users, friends thoughts (like posts!) and even reactions on a particular users thought!

  Links: 
  
-

-

  ### Installation
  
  ```
  npm i
  ```

  ### Usage

  Ensure that you have an API client installed such as insomnia. Clone this repo and then start the server using `npm start`. Use the following routes to try out the App.

   ###User Routes
   ---
   - GET all users `localhost:3001/api/users`
   - GET user by Id `localhost:3001/api/users/:userId`
   - POST user `localhost:3001/api/users`
   - PUT user `localhost:3001/api/users/:userId`
   - DELETE `localhost:3001/api/users/:userId`

   ###Thought Routes
   ---
   - GET all thoughts `localhost:3001/api/thoughts`
   - GET thought by Id `localhost:3001/api/thoughts/:userId`
   - POST thought `localhost:3001/api/thoughts`
   - PUT thought `localhost:3001/api/thoughts/:thoughtId`
   - DELETE `localhost:3001/api/thoughts/:thoughtId`

   ###Reaction Routes
   ---
   - POST reaction `localhost:3001/api/:thoughtId/reactions`
   - DELETE reaction `localhost:3001/api/:thoughtId/reactions/:reactionId`

   ###Friend Routes
   ---
   - POST('add') friend `localhost:3001/api/users/:id/friends/:friendId`
   - DELETE friend `localhost:3001/api/users/:id/friends/:friendId`


  ### Contributing
  
 Samantha Brown (c) Github - https://github.com/SamMichBrown

## Screenshots
