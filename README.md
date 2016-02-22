# wejs-theme-admin-default

> Default We.js administrative theme

## How to develop:

### install for development:

#### 1 install all dependencies
```sh
npm install
```

#### 2 link this theme as npm module in your we.js project
```sh
#First in your theme folder:
## you may need sudo for this command
ǹpm link 
# then enter in your project and type:
npm link we-theme-admin-default
```

#### 3 change your project settings to use this theme:

**file:** [project]/config/themes.js
```js
module.exports.themes = {
    enabled: [
      'we-theme-admin-default'
    ],
    admin: 'we-theme-admin-default'
};
```

### Run the theme tasks and project

##### Run the tasks
```sh
# in  theme folder
npm run tasks
```

##### Run the project
```sh
# in project folder
npm run dev
```

## Links

> * We.js: https://github.com/wejs/we
> Base theme: http://startbootstrap.com/template-overviews/sb-admin-2/

## License

MIT

