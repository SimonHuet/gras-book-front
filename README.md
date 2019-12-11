<h1 align="center">Welcome to gras-book-ui 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>



> This project is inspired by facebook with food content.

> This project was created for a school project. 


### 🏠 [Homepage](http://grasbook.eddycheval.codes)
### ✨ [Demo](http://grasbook.eddycheval.codes)
This project has been created with create-react-app
## Prerequisites

Install [docker](https://docs.docker.com/get-started/) and docker-compose (included with docker desktop (mac))

## Install

```
git clone git@github.com:SimonHuet/gras-book-front.git
cd gras-book-front
```

Copy `docker-compose.yml.dist` to `docker-compose.yml`

Copy `.env.dist` to `.env` and fill it with the environnement informations

Build the image with : `docker-compose build `

## Usage

You can run the project throught docker with the cmd :

`docker-compose up` 

you can add the flag `-d` to start it in background task

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Run tests

Using jest embed in create react app, launch the following command :

`docker-compose run client npm test`

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Author

👤 **SimonHuet**
* Github: [@SimonHuet](https://github.com/SimonHuet)

Others participants
* Github: [@JeremyChauvin](https://github.com/Singebob)
* Github: [@EddyCheval](https://github.com/EddyCheval)
* Github: [@YannDurand](https://github.com/Nefaden)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
