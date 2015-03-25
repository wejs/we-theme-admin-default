/**
 * Default We.js theme
 */

module.exports = {
  // theme config
  configs: {
    //sails.js views config
    views: {
      path: 'templates/server',
      layout: 'templates/server/layout.hbs'
    },

    emailTemplates: {
      path: 'templates/email',
    },
    emberTemplates: {
      path: 'templates/ember',
    },
    // one theme javascript file
    javascript: 'files/public/javascript/script.js',
    // one css file
    stylesheet: 'files/public/stylesheet/style.css'
  }
};