/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// module.exports = (on, config) => {
//   on('file:preprocessor', webpackPreprocessor);
//   allureWriter(on, config);
//   return config;
// };
module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
};

const { GoogleSocialLogin } = require('cypress-social-logins').plugins

module.exports = (on, config) => {
  on('task', {
    GoogleSocialLogin: GoogleSocialLogin
  })
}

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}


// const wp = require('@cypress/webpack-preprocessor')

// module.exports = (on) => {
//   const options = {
//     webpackOptions: {
//       resolve: {
//         extensions: [".ts", ".tsx", ".js"]
//       },
//       module: {
//         rules: [
//           {
//             test: /\.tsx?$/,
//             loader: "ts-loader",
//             options: { transpileOnly: true }
//           }
//         ]
//       }
//     },
//   }
//   on('file:preprocessor', wp(options))
// }
