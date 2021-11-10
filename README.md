- _**fixures**_: fixtures are used as external pieces of static data that can be used by your tests. Read more [here](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Fixture-Files)
- _**plugins**_: plugin file contains the helper libraries to achieve a specific tasks. Different cypress plugins can be found [here](https://docs.cypress.io/plugins/index.html)
- _**support**_: By default Cypress will automatically include the support file cypress/support/index.js. This file runs before every single spec file.
- _**integration**_: integration folder contains the actual tests.

Allure Reports: (https://www.npmjs.com/package/@shelex/cypress-allure-plugin)
 - download allure plugin and command line
    npm i --save @shelex/cypress-allure-plugin allure-commandline
 - cypress/plugin/index.js 

 Cucumber HTML Reports: (https://kailash-pathak.medium.com/generate-cucumber-html-report-in-cypress-3691d596ef19)
   - run tests using test runner or command line to generate cypress/cucumber-json/**.json file
   - node cucumber-html-report.js to generate cucumber report
 
    

