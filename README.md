# MyNgx6

Example of how to consume `ngx-cbp-theme` version >=6.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Steps for recreating this project

Steps describing how this project was generated.

### Install Angular CLI 6 Globally
```bash
npm install @angular/cli -g
```

### Create a new Angular App
```bash
ng new my-ngx6 -styles scss --prefix ngx6
```

### Install Required packages 
```bash
npm install @angular/material@6.1.0 @angular/cdk@6.1.0  @angular/flex-layout@6.0.0-beta.15 --save
```

### Migrate Material 5 to 6 
```bash
ng update @angular/material --migrate-only --from 5.0.3 --to 6.2.0
``` 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
