## Gras-book-ui
## Prerequires

 Install [docker](https://docs.docker.com/get-started/)

Build the image with : `docker build ./ -t client`

## Running


You can run the project throught docker with the cmd :

`docker run -p 3000:3000 client` 

you can add the flag `-d` to start it in background task

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Running tests 
Using jest embed in create react app
`docker-compose run client npm run test`

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
