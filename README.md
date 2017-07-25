# FaqApp

![ScreenShot](assets/app.png)

Simple Questions and Answers Application

## Functionality
- Form to add questions and answers.
- We can toggle and delete them.
- Pushing questions and answers to localstorage, even if we refreash the page.

## Technologies

- Angular 4
- HTML5/CSS
- TypeScript
- Bootstrap 4 Alpha
- Jquery
- Tether
- git


## Installation
#### Angular CLI
```
ng new faqApp
cd faqApp
ng serve --open
```
#### Bootstrap
```
npm install bootstrap@4.0.0-alpha.6 jquery tether --save
```
##### Adding dependecies to angular-cli.json
```javascript
"styles": [
    "style.css",
    "../node_modules/bootstrap/dist/css/bootstrap.css" // <- added this line
]
```

```javascript
 "scripts": [
        "../node_modules/jquery/dist/jquery.js", // <- added this line
        "../node_modules/tether/dist/js/tether.js", // <- added this line
        "../node_modules/bootstrap/dist/js/bootstrap.js" // <- added this line
      ]
```

## License
The MIT License