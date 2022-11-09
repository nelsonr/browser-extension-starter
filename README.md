# Starter kit for creating Browser Extensions

A starter kit for creating browser extensions (using Manifest V3).
The starter kit uses **TypeScript** and **webpack** for compiling and bundling.

## What's included?

The starter kit, includes example of the common parts of an extension:

1. **The Content Script:** the main script that runs inside and interacts with a regular web page;
2. **The Background Worker:** a script running in the background that aids with communication between other parts of the extension or can be used to run some task in the backgound, without interfering the normal browser usage;
3. **The Popup:** A web page that shows up when you click in the browser extension icon, useful for showing additional actions of the extension;
4. **The Options Page:** A page that it's usually reserved for configuration or other related options of the extension.

Not every extension will require all these parts, as such, remove whatever it's not necessary.

> **For example**: Instead of showing a Popup, the extension could just do something when the icon is clicked. In that scenario, the Popup wouldn't be necessary and could be removed.

## How to use

The starter kit uses Node.js so make sure to have it installed before continuing, any stable version should be fine.

1. Clone the repo or download a zip.
2. Run `npm install` inside the project folder.
3. Start the development server with `npm run dev`, the compiled files will be available in the `dist/js` folder.
4. Load the extension on your favorite browser (it needs to be compatible with the Manifest V3). Check this [link](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) to see how to manually load a extension on a (Chromium compatible) browser.

## Creating a production bundle

To create a production ready (minified) bundle:

1. Run `npm run build` in the project folder.
2. Create a zip from the `dist` folder contents (just the contents, not the folder itself).
3. Follow the guidelines on how to publish an extension using the links below.

## Notes

At the moment (November 7th, 2022), Firefox still hasn't adopted the Manifest V3 (it's being worked on).
This means that, to publish a Firefox Addon, you'll need to use the Manifest V2 instead.

## Learn more

Learn more about creating browser extensions using these documentations.

1. Browser Extensions on MDN:
   https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions
2. Chrome Extensions: https://developer.chrome.com/docs/extensions/
3. Firefox Addons: https://addons.mozilla.org/developers/
