# Politico 

[![Build Status](https://travis-ci.org/Niyitangasam/politico.svg?branch=develop)](https://travis-ci.org/Niyitangasam/politico) [![Coverage Status](https://coveralls.io/repos/github/Niyitangasam/politico/badge.svg?branch=develop)](https://coveralls.io/github/Niyitangasam/politico?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/821a7bda21296c607746/maintainability)](https://codeclimate.com/github/Niyitangasam/politico/maintainability)
============

# Description

A project that will enables citizens give their mandate to politicians running for different government offices while building trust in the process through transparency.


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


#### GET `/api/v1/parties` Get all political parties.


#### GET `/api/v1/parties/<id>` Get a specific political party by its ID.


#### PATCH `/api/v1/parties/<id>/name` Edit a specific political party.


#### DELETE `/api/v1/parties/<id>` Delete a particular party.


#### POST `/api/v1/offices` Creating a political office.

    
#### GET `/api/v1/offices` Retreiving all political offices.


#### GET `/api/v1/offices/<id>` Getting a political office for a specific id.

#### POST `/api/v1/auth/signup` Greating a new user

#### POST `/api/v1/auth/login` Loging a new User

#### POST `/api/v1/offices/<office-id>/register`  Register a new user 

#### POST `/api/v1/votes/`  Vote a new User

#### GET  `/api/v1/office/<office-id>/result`  fetch the result of specific office.

#### POST  `/api/v1/petitions/`  Create petitions challenging the outcome of a concluded election

#### POST  `/api/v1/auth/reset`  Reset a password




# API DOCUMENTATION

[Visit the link](https://politico-samuel.herokuapp.com/docs).


# Heroku

[Visit the link](https://politico-samuel.herokuapp.com/). You can test the above API endpoints using this  URL `https://politico-samuel.herokuapp.com/`.


# Author

[Samuel N Niyitanga](https://github.com/Niyitangasam)
