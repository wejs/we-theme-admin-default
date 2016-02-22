/**
 * Default We.js admin theme
 */

module.exports = {
  // theme config
  configs: {
    emailTemplates: {
      path: 'templates/email',
    },
    // one theme javascript file
    javascript: 'files/public/script.js',
    // one css file
    stylesheet: 'files/public/style.css'
  },

  autoLoadAllTemplates: true,
  // will be auto loaded
  templates: {},
  // set layouts here
  layouts: {
    'default': {
      template: __dirname + '/templates/server/layout.hbs',
      regions: {
        sidebar: {
          name: 'Sidebar'
        }
      }
    }
  },
  widgets: {}
};