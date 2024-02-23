# store_api
A store management application with search fuctionality

# Add starter folder and run npm install
To install dependencies: npm install
import the dotenv lib

THe middleware with Page not found created and error handler

# connect to db
Use same cluster or db
Copy the connection string: atlas -> Database -> data services -> connection -> Driver -> connection string

create .env file in the root and paste the conection string
MONGO_URI=mongodb+srv://benjy:1993@nodeexpressprojects.7yzqwfq.mongodb.net/?retryWrites=true&w=majority

Then, create a db folder, connect.js file for mongoose connection, with connectDB function which returns a promise

# Routes
Set up a middle warefor all routes with app.use()
Create a controller methods to use the route
Set up a router from express module and import controller methods into router
Import router into App.js and add to the middleware routes as another parameter
Test http://localhost:3000/api/v1/products

# Postman
New collection : Store-API
New request for test
