<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Nest Book Store API.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API routes

```bash
# Get all books
GET api/books

# Get book details of a specific id.
GET api/book/:id

# Add new Book.
POST api/book/add-new

# Update Book of a specific id.
PUT api/book/:id/update

# Delete Book of a specific id.
DELETE api/book/:id/delete
