/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var booksRouter = express.Router();

  var books = [
    {
      id: 1,
      title: 'Hamlet',
      description: 'This is dummy text',
      author: 'william shakespeare'
    },
    {
      id: 2,
      title: 'One flew over the cuckoos nest',
      description: 'This is dummy text',
      author: 'ken kesey'
    },
    {
      id: 3,
      title: 'Harry Potter',
      description: 'This is dummy text',
      author: 'JK Rowling'
    },
  ];

  booksRouter.get('/', function(req, res) {
    res.send({
      'books': books
    });
  });

  booksRouter.post('/', function(req, res) {
    var newBook = req.body.book;
    var newId = books.length + 1;
    newBook.id = newId;
    books.push(newBook);
    res.send({
      book: newBook
    });
  });

  booksRouter.get('/:id', function(req, res) {
    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.patch('/:id', function(req, res) {
    var bookAttrs = req.body.data.attributes;
    var bookId = req.params('id');
    books.forEach(function(item) {
      if(item.id === parseInt(bookId)){
        item.title = bookAttrs.title;
        item.description = bookAttrs.description;
        item.author = bookAttrs.author;
      }
    });

    res.send({
      data : {
        type: 'books',
        id: bookId,
        attributes: bookAttrs
      }
    });
  });

  booksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/books', require('body-parser').json());
  app.use('/api/books', booksRouter);
};
