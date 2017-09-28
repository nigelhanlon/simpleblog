# simpleblog
This is a simple blog example showing the basics of GraphQL. It is powered by Apollo GraphQL and Fastify.

## Install

To install, simply clone this repo and run npm install. 

```sh
git clone git@github.com:nigelhanlon/simpleblog.git
cd simpleblog
npm install
```

## Run

Once you have everything installed, simply run index.js using node to start the server:

```sh
node index.js
listening on 8000
Go to http://127.0.0.1:8000/api/graphiql to play with GraphQL!

```

You can then open http://127.0.0.1:8000/api/graphiql to play with GraphQL using an interactive interface.

Try some of the following examples and see what happens.


### Get a post by id.
```
query {
    post(id: 1) {
        title
        content
        tags
    }
}
```

### Get a post by id including the author
```
query {
    post(id: 1) {
        title
        content
        tags
        author {
            id
            name
            email
        }
    }
}
```

### Get a post by id including the author, comments and authors of comments
```
query {
    post(id: 1) {
        title
        content
        tags
        author {
            id
            name
            email
        }
        comments {
            content
            author {
                name
                email
            }
        }
    }
}
```

## Bugs and Contributing

If you find a bug or would like to contribute to this example, feel free to open a pull request.

## Licence 

BSD 3-Clause, see LICENSE file for details.
