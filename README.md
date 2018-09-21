![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# React | WikiCountries

## Introduction

After spending too much time on GitHub, you found a [JSON database of countries](https://github.com/mledoze/countries/blob/master/countries.json) and you decide to use it to create your Wikipedia for countries!

![](https://media.giphy.com/media/fdUHHKI36bTVduRDfB/giphy.gif)


## Installation

### Setup a basic project
Commands to launch
```sh
$ create-react-app starter-code
$ cd starter-code
$ npm start
```

### React Router installation
Don't forget to install the React Router:
```sh
$ npm install react-router-dom
```

And setup the router in your `src/index.js` file:
```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
```

To help you, we gave you an example of a page inside [`example.html`](example.html)

### Bootstrap installation

We will use [Bootstrap V4](https://getbootstrap.com/) for the design :)

```sh
$ npm install bootstrap
```

```javascript
// src/index.js
import 'bootstrap/dist/css/bootstrap.css';
```


## Instructions

### Iteration 1 | Create the components

In this iteration, we will focus on general layout. You will create at least 2 components:
- `App`: For the general layout
- `CountryDetail`: Your only `Route` that will show a component that will receive the country code (`cca3`) in the URL. That is going to represent the id of the country (example: `ESP` for Spain, `FRA` for France).

To help you, you can use:
- [`example.html`](example.html): An example of what you can render
- [`countries.json`](https://github.com/mledoze/countries/blob/master/countries.json): The JSON database of countries. It's an array of object where each object represents a country and the property `cca3` is unique and will be used as the key to navigate.


As a reminder with Bootstrap:
```html
<!-- Grid: https://getbootstrap.com/docs/4.0/layout/grid/#setting-one-column-width -->
<div class="row">
  <div class="col-5">Column 5/12</div>
  <div class="col-7">Column 7/12</div>
</div>

<!-- List group: https://getbootstrap.com/docs/4.0/components/list-group/#links-and-buttons -->
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">Cras justo odio (active)</a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>
```


### Iteration 2 | Create the entire application

Everything is in the title. Good luck :)

In this case you only need a `Switch` to either show the `CountryDetail`
component or show nothing.
Your `App` component should **always** show the list of countries.
