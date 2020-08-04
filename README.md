# Conekta API REST

This project uses:<br />
[Typescript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.<br />
[Express Js](https://www.express.com/): Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.<br />
[Conekta](https://developers.conekta.com/api): Shaping the future of commerce<br />

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Available Endpoints

### To get one order

`/GET /order/${order_id}`

### To post order

`/POST /createOrder`

## Directory layout

```
.
├── build/                  <-- Packaged app
├── src/                    <-- Application components and source code
     ├── api/               <-- Api Folders
     │    ├── conekta       <-- Conekta api folder
     ├── libs/              <-- Libraries for backend
     ├── utils/             <-- Utils config for backend
```
