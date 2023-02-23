# pirate-shopping

The pirate shopping project is one of my side projects that allows me to keep adding some tech to advance my skillset.

Now this project is deployed by Netlify, https://super-online-shopping.netlify.app/

<br/>

## To do list breakdown

-   Deploy to AWS instead of Netlify, https://www.pirate-in-melbourne.com/ [Done]
-   Setup github actions, to push docker images to AWS ECR [Done]
-   Auth0 [Doing]
-   Unit test [To do]
-   Integration test [To do]
-   Storybook [To do]

<br/>

## Tech

### Front-end

`React 18`, `vite`, `TypeScript`, `Redux`, `Hooks`, `Stripe`, `Firebase`, `Google Login`

### Backend

`Node/Express framework`

### Others

`Docker`, `GitHub Action`, `Netlify`

<br/>

## How to run it

Please make sure **docker** have already installed.

Run `./run_docker.sh dev|prod`

## Production

`docker build . -t xychenxy/pirate-shopping`
`docker run -it -p 5000:5000 -e "NODE_ENV=production" xychenxy/pirate-shopping`
