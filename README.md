# Politico 

[![Build Status](https://travis-ci.org/Niyitangasam/politico.svg?branch=develop)](https://travis-ci.org/Niyitangasam/politico) [![Coverage Status](https://coveralls.io/repos/github/Niyitangasam/politico/badge.svg?branch=backend)](https://coveralls.io/github/Niyitangasam/politico?branch=backend) [![Maintainability](https://api.codeclimate.com/v1/badges/821a7bda21296c607746/maintainability)](https://codeclimate.com/github/Niyitangasam/politico/maintainability)
============

# Description

A project for andela boot camp that will enables citizens give their mandate to politicians running for different government offices while building trust in the process through transparency.



# Github-page
GitHub page (gh-page) of this project accessed using trough  [Politico](https://niyitangasam.github.io/politico/UI/)




## Requirements

* `NodeJs` Runtime environment that helps to run JavaScript not only in the browser even on the server.
* `Express` NodeJS framework used for making the back-end.
* `Joi` and `Morgan` API request body error validation and HTTP Request logger respectively.


## Installation



# Setup
- You need to have `git`, `NodeJS` and `nmp` installed.
- Clone the application using  `https://github.com/Niyitangasam/politico.git`
- `npm install` to install all the dependencies.
- `npm update` to update the dependencies.



# Getting Started
Starting application, Run:
* `npm start` for starting the server.

# Testing

* `npm test` for running the tests.

# API ENDPOINTS

* POST `/api/v1/parties` Create a political party.
* GET `/api/v1/parties` Get all political parties.
* GET `/api/v1/parties/<id>` Get a specific political party.
* PATCH `/api/v1/parties/<id>/name` Edit a specific political party.
* DELETE `/api/v1/parties/<id>` Delete a particular party.

* POST `/api/v1/offices` Creating a political office.
* GET `/api/v1/offices` Retreiving all political offices. 
* GET `/api/v1/offices/<id>` Getting a political office for a specific id.



# Heroku

Access link :[Visit the link](https://politico-sam.herokuapp.com/). You can test the above API endpoints using this  URL `https://politico-sam.herokuapp.com/` .

