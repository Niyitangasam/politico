# Politico 

[![Build Status](https://travis-ci.org/Niyitangasam/politico.svg?branch=develop)](https://travis-ci.org/Niyitangasam/politico) [![Coverage Status](https://coveralls.io/repos/github/Niyitangasam/politico/badge.svg?branch=develop)](https://coveralls.io/github/Niyitangasam/politico?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/821a7bda21296c607746/maintainability)](https://codeclimate.com/github/Niyitangasam/politico/maintainability)
============

# Description

A project for andela boot camp that will enables citizens give their mandate to politicians running for different government offices while building trust in the process through transparency.



# Github-page
GitHub page (gh-page) of this project accessed using trough  [Politico](https://niyitangasam.github.io/politico/UI/)




## Requirements

* `NodeJs` Runtime environment that helps to run JavaScript not only in the browser even on the server.
* `Express` As web framework for Node Js.
* `Joi` for API request body error validation.


## Installation



# Setup
- You need to have `git`, `NodeJS` and `nmp` installed.
- Clone the application on `https://github.com/Niyitangasam/politico.git`
- `npm install` to install all the dependencies.



# Getting Started
Starting application, Run:
* `npm start` for starting the server.

# Testing

* `npm test` for running the tests.

# API ENDPOINTS

#### POST `/api/v1/parties` Create a new political party.

* Sample of Expected Response:

     ```
       {
  		 “status” : 201 ,
         “data” : [ {
            “id” : 1,
            “name” : "Niyitanga" ,
          } ]
       }

     ```

#### GET `/api/v1/parties` Get all political parties.

* Sample of Expected Response:

      ``` 
       {
  		 “status” : 201 
         “data” : [ {
            “id” : 1,
            “name” : "Niyitanga" ,
            “logoUrl” : "https%3A%2F%2Fwww.lhemom%2Flogo%2F&psig=AOvVaw0EULr1S4LrEu5aXU",
          } , {
            “id” : 2,
            “name” : "Samuel" ,
            “logoUrl” : "https%3A%2F%2Fwww.logastig=AOvVaw0EULr1S4LrEu5aXU",
          }]
       }
       ```

#### GET `/api/v1/parties/<id>` Get a specific political party by its ID.

* Sample of Expected Response:

      ```
       {
  		 “status” : 200 ,
         “data” : [ {
            “id” : 1,
            “name” : "Niyitanga" ,
            “logoUrl” : "https%3A%2F%2Fwww.lhemom%2Flogo%2F&psig=AOvVaw0EULr1S4LrEu5aXU",
          } ]
       }
      ```

#### PATCH `/api/v1/parties/<id>/name` Edit a specific political party.

* Sample of Expected Response:

      ```
       {
  		 “status” : 200 ,
         “data” : [ {
            “id” : 1,
            “name” : "Samuel" ,
          } ]
       }
      ```

#### DELETE `/api/v1/parties/<id>` Delete a particular party.

* Sample of Expected Response:

     ```
       {
  		 “status” : 200 ,
         “data” : [ {
            “message” : "Party Deleted" ,
          } ]
       }
     ```

#### POST `/api/v1/offices` Creating a political office.

* Sample of Expected Response:

      ```  
       {
  		 “status” : 201 ,
         “data” : [ {
            “id” : 1 ,
            “type” : "legislative" ,
            “name” : "PPR P" ,
          } ]
       }
      ```

#### GET `/api/v1/offices` Retreiving all political offices.

 * Sample of Expected Response:

      ```
      {
  		 “status” : 200 ,
         “data” : [ {
            “id” : 1 ,
            “type” : "legislative" ,
            “name” : "PPR P" ,
          } , {
            “id” : 2 ,
            “type” : "legislative" ,
            “name” : "MNR G" ,
          } ]
       }
      ```

#### GET `/api/v1/offices/<id>` Getting a political office for a specific id.

* Sample of Expected Response:

      ``` 
       {
  		 “status” : 200 ,
         “data” : [ {
            “id” : 1 ,
            “type” : "legislative" ,
            “name” : "PPR P" ,
          } ]
       }
      ```



# Heroku

Access link :[Visit the link](https://politico-samuel.herokuapp.com/). You can test the above API endpoints using this  URL `https://politico-samuel.herokuapp.com/`.


# Author

[Samuel N Niyitanga](https://github.com/Niyitangasam)
