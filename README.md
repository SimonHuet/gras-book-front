## Gras-book-ui
## Prerequires

 Install [docker](https://docs.docker.com/get-started/) and docker-compose (included with docker desktop (mac))

Copy `docker-compose.yml.dist` to `docker-compose.yml`

Build the images with : `docker-compose build `

## Running

You can run the project throught docker with the cmd :

`docker-compose up` 

you can add the flag `-d` to start it in background task

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Running tests 
Using jest embed in create react app, launch the following command :

`docker-compose run client npm test`

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Storybook

Add a .stories.js in components dir to describe story behavior

You can launch the storybook with the following command :

`docker-compose exec client npm run storybook`

PS: the client container has to be running to launch this command
