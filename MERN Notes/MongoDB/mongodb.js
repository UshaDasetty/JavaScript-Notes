
/*


Mongo DB Notes:
===============

_______________________________________________________________________________________________________________________________________________________________________________________________________________________

COMMANDS:
---------

1. show dbs ->  To show the All DataBases.

2. use db MongoDB ->  To create Data Base and Switch to that Data Base.

3. cls -> Clears the terminal.

4. To delete the Database(Products)
    1. use Products
    2. db.dropDatabase()

5. To delete collection(products) in Database Products
    1. use Products
    2. db.products.drop()

6. 

_______________________________________________________________________________________________________________________________________________________________________________________________________________

1) How To Insert Document to the Collection in the Data Base
---------------------------------------------------------

1. db.Products.InsertOne({"name": "A Book", "price":250}); 

   db.Products.insertOne({"name": "A Shirt", "price":500, "Description": "This is a High Quality t-shirt"});
   
   db.Products.insertOne({"name": "A Computer", "price":5000, "Description": "This is a High Quality Computer", "Details": {"cpu":"intel core i7","memory":"32GB"}});

_______________________________________________________________________________________________________________________________________________________________________________________________________________________

2) How To Find All Documents In the DataBase
--------------------------------------------

  db.Products.find();     -> To show all the documents present in the Products Collection.

  db.Products.findOne();  -> It will return only one document that matches the condition. 

  db.Products.find().pretty();     -> To make the document Look Prettier and Understandable.

_______________________________________________________________________________________________________________________________________________________________________________________________________________________

3) Giving our own _id to the Document
------------------------------------

  db.flights.insertOne({"departureAirport": "TXL", "arrivalAirport": "LHR",_id: "txl-lhr-1"});

_______________________________________________________________________________________________________________________________________________________________________________________________________________________

4) CRUD Operations
------------------

1. Create

 insertOne(data, options)    -> Can insert only one Document at a time.
 insertMany(data, options)   -> Can insert Many Documents at a time.

______________________________________________________________________________

2. Read

 find(filter, options)     -> returns All the documents that matches the condition.
 findOne(filter, options)  -> return only first document that matches the condition.

______________________________________________________________________________

3. Update

 updateOne(filter, data, options)     -> Can update the only one document based on our conditions.
 updateMany(filter, data, options)    -> Can update many documents at a time based on our conditions.
 replaceOne(filter, data, options)    -> Can replace the fields with another fields to the documents.
 
______________________________________________________________________________

4. Delete

 deleteOne(filter, options)     -> Can delete the one document that matches the condition.
 deleteMany(filter, options)    -> Can delete many documents that matches the condition.


-> In the above flights Collections 
    i) can schedule(add) flight using Create Operation.
    ii) can update flight information using Update Operation.
    iii) can cancel flight using Delete Operation.
    iv) can display flight information using Read Operation.
_______________________________________________________________________________________________________________________________________________________________________________________________________________________

5) How To Use Insert, Find, Update and Delete Elements
-------------------------------------------------------

1. Delete Element

  i) db.flights.deleteOne({"departureAirport": "TXL"});  -> It will delete the first Document that matches the condition {"departureAirport": "TXL"}.

  ii) db.Products.deleteMany({})  -> It will delete all the documents present in the Products Collection.

_________________________________________________________________________________________________________

2. Update Element

 i) db.flights.updateOne({distance: 12000}, {$set: {marker: "delete"}})   -> It will upadate(added to) the first document that matches the condition {distance: 12000}.

 ii) db.flights.updateMany({}, {$set: {reachedDestination: true}})        -> It will upadate(added to) all the documents in the flights Collection.

 iii) db.flights.replaceOne({marker: 'delete'}, {departureAirport: 'MUC'})     -> It will search for {marker: "delete"} and it replace the entire document with {departureAirport: 'MUC'}.

      db.flights.replaceOne({_id: ObjectId('66ebf7824c722df3fa94121d')}, {departureAirport: 'TXL',arrivalAirport: 'LHS', aircraft: 'Airbus A390',distance: 1000,intercontinental: false})

_________________________________________________________________________________________________________

3. Insert Element

 i) db.flights.insertOne({"departureAirport": "TXL", "arrivalAirport": "LHR",_id: "txl-lhr-1"})    -> It will insert only one Document to the flights Collection.

 ii) db.family.insertMany([{"name": "Mouni", "age": 28},{"name": "Usha", "age": 25}])       -> It will insert Many documents to the collection using Array.


_________________________________________________________________________________________________________

4. Find Element

 i) db.flights.find({reachedDestination: true})     -> It will return all the documents where {reachedDestination: true}.

 ii) db.flights.find({distance: 12000})     -> It will return all the documents where {distance: 12000}.

     db.flights.find({distance: {$gt:1200}})   -> It will return all the documents where distance is greater than 1200.


_______________________________________________________________________________________________________________________________________________________________________________________________________________________

6) find() and Cursor Object
---------------------------

i) db.passengers.find().pretty()    -> When we have array of Documents(many documents), it will not return all documents at a time, instead it will ask to type "it" 
   to show remaining documents in the array. To overcome this problem we use Cursor Objects i.e., toArray() $ forEach().

_________________________________________________________________________________________________________

1. toArray
   
   db.passengers.find().toArray()    -> It will return Array of Documents in the passengers collection.

_________________________________________________________________________________________________________

2. forEach

   db.passengers.find().forEach((passengersData) => {printjson(passengersData)})     -> It will also return all the Documents in the passengers collection, but not in array.


_______________________________________________________________________________________________________________________________________________________________________________________________________________________

7) Projection
-------------

-> Projection means when we have 5 fields in a Database but we want only 2 fields in Application. In this case we use Projection. 
-> If we want include field we use {key: 1}, it will include only that field.
-> If we want to exclude field we use {key: 0}, it will exclude that field and return remaining all fields.

   i) db.passengers.find({}, {name: 1}, age: 1, _id: 0).pretty()     -> It will exclude all the Ids and will return only all name and age in the collection.

      db.passengers.find({age: {$gt:50} }, {age: 1, _id: 0, name:1}).pretty()     -> It will only return name and age, where age is greater than 50.
_______________________________________________________________________________________________________________________________________________________________________________________________________________________


8) Embedded Document
--------------------

-> Embedded Document means Document with nested data, Having two or more fields inside one field.

   eg: "name": {
      "fistname": "Dasetty",
      "middle name": "Usha",
      "last name": "Rani"
   }

-> A Document can have upto 100 levels of nesting.
-> Each Document size should be max 16MB.

_________________________________________________________________________________________________________

-> db.flights.updateMany({}, {$set: {status: {description: "on-Time", lastUpdated: "1 hour ago", details: {responsibility: "Max"}}}})

    {
        _id: ObjectId('66ec38d3759a7fea7c7edcb6'),
        departureAirport: 'MUC',
        arrivalAirport: 'SFO',
        aircraft: 'Airbus A380',
        distance: 12000,
        intercontinental: true,
        status: {
          description: 'on-Time',
          lastUpdated: '1 hour ago',
          details: { responsibility: 'Max' }
        }
    }

_________________________________________________________________________________________________________

-> Document can have arary of Embedded Document, and Array can hold any data.

-> db.family.updateOne({name: "Usha"},{$set: {hobbies: ["Learning","cooking"]}})

    {
    _id: ObjectId('66ec0c97759a7fea7c7edcb5'),
    name: 'Usha',
    age: 25,
    hobbies: [ 'Learning', 'cooking' ]
   }

_______________________________________________________________________________________________________________________________________________________________________________________________________________________

9) Accessing Structured Data(Nested Data)
-----------------------------------------

-> db.passengers.find({name: "Albert Twostone"}).pretty()    -> It will search for name with "Albert Twostone" and return that document.

-> db.family.findOne({name: "Usha"}).hobbies     -> It will return the array of hobbies of name "Usha"

    [ 'Learning', 'cooking' ]

-> db.family.findOne({name: "Usha"},{hobbies:1})     -> It will return the array of hobbies, but also with key and value.

       {
        _id: ObjectId('66ec0c97759a7fea7c7edcb5'),
        hobbies: [ 'Learning', 'cooking' ]
       }

-> db.family.find({hobbies: "cooking"}).pretty()     -> It will search for documents with hobbies "cooking" and return those documents.

       {
        _id: ObjectId('66ec0c97759a7fea7c7edcb5'),
        name: 'Usha',
        age: 25,
        hobbies: [ 'Learning', 'cooking' ]
      }

-> db.flights.find({"status.description": "on-Time"}).pretty()     -> Here we are searching for the document with nested data(2 level) as condition.
    
        {
        _id: ObjectId('66ec38d3759a7fea7c7edcb6'),
        departureAirport: 'MUC',
        arrivalAirport: 'SFO',
        aircraft: 'Airbus A380',
        distance: 12000,
        intercontinental: true,
        status: {
          description: 'on-Time',
          lastUpdated: '1 hour ago',
          details: { responsibility: 'Max' }
        }
      }

-> db.flights.find({"status.details.responsibility": "Max"}).pretty()     -> Here also we are searching for the document with nested data(3 level) as condition.

      {
    _id: ObjectId('66ec38d3759a7fea7c7edcb6'),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true,
    status: {
      description: 'on-Time',
      lastUpdated: '1 hour ago',
      details: { responsibility: 'Max' }
    }
  }

_______________________________________________________________________________________________________________________________________________________________________________________________________________________

10) Udemy Assignment
--------------------

-> 

_______________________________________________________________________________________________________________________________________________________________________________________________________________________

11) 






























*/