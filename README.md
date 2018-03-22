# Dino of the Day Repository

A simple Elasticsearch-powered Dino of the Day repository.

## About

This is a very simple project demonstrating a minimal Elasticsearch usage in Javascript, as well as `express-fileupload` middleware. The theme is storing dino-of-the-day data (something from work), but the concept can literally work with anything.

## Getting Started

To get up and running, you'll need Docker & docker-compose installed, as well as NodeJS and NPM. Then, follow these steps:

1. Clone this repo
2. Perform a `docker-compose up` in the project directory, to get the base Elasticsearch image up and running (see `docker-compose.yaml` for specifics).
3. Perform an `npm install` to install required dependencies for the express app.
4. Run `npm run start` to run the server.
5. Visit http://localhost:8089/



## Contributing

Please and thanks! Pull requests welcome.

## License

Copyright 2018 James Robert Perih

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.