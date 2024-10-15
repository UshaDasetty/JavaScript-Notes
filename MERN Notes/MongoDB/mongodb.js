
/*


Mongo DB Notes:
===============

MongoDB Link: https://www.mongodb.com/docs/manual/

=======================================================================================================================================================================================================================
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

6. mongoimport -> mongoimport -d cars -c carsList --drop --jsonArray

=======================================================================================================================================================================================================================

1) How To Insert Document to the Collection in the Data Base
---------------------------------------------------------

1. db.Products.InsertOne({"name": "A Book", "price":250}); 

   db.Products.insertOne({"name": "A Shirt", "price":500, "Description": "This is a High Quality t-shirt"});
   
   db.Products.insertOne({"name": "A Computer", "price":5000, "Description": "This is a High Quality Computer", "Details": {"cpu":"intel core i7","memory":"32GB"}});

=======================================================================================================================================================================================================================

2) How To Find All Documents In the DataBase
--------------------------------------------

  db.Products.find();     -> To show all the documents present in the Products Collection.

  db.Products.findOne();  -> It will return only one document that matches the condition. 

  db.Products.find().pretty();     -> To make the document Look Prettier and Understandable.

=======================================================================================================================================================================================================================

3) Giving our own _id to the Document
------------------------------------

  db.flights.insertOne({"departureAirport": "TXL", "arrivalAirport": "LHR",_id: "txl-lhr-1"});

=======================================================================================================================================================================================================================

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
=======================================================================================================================================================================================================================

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

iii) db.tvShows.findOne({}) -> It will return the first document in the collection.


=======================================================================================================================================================================================================================

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


=======================================================================================================================================================================================================================

7) Projection
-------------

-> Projection means when we have 5 fields in a Database but we want only 2 fields in Application. In this case we use Projection. 
-> If we want include field we use {key: 1}, it will include only that field.
-> If we want to exclude field we use {key: 0}, it will exclude that field and return remaining all fields.

   i) db.passengers.find({}, {name: 1}, age: 1, _id: 0).pretty()     -> It will exclude all the Ids and will return only all name and age in the collection.

      db.passengers.find({age: {$gt:50} }, {age: 1, _id: 0, name:1}).pretty()     -> It will only return name and age, where age is greater than 50.
=======================================================================================================================================================================================================================


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

=======================================================================================================================================================================================================================

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

=======================================================================================================================================================================================================================

10) Udemy Assignment
--------------------

-> 


=======================================================================================================================================================================================================================

11) Data Types in MongoDB
-------------------------

-> MongoDB supports various data types to store different kinds of values in documents. Here are some common MongoDB data types:

    1. String: Stores textual data (UTF-8).

    2. Integer: Stores numerical values (32-bit or 64-bit depending on the platform).

    3. Double: Stores floating-point values.

    4. Boolean: Stores true or false.

    5. Array: Stores arrays of values, including other arrays.

    6. Object: Stores embedded documents (key-value pairs).

    7. ObjectId: A unique 12-byte identifier used for primary keys in MongoDB.

    8. Date: Stores dates or times, including both date and time in UTC format.

    9. Binary: Stores binary data, often used for storing files like images.

    10. Null: Represents null values.

    11. Regex: Stores regular expressions.

    12. Timestamp: Special type for storing a timestamp.

    13. Decimal128: Stores high-precision decimal values.

    14. Min/Max Keys: Internal types used to compare values against the lowest and highest BSON values.

-> These data types help structure data in a flexible, schema-less way, making MongoDB highly adaptable to different types of applications.

=======================================================================================================================================================================================================================

12) Data Schemas in MongoDB
---------------------------

-> In MongoDB, schemas are not enforced at the database level, as it is a NoSQL database and uses a flexible schema design. However, a schema can still be thought of as the 
   structure or blueprint of how data is organized within a collection.

-> Below are the examples that every document is different in the same collection. It means having no Schema.

    Product Collection (very different documents):
    ...............................................

    {
     "title": "Book",
     "price": 12.99
    }


    {
     "name": "Bottle",
     "available": true
    }

_________________________________________________________________________________________________________


    Product Collection (Extra Data):
    ..................................

    {
     "title": "Book",
     "price": 12.99
    }


    {
     "name": "Bottle",
     "price": 5.99
     "available": true
    }


_________________________________________________________________________________________________________


    Product Collection (Full Equality):
    .....................................

    {
     "title": "Book",
     "price": 12.99
    }


    {
     "title": "Bottle",
     "price": 5.99
    }

_________________________________________________________________________________________________________


-> While MongoDB allows documents within a collection to have varying structures, many applications define schemas to ensure consistency and data integrity. 
   These schemas typically define:
 
    1. Fields: The expected key names.

    2. Data Types: The expected types for each field (e.g., String, Number, Date).

    3. Validation Rules: Rules that data must follow, such as required fields, minimum or maximum values.

    4. Indexes: To optimize queries.

-> In many cases, libraries such as Mongoose (used with Node.js) are used to define schemas for MongoDB collections, enforcing some level of structure and validation at 
   the application level.

    example:-

    const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({
      name: { type: String, required: true },
      age: { type: Number, required: true },
      email: { type: String, required: true },
    });

    const User = mongoose.model('User', userSchema);


    In this example, a user schema is defined with fields like name, age, and email, each having its own type and validation.


===============================================================================================================================================================================================

13) Data Modelling(Designing Schemas for Application)
-----------------------------------------------------

-> In MongoDB, data modeling and schema design are essential for efficient querying and data retrieval. Unlike traditional relational databases that follow strict table 
   structures, MongoDB uses a more flexible, document-based model that allows for dynamic schema design.

-> Key Concepts in MongoDB Data Modeling

    1. Documents: MongoDB stores data as documents (BSON format), which are JSON-like objects.

    2. Collections: Documents are grouped into collections, similar to tables in relational databases.

    3. Dynamic Schema: MongoDB doesn't enforce a strict schema on documents, allowing for variations in structure within the same collection.

    4. Normalization vs. Denormalization: Depending on the use case, you can choose to either normalize (split related data across multiple collections) or 
       denormalize (embed related data in the same document).

-> Data Modeling Best Practices in MongoDB

    1. Understand your application’s data access patterns: Schema design should be based on how your application queries and updates data. For example, frequently 
       accessed data can be embedded to avoid costly joins (which MongoDB doesn’t natively support).

    2. Embed or Reference: Embedding is ideal for one-to-few relationships or when data is read together, while referencing is better for one-to-many or 
       many-to-many relationships.

    3. Use proper indexes: Indexes play a crucial role in improving query performance. Ensure the fields most commonly queried are indexed.

    4. Document size: MongoDB documents have a 16MB size limit, so avoid excessively large documents.

    5. Aggregation framework: MongoDB’s aggregation pipeline allows you to query, transform, and aggregate your data in a flexible manner.

-> Example Schema Design for an E-commerce Application

    1. Customers Collection
    ........................

        {
          "_id": 101,
          "name": "Alice",
          "email": "alice@example.com",
          "address": {
            "street": "123 Main St",
            "city": "Some City",
            "zip": "12345"
          },
          "orders": [
            {
              "order_id": "ORD123",
              "date": "2024-09-20",
              "total_price": 1500
            }
          ]
        }

_________________________________________________________________________________________________________


    2. Products Collection
    .......................

        {
          "_id": "P001",
          "name": "Laptop",
          "price": 1000,
          "category": "Electronics",
          "stock": 20
        }

_________________________________________________________________________________________________________

    3. Orders Collection
    .....................

        {
          "_id": "ORD123",
          "customer_id": 101,
          "items": [
            {
              "product_id": "P001",
              "product_name": "Laptop",
              "quantity": 1
            }
          ],
          "total_price": 1500,
          "status": "Shipped"
        }

_________________________________________________________________________________________________________

-> In this case, orders are referenced by both the customer and product collections to avoid data duplication while ensuring relationships between the documents are 
   maintained.

=======================================================================================================================================================================================================================


14) Relations in MongoDB
------------------------

-> In MongoDB, relationships between data are handled differently compared to traditional relational databases. 
   There are two main ways to represent relationships:


   1. Embedded Documents (Denormalized Relationship)
   .................................................

        i) Description: MongoDB allows you to embed related documents directly within a single document. This approach is called denormalization.

        ii) Use Case: Best for one-to-few or one-to-many relationships, where the related data is not too large and is tightly coupled. 
                  This makes reading data faster as all the related information is stored in one document.

        iii) DisAdvantage: When we have Large Data Their might have lot of data dulpication which is very difficult to update.

            eg: 

            {
              "user": "usha",
              "Fav Book": [{....}, {....}]
            }

            {
              "user": "mouni",
              "Fav Book": [{....}, {....}]
            }
        
            -> In this case different user might have same Fav Books, so we have to update one Book details then we have to update every user documment where that book is present.
               This is very difficult to work on with. To Over this scenario we use References(Normalisation).

        
        iv) examples to Denormalized Relationship

            {
              "_id": 1,
              "name": "John",
              "orders": [

                { 
                "order_id": 101, 
                "product": "Laptop", 
                "quantity": 1 
                },

                { 
                "order_id": 102, 
                "product": "Phone", 
                "quantity": 2 
                }

              ]
            }



            {
                "user": "max",
                "age": 29,
                "address": {
                "street": "second street",
                "city": "New York"
                }
            }

_________________________________________________________________________________________________________

    2. References (Normalized Relationship)
    .......................................

        i) Description: Instead of embedding documents, you can store references (like foreign keys in relational databases) to related documents in separate collections.

        ii) Use Case: Best for one-to-many or many-to-many relationships, where the related data is large, frequently updated, or shared across different documents.

        iii) examples to Normalized Relationship

            Customer Collection:

            {
              "_id": 1,
              "name": "John",
              "order_ids": [101, 102]
            }


            Orders Collection

            {
              "_id": 101,
              "product": "Laptop",
              "quantity": 1
            }


        iv) To get the related data, you would need to perform two separate queries: one for the main document and another for the referenced document.

_________________________________________________________________________________________________________


=======================================================================================================================================================================================================================

15) One To One Embededed RelationShip
-------------------------------------

-> In MongoDB, a one-to-one embedded relationship occurs when you embed one document inside another document. This structure is commonly used when you know that the 
   related data will always be used together and won't grow in size, making it efficient to store them in a single document.

        example 1: Patients Collection
        ...............................

          {
            _id: ObjectId('66f280627a9ca9fe8a7d892a'),
            name: 'Max',
            age: 29,
            diseaseSummary: { diseases: [ 'cold', 'broken leg' ] }
          }

-> Consider a scenario where you have a User collection, and each user has a profile. Since each user has only one profile and the profile only belongs to one user, 
   this is a one-to-one relationship. In this case, you can embed the profile directly within the user document.

        example 2: User Collection
        ...............

        {
           "_id": ObjectId("someUserId"),
           "name": "John Doe",
           "email": "johndoe@example.com",
           "profile": {
              "age": 30,
              "gender": "Male",
              "address": {
                 "street": "123 Main St",
                 "city": "Anytown",
                 "state": "CA"
              }
           }
        }


        i) The 'profile' object is embedded inside the 'User' document.
        ii) This creates a one-to-one relationship where each user has exactly one profile.


-> Benefits of One-to-One Embedded Relationships:

    i) Simplicity:  All the related data is stored together in a single document.

    ii) Efficiency:  Retrieving the user document will also retrieve the profile, reducing the need for multiple queries.


-> When to Avoid Embedded Relationships:

    i) If the related data is expected to grow large or if it will be queried independently, it might be better to use a referenced relationship instead.


=======================================================================================================================================================================================================================

16) One To One Reference RelationShip
-------------------------------------

-> In MongoDB, a one-to-one reference relationship occurs when two documents are related but stored in different collections. Instead of embedding one document inside another,
   you use a reference (typically an _id) to link them.

        example 1: 

            Persons Collection:
            ...................

              {
                _id: ObjectId('66f283467a9ca9fe8a7d892b'),
                name: 'Max',
                age: 29,
                salary: 3000
              }

            Cars Collection:
            ................

              {
                _id: ObjectId('66f284a07a9ca9fe8a7d892e'),
                model: 'BMW',
                price: 40000,
                owner: ObjectId('66f283467a9ca9fe8a7d892b')
              }

-> Consider a scenario where you have a User collection and a Profile collection. Each user has exactly one profile, and each profile belongs to one user. 
   You can reference the Profile document from the User document using the profile’s _id.

        example 2:

            User Collection:
            ................

                {
                   "_id": ObjectId("someUserId"),
                   "name": "John Doe",
                   "email": "johndoe@example.com",
                   "profile_id": ObjectId("someProfileId")  // Reference to the Profile document
                }



            Profile Collection: 
            ....................

                {
                   "_id": ObjectId("someProfileId"),
                   "age": 30,
                   "gender": "Male",
                   "address": {
                      "street": "123 Main St",
                      "city": "Anytown",
                      "state": "CA"
                   }
                }

                i) In the User document, you store the _id of the related Profile document as a reference (profile_id).
                
                ii) When you need the profile data, you query the Profile collection using the stored profile_id.

-> Benefits of One-to-One Reference Relationships:

    i) Data Separation: The User and Profile documents are stored in separate collections, which can help if either document grows or becomes too large to embed.

    ii) Flexibility: Each document can be independently updated or retrieved.

    iii) Efficient Querying: If profiles are only needed occasionally, it avoids retrieving unnecessary data.

-> Drawbacks:

    i) Additional Queries: You need to perform multiple queries to fetch related documents, which can add complexity and slightly reduce performance.

-> When to Use:

    i) Use a one-to-one reference relationship when the related data (e.g., profile) is large or frequently queried on its own, and you prefer to keep it separate from 
       the main document (e.g., user).

=======================================================================================================================================================================================================================

17) One To Many Embedded Relationship:
---------------------------------------

-> In MongoDB, a one-to-many embedded relationship is a common data modeling pattern where one document contains multiple subdocuments within it. This is especially useful 
   when the "many" side of the relationship is closely associated with the "one" and does not need to be accessed independently.


        example 1: questionThread Collection:
        .....................................

          {
            _id: ObjectId('66f297777a9ca9fe8a7d892f'),
            creater: 'Max',
            question: 'How does it work?',
            answers: [ { text: 'It works like that' }, { text: 'Thankyou' } ]
          }

-> Let’s say you have a User and each user can have multiple addresses. The addresses will be embedded in the user document.

        example 2: User Collection:
        ...........................

            {
               "_id": "user1",
               "name": "John Doe",
               "email": "johndoe@example.com",
               "addresses": [
                  {
                     "street": "123 Main St",
                     "city": "New York",
                     "zip": "10001"
                  },
                  {
                     "street": "456 Oak St",
                     "city": "Boston",
                     "zip": "02118"
                  }
               ]
            }

            i) In this case, the "addresses" field contains an array of subdocuments. Each subdocument represents an address, and all addresses are embedded directly 
               within the user's document.

-> When to Use Embedded Relationships:

    i) The "many" items (like addresses) are typically accessed along with the parent document (user).

    ii) You don't need to query the "many" items independently.

    iii) The number of "many" items is relatively small, so embedding them won't result in a large document size.


=======================================================================================================================================================================================================================

18) One To Many Reference Relationship:
---------------------------------------

-> In MongoDB, a one-to-many reference relationship is when one document references many other documents stored in a separate collection. Instead of embedding subdocuments, 
   you store references (such as document IDs) to represent the relationship. This is useful when the "many" side of the relationship is large or needs to be accessed 
   independently.

            example 1: 

                Cities Collection:
                ..................

                    {
                        _id: ObjectId('66f29ce27a9ca9fe8a7d8930'),
                        city: 'New yorK',
                        coordinates: { latitude: 21, longitude: 55 }
                    }


                Citizen Collection:
                ...................

                    [
                      {
                        _id: ObjectId('66f29df57a9ca9fe8a7d8931'),
                        name: 'Max',
                        cityId: ObjectId('66f29ce27a9ca9fe8a7d8930')
                      },
                      {
                        _id: ObjectId('66f29df57a9ca9fe8a7d8932'),
                        name: 'Manuel',
                        cityId: ObjectId('66f29ce27a9ca9fe8a7d8930')
                      }
                    ]

-> Let’s say you have a User collection and an Order collection. Each user can have many orders, but you store the orders separately and reference them from the user document.

            example 2: 

                User Collection:
                ................

                    {
                       "_id": "user1",
                       "name": "John Doe",
                       "email": "johndoe@example.com",
                       "order_ids": ["order1", "order2"]
                    }


                Orders Collection: 
                ..................

                  [
                    {
                       "_id": "order1",
                       "user_id": "user1",
                       "total": 250,
                       "items": ["item1", "item2"]
                    },


                    {
                       "_id": "order2",
                       "user_id": "user1",
                       "total": 150,
                       "items": ["item3", "item4"]
                    }
                  ]

                    i) The User document contains a reference (order_ids) to the related Order documents.

                    ii) Each Order document also includes a reference (user_id) back to the related User.


-> When to Use Reference Relationships:

    i) The "many" side (e.g., orders) needs to be accessed independently of the parent document.

    ii) The "many" side can grow large and storing it within the parent document would make the document size too large.

    iii) You need to perform queries on the "many" side without loading the parent document.


=======================================================================================================================================================================================================================

18) Many To Many Embedded RelationShip:
---------------------------------------

-> In MongoDB, a many-to-many relationship can be modeled using embedded documents or reference documents, depending on the use case. For an embedded relationship, 
   data from related entities are embedded inside one another. Here's an example for handling many-to-many relationships using embedding:

-> Scenario:

    i) Let’s assume you have two entities: students and courses. A student can enroll in many courses, and a course can have many students.

-> Embedding Courses within Students: 

    You can embed the courses that a student is enrolled in directly within the student document.

    example: Students Collection:
    ..............................

        {
          "_id": ObjectId("student1"),
          "name": "John Doe",
          "courses": [
            {
              "course_id": ObjectId("course1"),
              "name": "Math 101",
              "credits": 3
            },
            {
              "course_id": ObjectId("course2"),
              "name": "Physics 101",
              "credits": 4
            }
          ]
        }

        i) In this example, the courses array is embedded within each student document. Each course contains minimal information like course_id, name, and credits.


-> Embedding Students within Courses: 

    Alternatively, you could embed the list of enrolled students inside the course document:


    example: Courses Collection:
    ............................

        {
          "_id": ObjectId("course1"),
          "name": "Math 101",
          "credits": 3,
          "students": [
            {
              "student_id": ObjectId("student1"),
              "name": "John Doe"
            },
            {
              "student_id": ObjectId("student2"),
              "name": "Jane Smith"
            }
          ]
        }


-> Considerations:

    i) Data Duplication: Embedding causes duplication of data if the same course or student is embedded in multiple places.

    ii) Query Optimization: If you frequently query a student along with their courses, embedding makes sense. However, for complex many-to-many queries, 
        it can become inefficient.

-> For large datasets or if the embedded documents grow large, it might be better to use referenced documents for many-to-many relationships instead. 
   Let me know if you'd like details on that!


=======================================================================================================================================================================================================================

20) Many To Many Reference RelationShip:
----------------------------------------

-> In MongoDB, many-to-many relationships can also be modeled using referencing instead of embedding. This approach is more efficient when data is frequently updated or 
   the collections are large, as it avoids data duplication.

        example: 1 

        Books Collection
        .................

          {
            _id: ObjectId('66f3a91577d8040082285acc'),
            name: 'My favorite Book',
            authors: [ { name: 'Max', age: 29 }, { name: 'Manuel' } ]
          }

        Authors Collection:
        ...................

            [
              {
                _id: ObjectId('66f3a9d177d8040082285acd'),
                name: 'Max',
                age: 29,
                address: { street: 'Main' }
              },
              {
                _id: ObjectId('66f3a9d177d8040082285ace'),
                name: 'Manuel',
                age: 30,
                address: { street: 'Tree' }
              }
            ]


            i) db.books.updateOne({}, {$set: {authors: [ObjectId('66f3a9d177d8040082285acd'),ObjectId('66f3a9d177d8040082285ace')]}})

                instead of storing authors details in Books collection we use author Id as reference.

                  {
                    _id: ObjectId('66f3a91577d8040082285acc'),
                    name: 'My favorite Book',
                    authors: [
                      ObjectId('66f3a9d177d8040082285acd'),
                      ObjectId('66f3a9d177d8040082285ace')
                    ]
                  }



-> Let’s continue with the same scenario: students and courses, where a student can enroll in many courses, and a course can have many students.

-> Student Schema (Referencing Courses)

        In this model, you store references (i.e., the _id field) to the related documents (courses) in the student document.

        example: 

            {
              "_id": ObjectId("student1"),
              "name": "John Doe",
              "enrolledCourses": [
                ObjectId("course1"),
                ObjectId("course2")
              ]
            }

            i) Here, the enrolledCourses field stores an array of ObjectId values that reference course documents.


-> Course Schema (Referencing Students)

        Similarly, each course document stores an array of references to student documents.

        example: 

            {
              "_id": ObjectId("course1"),
              "name": "Math 101",
              "credits": 3,
              "enrolledStudents": [
                ObjectId("student1"),
                ObjectId("student2")
              ]
            }

            i) The enrolledStudents array stores references to the students enrolled in that course.


-> Advantages of Referencing:

    i) Normalization: Data is more normalized compared to embedding. Instead of duplicating course or student data in multiple places, you reference it by ObjectId.

    ii) Efficient Updates: Since you don't need to update embedded documents in multiple places, updating a course or student is easier and faster.

    iii) Flexible Queries: You can perform queries like "find all students enrolled in a course" or "find all courses a student is taking" without dealing with deeply 
        nested structures. 

-> Trade-offs:

i) Additional Queries: To get complete information (e.g., course names when fetching students), you need to perform multiple queries (or use a join-like aggregation in 
   MongoDB).

ii) Complex Queries: Queries for many-to-many relationships using referencing can be more complex and might require the use of $lookup in aggregations if you want to avoid 
   multiple queries.


=======================================================================================================================================================================================================================

21) Joining Two Collections with $lookup Operator
-------------------------------------------------


-> In MongoDB, the $lookup operator is used to perform a left outer join with another collection in the same database. It allows you to combine documents from 
   two collections based on a relationship between the fields.

-> Here is the syntax of the $lookup operator:

    {
       $lookup:
         {
           from: <collection to join>,
           localField: <field from the input documents>,
           foreignField: <field from the documents of the "from" collection>,
           as: <output array field>
         }
    }

-> Parameters:

    i) from: The name of the collection to join.

    ii) localField: The field from the input collection.

    iii) foreignField: The field from the from collection.

    iv) as: The name of the array field where the matching documents will be stored.

-> Suppose you have two collections, orders and customers. You want to fetch the customer details for each order:

    db.orders.aggregate([
      {
        $lookup:
          {
            from: "customers",
            localField: "customerId",
            foreignField: "_id",
            as: "customerDetails"
          }
      }
    ])

    In this example:

    i) orders is the main collection.

    ii) customers is the collection being joined.

    iii) customerId in the orders collection is matched with the _id in the customers collection.

    iv) The matching customers documents are added as an array under customerDetails.


-> example 1: 

    Customers Collection:
    ....................

    {
        userName: "Max",
        favBooks: ["id1", "id2"]
    }

    Books Collection:
    .................

    {
    _id: 'id1',
    name: "Lord of Rings 1"
    }

i) we use lookup operator(query in terminal) as below:

    customers.aggregate([{
        $lookup: {
            from: "books",
            localField: "favBooks",
            foreignField: _id,
            as: "fav BookData"
        }
    }])


-> example 2: 

        Books Collection
        .................

            {
                _id: ObjectId('66f3a91577d8040082285acc'),
                name: 'My favorite Book',
                authors: [
                    ObjectId('66f3a9d177d8040082285acd'),
                    ObjectId('66f3a9d177d8040082285ace')
                  ]
            }

        Authors Collection:
        ...................

            [
              {
                _id: ObjectId('66f3a9d177d8040082285acd'),
                name: 'Max',
                age: 29,
                address: { street: 'Main' }
              },
              {
                _id: ObjectId('66f3a9d177d8040082285ace'),
                name: 'Manuel',
                age: 30,
                address: { street: 'Tree' }
              }
            ]


        i) we use lookup operator(query in terminal) as below:

            books.aggregate([{
                $lookup: {
                    from: "authors",
                    localField: "authors",
                    foreignField: _id,
                    as: "creators"
                }
            }])

        ii) Output:

            [
              { 
                _id: ObjectId('66f3a91577d8040082285acc'),
                name: 'My favorite Book',
                authors: [
                  ObjectId('66f3a9d177d8040082285acd'),
                  ObjectId('66f3a9d177d8040082285ace')
                ],
                creators: [
                  {
                    _id: ObjectId('66f3a9d177d8040082285ace'),
                    name: 'Manuel',
                    age: 30,
                    address: { street: 'Tree' }
                  },
                  {
                    _id: ObjectId('66f3a9d177d8040082285acd'),
                    name: 'Max',
                    age: 29,
                    address: { street: 'Main' }
                  }
                ]
              }
            ]

=======================================================================================================================================================================================================================

22) Schema Validations
-----------------------

-> Schema validation in MongoDB allows you to enforce rules on the documents within a collection, ensuring they meet specific criteria before being inserted or updated. 
   This is particularly useful for maintaining data integrity and consistency.

-> How to Implement Schema Validation:

    i) You can use the $jsonSchema keyword in the validator option when creating or updating a collection.


-> Key Components of Schema Validation:

    i) bsonType: Specifies the expected BSON type of the field (e.g., string, number, object, array).

    ii) required: An array of field names that must be present in the document.

    iii) properties: Defines the structure and constraints for each field in the document.


-> example 1:

    i) Creating a Collection with Schema Validation(in terminal):

        db.createCollection("products", {
          validator: {
            $jsonSchema: {
              bsonType: "object",
              required: ["name", "price"],
              properties: {
                name: {
                  bsonType: "string",
                  description: "must be a string and is required"
                },
                price: {
                  bsonType: "number",
                  description: "must be a number and is required"
                },
                category: {
                  bsonType: "string",
                  description: "must be a string if the field exists"
                },
                stock: {
                  bsonType: "int",
                  description: "must be an integer if the field exists"
                }
              }
            }
          }
        });


    ii) Updating an Existing Collection's Validator: (You can also add or modify schema validation rules on an existing collection:)

        db.runCommand({
          collMod: "products",
          validator: {
            $jsonSchema: {
              bsonType: "object",
              required: ["name", "price"],
              properties: {
                name: {
                  bsonType: "string",
                  description: "must be a string and is required"
                },
                price: {
                  bsonType: "number",
                  description: "must be a number and is required"
                },
                description: {
                  bsonType: "string",
                  description: "optional field"
                }
              }
            }
          },
          validationAction: "warn"
        });


    iii)  Inserting Documents with Schema Validation: (If you try to insert a document that doesn't comply with the schema, MongoDB will return an error:)


            db.products.insert({
              name: "Widget",
              // Missing required 'price' field
            });


            This will result in an error because the price field is required.


-> example 2:

    i) Creating a Collection with Schema Validation(in terminal):

        db.createCollection("posts2", {
          validator: {
            $jsonSchema: {
              bsonType: "string",
              required: ["title", "text", "creator", "comments"],
              properties: {
                title: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                text: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                creator: {
                    bsonType: "objectId",
                    description: "must be a an objectId and is required"
                },
                comments: {
                    bsonType: "array",
                    description: "must be a array and is required",
                    items: {
                        bsonType: "object",
                        required: ["text", "author"],
                        properties: {
                            text: {
                                bsonType: "string",
                                description: "must be string and is required"
                            },
                            author: {
                                bsonType: "objectId",
                                description: "must be a an objectId and is required"
                            }
                        }
                    }
                },
              }
            }
          }
        })

-> Schema validation in MongoDB helps enforce data quality by defining rules for the structure of documents in a collection. You can customize the validation rules to fit 
   your application’s requirements, ensuring that only valid documents are stored in your database.


=======================================================================================================================================================================================================================

23) Diving into Create Operations
---------------------------------

i) insert() methods
...................

    -> db.persons.insertOne({name: "Anna", age: 25, hobbies: ["sports","cooking" ]})

    -> db.persons.insertMany([{name: "Maria", age: 31},{name: "Max", age: 29}])

    -> db.persons.insert({name: "Phil", age: 35})

    -> db.persons.insert([{name: "Sandeep", age: 35},{name: "Hans",age: 26}])

    -> starting with MongoDB 3.2, it's recommended to use insertOne() and insertMany() for single and multiple inserts, respectively, 
       for more granular control and better handling of write operations.

_________________________________________________________________________________________________________

ii) Ordered Inserts
...................

    -> In MongoDB, when you use insertMany() to insert multiple documents into a collection, you can specify the option { ordered: true } or { ordered: false }.

    example 1:

    -> ordered: true (Default):

        * When ordered is set to true, MongoDB will insert the documents in the order you provide.

        * If an error occurs (like a duplicate key) during the insertion of any document, the insertion process will stop, and no further documents will be inserted.

            db.collection.insertMany([
              { _id: 1, name: "Alice" },
              { _id: 2, name: "Bob" },
              { _id: 1, name: "Charlie" } // duplicate key error
            ], { ordered: true })

            In this case, the first document will be inserted, but the process will stop after the second document due to the duplicate _id.

    -> ordered: false:

        * When ordered is set to false, MongoDB will continue inserting the remaining documents even if an error occurs.

        * It ignores errors on individual documents but logs them, and all valid documents are still inserted.

            db.collection.insertMany([
              { _id: 1, name: "Alice" },
              { _id: 2, name: "Bob" },
              { _id: 1, name: "Charlie" } // duplicate key error
            ], { ordered: false })

            In this case, the first and second documents will be inserted, but MongoDB will skip the third document due to the duplicate _id.


    example 2: 

    -> ordered: true

        db.hobbies.insertMany([
            {_id: "yoga", name: "Yoga"},
            {_id: "cooking", name: "Cooking"},  // duplicate Key error
            {_id: "hiking", name: "Hiking"}
            ])

            In this case, the first document will be inserted, but the process will stop after the first document due to the duplicate _id

    -> ordered: false

        db.hobbies.insertMany([
            {_id: "yoga", name: "Yoga"},  // duplicate Key error
            {_id: "cooking", name: "Cooking"},   // duplicate key error
            {_id: "hiking", name: "Hiking"}
            ],{ordered: false})

            In this case, the first and second documents will skip document due to the duplicate _id's., and inserts the first document.


    -> Using ordered: false can be useful when you want to ensure as many documents as possible are inserted without aborting the whole process due to errors.

_________________________________________________________________________________________________________

iii) writeConcern 
.................

    -> In MongoDB, Write Concern refers to the level of acknowledgment requested from MongoDB for write operations. It determines how many replicas in a replica set 
       must confirm the write before it is considered successful. This allows control over the durability of data in case of failures.

    -> Here are the main write concern levels:

        1. w: 0 – No acknowledgment. MongoDB does not confirm the write success.

        2. w: 1 – Acknowledgment from the primary node. Default setting.

        3. w: "majority" – Acknowledgment from the majority of replica set members.

        4. w: n – Acknowledgment from n number of replica set members.

        5. j: true – Ensures the write is committed to the journal.

        6. wtimeout: <ms> – Specifies a time limit for write concern acknowledgment.

    -> example 1: 

        db.collection.insert(
           { name: "John", age: 28 },
           { writeConcern: { w: "majority", wtimeout: 5000 } }
        )

        This ensures that the write is acknowledged by the majority of nodes within 5 seconds.

_________________________________________________________________________________________________________

iv) mongoimport
................

-> reddymouniswar@Reddys-MacBook-Air > ~/Downloads >mongoimport tv-shows.json -d MongoDB -c tvShows --jsonArray --drop

    mongoimport: keyword used to import the json file.

    tv-shows.json: json file which you want to import.

    -d MongoDB: -d represents database name we want to create, "MongoDB" is database Name we have created.

    -c tvShows: -c represents collection name we want to create, "tvShows" is collection name we have created.

    --jsonArray: we want to insert Documents in array.

    --drop: If this collection is already exist, then it will drop that and replace that with created collection.

=======================================================================================================================================================================================================================

Link: https://www.mongodb.com/docs/manual/reference/operator/query/

24) Diving into Read Operations:
--------------------------------

-> Query Selectors: 
   ----------------

    Query selectors are used to specify criteria for filtering documents in a query. Here are some common query selectors:

    _________________________________________________________________________________________________________

    i) Comparision Operators:
    .........................

        -> db.tvShows.find({runtime: {$eq: 60}}).pretty()     -> Shows Documents where {runtime equal to 60}

        -> db.tvShows.find({runtime: {$ne: 60}}).pretty()     -> Shows Documents where {runtime not equal to 60}

        -> db.tvShows.find({runtime: {$gt: 60}}).pretty()     -> Shows Documents where {runtime greater than 60}

        -> db.tvShows.find({runtime: {$gte: 60}}).pretty()    -> Shows Documents where {runtime greater than or equal 60}

        -> db.tvShows.find({runtime: {$lt: 60}}).pretty()     -> Shows Documents where {runtime less than 60}

        -> db.tvShows.find({runtime: {$lte: 60}}).pretty()    -> Shows Documents where {runtime less than or equal 60}

        -> Querying Embedded Fields:
           _________________________

            -> db.tvShows.find({"rating.average": {$gt: 7} }) 

        -> Querying Arrays:
           ________________

            -> db.tvShows.find({genres: "Drama"}).pretty()     -> It Will return all documents where array of genres having Drama

            -> db.tvShows.find({genres: ["Drama"]}).pretty()     -> It will return all documents where array of genres is having only Drama.

        -> $in Operator:
           _____________

            -> $in operator is used to select documents where the value of a field matches any value in a specified array.

            -> db.students.find({ age: { $in: [21, 23] } })     -> If you want to find all students whose age is either 21 or 23.


            -> db.products.find({category: { $in: ["Fashion"] }, price: { $in: [600] }})      -> This query searches for products that belong to the category “Fashion” or 
                                                                                                  have a price of 600.


            -> db.tasks.find({ status: { $in: ["Pending", "In Progress"] } })       -> You want to find all tasks that are either “Pending” or “In Progress”.

            -> db.books.find({ genres: { $in: ["Fiction", "Philosophy"] } })        -> You want to find all books that belong to either the “Fiction” or “Philosophy” genre.

            -> db.sales.find({ amount: { $in: [800, 300] } })        -> You want to find all sales where the amount is either 800 or 300.

            -> db.users.find({ _id: { $in: [101, 103] } })           -> To find users with _id values of 101 and 103.
        

        -> $nin Operator:
           ______________

            -> $nin operator is the inverse of the $in operator. It is used to select documents where the value of a field does not match any value in the specified array. 
                If none of the values in the array are found in the field, the document is included in the result.

            -> db.students.find({ age: { $nin: [21, 23] } })     -> To find all students whose age is not 21 or 23, you can use the $nin operator.

            -> db.products.find({ category: { $nin: ["Electronics"] } })     -> You want to find all products except those in the “Electronics” category.

            -> db.movies.find({ rating: { $nin: [3, 2] } })       -> You want to exclude movies with a rating of 3 or 2.

            -> db.users.find({ _id: { $nin: [101, 103] } })       -> You want to find all users except the ones with _id values of 101 and 103.


    _________________________________________________________________________________________________________

    ii) Logical Operators: 
    ----------------------

    -> MongoDB supports a variety of logical operators for querying documents within collections. These logical operators allow you to combine multiple conditions or 
       expressions within a single query.

    -> $or Operation:
       ______________
        
        -> Matches documents that satisfy at least one of the specified conditions.

        -> db.tvShows.find({$or: [{"rating.average": {$lt: 5}},{"rating.average": {$gt: 9}}]}).pretty()    -> Returns documents where rating.average is less than 5 or 
                                                                                                              rating.average is greater than 9.

        -> db.users.find({$or: [{age: {$lt: 18}},{city: "Los Angeles"}]})    -> Matches documents where the age is less than 18 or the city is “Los Angeles”.


    -> $nor Operator:
       ______________
        
        -> Matches documents that fail to satisfy all of the specified conditions.

        -> db.tvShows.find({$nor: [{"rating.average": {$lt: 9.3}},{"rating.average": {$gt: 9.4}}]}).pretty()    -> Matches documents where the age is not greater than 18 and 
                                                                                                                   the city is not “Chicago”.

        -> db.collection.find({$nor: [{age: {$gt: 18}},{city: "Chicago"}]})      -> Matches documents where the age is not greater than 18 and the city is not “Chicago”.


    -> $and Operator:
       ______________

        -> Matches documents that satisfy all the specified conditions.

        -> db.tvShows.find({$and: [{"rating.average": {$gt: 5}},{"genres": "Drama"}]}).pretty()     -> Returns all documents where rating.average is greater than 5 and 
                                                                                                        genres is Drama.

        -> db.users.find({$and: [{age: {$gt: 18}}, {city: "New York"}]})    -> Matches documents where the age is greater than 18 and the city is “New York”.

        -> 


    -> $not Operator:
       ______________

        ->  Inverts the effect of a query expression, returning documents that do not match the specified condition.

        -> db.collection.find({age: {$not: {$gt: 25}}})      -> Matches documents where the age is not greater than 25.


    _________________________________________________________________________________________________________

    iii) Element Operators:
    -----------------------

    -> In MongoDB, element operators are used to query documents based on the presence or absence of a field, whether the value of a field is of a particular type, 
       or whether the field exists at all. Here are the key element operators in MongoDB:

    -> $exists Operator: 
       _________________
        ->  The $exists operator is used to check whether a field exists in a document.

        -> db.users.find({age: {$exists: false}}).pretty()    -> It will return the documents where age field does not exist.

        -> db.users.find({age: {$exists: true}}).pretty()     ->  It will return the documents where age field exist.


    -> $type Operator:  https://www.mongodb.com/docs/manual/reference/operator/query/type/#mongodb-query-op.-type  (For more details visit this site)
       _______________

        ->   The $type operator is used to query documents where the value of a field matches a specific BSON data type.

        -> db.users.find({age: {$type: 10}}).pretty()       -> It will return the documents where Data Type of age is null(10 -> represents null).

        -> db.users.find({age: {$type: "int"}}).pretty()    -> It will return the documents where Data Type of age is int.


    _________________________________________________________________________________________________________

    iv) Evatuation Operators:
    -------------------------

    Link:  https://chatgpt.com/share/66ffd373-3c64-8006-8dad-9fdf4fc7194e

    -> $regex Operator:
       ________________

        -> Selects documents where values match a specified regular expression.

        -> db.tvShows.findOne({summary: {$regex: /musical/}})     -> It will return document where Summary is having musical word in it(regular expression - summary value).


                {
                  _id: ObjectId('66f51825eacc13b9cab4034b'),
                  id: 8,
                  url: 'http://www.tvmaze.com/shows/8/glee',
                  name: 'Glee',
                  type: 'Scripted',
                  language: 'English',
                  genres: [ 'Drama', 'Music', 'Romance' ],
                  status: 'Ended',
                  runtime: 60,
                  premiered: '2009-05-19',
                  officialSite: 'http://www.fox.com/glee',
                  schedule: { time: '21:00', days: [ 'Tuesday' ] },
                  rating: { average: 6.7 },
                  weight: 71,
                  network: {
                    id: 4,
                    name: 'FOX',
                    country: { name: 'United States', code: 'US', timezone: 'America/New_York' }
                  },
                  webChannel: null,
                  externals: { tvrage: 21704, thetvdb: 83610, imdb: 'tt1327801' },
                  image: {
                    medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/73.jpg',
                    original: 'http://static.tvmaze.com/uploads/images/original_untouched/0/73.jpg'
                  },
                  summary: '<p><b>Glee </b>is a musical comedy about a group of ambitious and talented young adults in search of strength, acceptance and, ultimately, their voice.</p>',
                  updated: 1536145055,
                  _links: {
                    self: { href: 'http://api.tvmaze.com/shows/8' },
                    previousepisode: { href: 'http://api.tvmaze.com/episodes/142185' }
                  }
                }

        
        -> db.users.find({name: {$regex: /a/}})     -> It will return documents where name is having letter a.

        -> db.users.find({name: {$regex: /^a/}})    -> It will return documents where name starts with letter a.

        -> db.users.find({name: {$regex: /a$/}})    -> It will return documents where name ends with letter a.

        -> db.employees.find({email: {$regex: /gmail\.com$/}})     -> It will return documents where email ends with gmail.com

        -> db.tvShows.find({summary: {$regex: /ambitious/}}).pretty()    -> It will return document where Summary is having ambitious word in it(regular expression - summary value).

        -> few more examples left 


    -> $expr Operator:
       _______________

        -> Allows the use of aggregation expressions within the query language.

        -> db.monthlyBudget.find({$expr: {$gt: ["$spent", "$budget"]}})      -> to find documents where the spent amount exceeds the budget.

        -> db.orders.find({$expr: {$gt: ["$total","$discounted"]}})      -> Finds documents where the total field is greater than the discounted field.

        -> db.collection.find({$expr: {$gt: ["$quantity", "$minQuantity"]}})    -> Finds documents where the quantity field is greater than the minQuantity field.

        -> db.employees.find({$expr: {$gt: ["$salary", "$bonus"]}})     -> Finds all employees whose salary is greater than their bonus.

        -> db.sales.find({$expr: {$gt: [{$add: ["$price", "$tax"]}, "$totalCost"]}})    ->  Finds documents where the sum of price and tax is greater than the totalCost.

        -> db.employees.find({$expr: {$and: [{$gt: ["$age", 30]}, {$gte: ["$experience", 5]}]}})    -> Finds employees whose age is greater than 30 and whose experience is 
                                                                                                        greater than or equal to 5 years.

        -> db.events.find({$expr: {$gt: [{$subtract: ["$endDate", "$startDate"] }, 7 * 24 * 60 * 60 * 1000]}})      -> Finds events where the difference between endDate and 
                                                                                                                        startDate is greater than 7 days.


        -> db.products.find({$expr: {$or: [{$gt: ["$price", 500] }, { $gt: ["$discount", 20]}]}})       -> Finds all products where either the price is greater than 500 or 
                                                                                                            the discount is greater than 20%.

        -> db.servers.find({$expr: {$gt: [{$divide: ["$usedStorage", "$totalStorage"]}, 0.8]}})     -> Finds documents where the percentage of usedStorage compared to 
                                                                                                        totalStorage is greater than 80%.

        -> db.products.find({$expr: {$lt: [{ $ifNull: ["$discountedPrice", "$regularPrice"] }, "$regularPrice"]}})      -> Finds documents where the discountedPrice is null 
                                                                                                                            or less than the regularPrice.

        -> db.orders.find({$expr: {$in: ["$status", ["shipped", "delivered"]]}})    -> Finds orders where the status is either “shipped” or “delivered”.


    -> $mod Operator:
       ______________

        -> Selects documents where the value of a field divided by a divisor has the specified remainder.

        -> db.numbers.find({number: {$mod: [2, 1]}})    -> Finds documents where the number field is odd (i.e., number % 2 == 1).

        -> db.numbers.find({number: { $mod: [2, 0]}})   ->  Finds documents where the number field is even (i.e., number % 2 == 0).

        -> db.products.find({quantity: { $mod: [5, 0]}})    -> Finds all products where the quantity is divisible by 5.

        -> db.events.find({day: {$mod: [7, 0]}})    -> Finds events that occur on days that are divisible by 7 (e.g., the 7th, 14th, 21st, etc.).

        -> db.items.find({price: {$mod: [10, 0]}})      -> Finds all items where the price is divisible by 10.

        -> db.years.find({$or: [{year: {$mod: [400, 0]}},{ $and: [{ year: { $mod: [100, 0] } }, { year: { $mod: [4, 0]}}]}]})   -> Finds documents where the year is a leap year (i.e., year % 4 == 0, but not divisible by 100 unless also divisible by 400).

        -> db.users.find({_id: {$mod: [10, 3]}})    -> Finds users whose _id ends in the digit 3 (i.e., _id % 10 == 3).

        -> db.events.find({month: {$mod: [2, 0]}})      -> Finds events occurring in even months (i.e., month % 2 == 0).

        -> db.logs.find({hour: {$mod: [3, 0]}})     -> Finds logs that were created in hours divisible by 3 (e.g., 3 AM, 6 AM, etc.).

        -> db.numbers.find({value: {$mod: [3, 2]}})     -> Finds documents where the value leaves a remainder of 2 when divided by 3 (i.e., value % 3 == 2).
    
    
    -> $where Operator:
       ________________

        -> Evaluates JavaScript expressions to match documents. This operator provides a lot of flexibility, but can be slower than other queries as it requires running 
            JavaScript on the server.

        -> db.employees.find({$where: function() { return this.salary > this.bonus; }})     -> Find documents where the salary is greater than the bonus.

        -> db.users.find({$where: function() {return this.name[0] === 'A' && this.age > 25; }})     ->  Find documents where the name starts with the letter ‘A’ and the age is greater than 25.

        -> db.products.find({$where: function() {return this.tags.length > 3;}})    -> Find documents where the tags field contains more than 3 elements.


    -> $text Operator:
       _______________

       -> The $text operator in MongoDB performs text searches on fields that have been indexed with a text index. This operator is useful for full-text search within 
          documents, matching keywords or phrases in indexed text fields.

       -> db.articles.find({$text: { $search: "database" }})    -> Search for documents containing the word “database” in any text-indexed field.

       -> db.articles.find({$text: { $search: "\"full text search\"" }})    -> Search for the exact phrase “full text search” in any text-indexed field.

       -> db.articles.find({$text: { $search: "database performance" }})    -> Search for documents that contain either “database” or “performance”.

       -> db.articles.find({$text: { $search: "database -NoSQL" }})     -> Search for documents containing “database” but exclude those that contain “NoSQL”.

       -> db.articles.find({$and: [{$text: {$search: "database"}}, { published: true }] })      -> Search for documents containing “database” and where the published field is true.

       -> 
        
    -> $jsonSchema Operator:
       ____________________

       -> The $jsonSchema operator in MongoDB allows you to validate documents against a specified JSON Schema during queries. This is useful for ensuring that documents 
          match certain structural and data constraints.

       -> db.createCollection("posts2", {
          validator: {
            $jsonSchema: {
              bsonType: "string",
              required: ["title", "text", "creator", "comments"],
              properties: {
                title: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                text: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                creator: {
                    bsonType: "objectId",
                    description: "must be a an objectId and is required"
                },
                comments: {
                    bsonType: "array",
                    description: "must be a array and is required",
                    items: {
                        bsonType: "object",
                        required: ["text", "author"],
                        properties: {
                            text: {
                                bsonType: "string",
                                description: "must be string and is required"
                            },
                            author: {
                                bsonType: "objectId",
                                description: "must be a an objectId and is required"
                            }
                        }
                    }
                },
              }
            }
          }
        })

    _________________________________________________________________________________________________________

    iv) Array Query:
    ----------------

    Link: https://chatgpt.com/share/67063fe6-0a3c-8006-b073-bc771bb2e15f

    -> $size Operator:
       ----------------

        -> The $size operator in MongoDB is used to match documents where an array field has a specified number of elements. Let’s go through some examples with inputs and expected outputs.

        -> $size helps match documents based on the exact number of elements in an array.

        -> It works with arrays of numbers, strings, objects, mixed types, and even nested arrays.

        -> If the field is not an array, $size does not match that document.

        -> db.persons.find({hobbies: {$size: 2}}).pretty()      -> It will find the hobbies array where size of the array is 3.

        -> db.students.find({ subjects: { $size: 3 } })     -> The query returns the document where the subjects array contains exactly 3 elements.

        -> db.students.find({ hobbies: { $size: 0 } })      -> The query returns documents where the hobbies array is empty (contains exactly 0 elements).

        -> db.students.find({ scores: { $size: 4 } })       -> The query returns the document where the scores array has exactly 4 elements.

        -> db.students.find({ grades: { $size: 2 } })       -> The query returns the document where the grades array contains exactly 2 sub-arrays.

        -> db.students.find({ details: { $size: 3 } })      -> The query returns the document where the details array contains exactly 3 elements, even though they are of mixed types (number, string, boolean).

        -> db.students.find({ address: { $size: 2 } })      -> This query only returns documents where address is an array with exactly 2 elements. Documents where address is a string or empty array are excluded.

        -> db.students.find({ grades: { $size: 2 } })       -> The query returns the document where the grades array contains exactly 2 objects.


    -> $all Operator:
       --------------

        -> The $all operator in MongoDB allows you to query for documents where an array contains all the specified elements. Let’s go through a few examples with inputs and expected outputs to better understand how it works.

        -> $all ensures that all specified elements must be present in the array (but the order of the elements does not matter).

        -> It can be used with numbers, strings, mixed types, empty arrays, and even nested arrays.

        ->  db.persons.find({hobbies: ["cooking","sports"]}).pretty()   -> It will return nothing because the order of the hobbies in the DB is sports, cooking.

            db.persons.find({hobbies: {$all: ["cooking","sports"]}}).pretty()   -> It will return all documents where hobbies array has cooking, sports even though not in order.

        -> db.students.find({ subjects: { $all: ["Math", "Science"] } })    ->  The result includes documents where the subjects array contains both "Math" and "Science". The order of elements in the array does not matter.

        -> db.students.find({ scores: { $all: [85, 88] } })     -> Both John and Doe have 85 and 88 in their scores array, so they are included in the result.

        -> db.students.find({ details: { $all: [85, "Grade A"] } })     -> The result includes documents where both 85 and "Grade A" are present in the details array. The types must match exactly.

        -> db.students.find({ hobbies: { $all: [] } })      -> This query finds documents where the hobbies array is empty. An empty $all matches only empty arrays.

        -> db.students.find({ grades: { $all: [[85, 90]] } })       -> The query looks for documents where the grades array contains the exact sub-array [85, 90].


    -> $elemMatch Operator:
       --------------------

        -> The $elemMatch operator in MongoDB is used to match documents that contain an array field with at least one element that satisfies all of the specified criteria. Let’s go through some examples with input data and their expected outputs.

        -> $elemMatch allows for complex queries on array fields, specifying multiple conditions that an array element must meet.

        -> It can be used with nested objects, arrays of numbers, and even arrays of arrays.

        -> It’s particularly useful for filtering documents based on specific criteria for elements within an array.

        -> db.persons.find({hobbies: {$elemMatch: {title: "sports", frequency: {$gt: 2 }}}}).pretty()   -> It will return the document where hobbies array must have 
                                                                                                            title: sports and frequency should be greater than 2.

        -> db.students.find({
              scores: {
                $elemMatch: { subject: "Math", score: { $gte: 85 } }
              }
            })

            The query returns documents where at least one element in the scores array matches both conditions: the subject must be "Math", and the score must be at least 85.


        -> db.customers.find({
              products: {
                $elemMatch: { name: "Laptop", price: { $lt: 1100 } }
              }
            })

            The query returns documents where the products array contains an element with "name": "Laptop" and "price": { $lt: 1100 }.


        -> db.people.find({
              numbers: {
                $elemMatch: { $gt: 15, $lt: 30 }
              }
            })

            The query returns documents where the numbers array contains at least one number that satisfies both conditions: greater than 15 and less than 30.


        -> db.customers.find({
              orders: {
                $elemMatch: { status: "pending", items: { $gt: 2 } }
              }
            })

            The query returns documents where at least one order in the orders array matches both conditions: "status": "pending" and "items": { $gt: 2 }.


        -> db.people.find({
              cars: {
                $elemMatch: { make: "Toyota", color: "red", year: { $gt: 2015 } }
              }
            })

            The query returns documents where the cars array contains a car with "make": "Toyota", "color": "red", and "year": { $gt: 2015 }.


        -> db.people.find({
              matrix: {
                $elemMatch: { $gt: 10 }
              }
            })

            The query returns documents where at least one element in a sub-array of matrix is greater than 10.

    _________________________________________________________________________________________________________


    v) Cursors
    ----------

    -> 









































db.products.insertMany([
{ "_id": 1, "price": 100, "tax": 10, "totalCost": 120 },
{ "_id": 2, "price": 80, "tax": 5, "totalCost": 85 },
{ "_id": 3, "price": 150, "tax": 15, "totalCost": 160 }
])

















*/