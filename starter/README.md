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

# Async errors
express-async-error built in package already .... npmjs.com... npm install express-async-errors --save
import into App.js
Go to controller, throw the error---- no try catch block needed
Then to error handler (handles how the error is being displayed) , to log the error for a test
Also, check the error log on the console
No need for next() as the throw new Error suffice

# product model
Using the provided API to create a backend schema
Mongoose to create the schema object
NB: enum for items in a drop-down

# populate to db
so as to filter data . Manual using post route or automate
for this project: products.json file created - an array of objects
create a js file - populate.js

//Just like the way we connected to db in App.js
using our env var - dotenv, connect to db, connect to our model, lastly our data we are passing
Then connect to db, using model to populate
create an async await to connect to db just like we did in App.js
stop the server and use the node populate to spin to test our connection

Remove all the product and use .create() i.e Task.create(req.body), just like what we have in the previous Task project - controller - createTask method, so pass these array of object in product.json
Add another await to populate db
node populate to run
Go to Atlas to check
Edit the .env to create a db name ?STORE_API i atlas

# Basic find
Using static
find to search- mongoosejs 
go to controller , import model product
use with static method first to find({}) all products
Test with postman 

# Query param
using dynamic way- search
? to our route , i.e /products?name=john. postman params can alos be used 
with check botton and send with postman
log the output req query in the controller method
console.log(req.query) to test on the console
Then pass req.query in the find()
Postman - {{URL}}/products?featured=true

# mongoose v6 update
before returns empty onject if property not found

# Refractor with query object
When query gets complex
We need to filter property
NB: if we pas the 2 properties and one is unknown, it will filter the correct property
 //if featured exists in the query,set a new property in queryObject, object.property
But if everything is unknown, it diplays all products

# company
add the company propery to req.query
add the if condition to check if company property is passed
if wrong company name is passed, returns empty object - hn.angolia.com/api/v1/search


# search with regex
resource - mongodb query operators
{{URL}}/products?name=a&featured=true

# sort
using browser url
?sort=name - asc
?sort=-name - desc
?sort=name,price - chain
?sort=-name,-price - chain
using mongoose
filter with find()
Product.find({}).sort('-name')
Product.find({}).sort('-name price') -chain

# sort implementation
using postman: sort param
add sort as a request param property
remove the await from find() as we are going to chain sort to it
await should be after sort()
we are getting all products before we await for result
for chain, split into array then join them together
{{URL}}/products?sort=-name,-price

# select
Browser: fields?name,price
Postman: {{URL}}/products/static  without passing anything
In implementation, pass any property in query for search
NB: can be used with sort in the postman param
{{URL}}/products?sort=-name,-price&fields=name,price

# limit and skip
test with static method using postman

# pagination
with implementation
since req.query returns a string , we cast them with Number
if none is provided, return another thing or default, i.e || default

# filter
?numericFilters=price>12&sort=price  -- browser
Test the above with static
We call the numericFilter, and pass the regex to see if there
a match, then convert symbols to mongoose syntax $gt.

# filter contd..
To consider other option to pass , like price and rating as they cannot be converted to mongoose regexp

split() object into array
and iterate over the array
Now, array destructuring for output of regex, price-$gt-40, const [field,operator,value]
If priice and rating known as fiels are present in the array, then add property to queryObject

Resource: Array destructuring

{ price: { '$gte': 60 }, rating: { '$gte': 4 } }











