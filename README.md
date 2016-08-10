# error-context

An error context generator similar to pug errors:

    const errorContext = require('error-context')
    console.log(errorContext('foo\nbar\nbaz\nbash\nbing', 2, 3))
