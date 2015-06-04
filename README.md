# ang2-talk

https://docs.google.com/document/d/11VgZ1xDb-gRODPXobrVD4M5z3_gPjTCjY8UttQPgCuM/edit?usp=sharing

## Tooling

### Typescript
`npm install -g typescript`

### Typescript Definitions
`npm install -g tsd`
`tsd query angular2 --action install`

## Compiling/Watching
`tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts`

## Referencing Definitions
`/// <reference path="typings/angular2/angular2.d.ts" />`

## Importing Components, etc
`import {Component, View, bootstrap} from 'angular2/angular2';`

## Run local server
From the directory that contains index.html:

`npm install -g http-server  # Or sudo npm install -g http-server`
`http-server                 # Creates a server at localhost:8080`

In a browser, visit http://localhost:8080/hello-world.html and http://localhost:8080/index.html

## Supporting ES6 syntax and module loading
This example uses Traceur and SystemJS, files included
