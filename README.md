# JavaScript Code REPL

**Use or add a sample or simply hack index.js**

This is a minimalist, barebones Webpack 3.x and Babel 6.x setup for testing JavaScript features. The only additional libraries are Bootstrap (CDN'd in index.html) for minimal styling and <a target="_blank" title="standard" href="https://github.com/standard/standard">standard</a> for linting. Both of these can be easily removed.

---

## Install dependencies

**After cloning, run the following:**

```javascript
npm install
```

## Run

```javascript
npm start
```

This will do two things:

- Build a simple array based on the samples directory. This is consumed by **codeViewer.js** to build a simple UI.
- Run webpack-dev-server with **live-reloading** enabled.

> Note: If you don't want the UI, simply comment out or remove the import of **codeViewer.js**

---

## Adding Files

There are two primary options:

1. Add or change any file in the samples folder. If adding, be sure to wrap it with the following:

```javascript
export const run = () => {
  /*your code here*/
}
```

This is used to dynamically run the code when loaded. Be sure to run ```npm start``` to rebuild the data and UI.

2. Just use the index.js file and optionally comment out the import.

---

## Debugging

<a target="_blank" title="" href="https://www.johnlivingston.io/blog/chrome-save-repl">
Chrome Developer Tools - Save Files Locally and Building a REPL
</a>

---

## Tweaking Babel Transpilation

The .babelrc uses a barebones babel-preset-env config, which targets the absolute bleeding edge JavaScript features. You can scale this down by tweaking the **.babelrc** file. See <a target="_blank" title="babel-preset-env" href="https://github.com/babel/babel-preset-env">
babel-preset-env
</a>.

---

## Miscellaneous

- **Console Hack** - There is one little hack in **utility.js** where I bind to console.log. This allows me to intercept console.log calls made in  the samples folders, so I can output to the results field without making additional references. **WARNING:** This is a fun pattern, but it should never be used in a real application.
- **Browser Compatibility** - Minimally tested in Chrome 60, Safari 10, and Opera 46
- **Webpack Bug** - has an outstanding issue related to hot reloading when launching the dev server. This is something you may see sporadically when you run ```npm start``` to launch the **webpack-dev-server**. This doesn't cause any harm, but may be confusing when you see it.

<a target="_blank" title="Hot reload triggered multiple times in a row when launching dev server" href="https://github.com/webpack/webpack/issues/2983">Hot reload triggered multiple times in a row when launching dev server</a>

---

<img title="Screenshot" src="./screenshot.png" />
