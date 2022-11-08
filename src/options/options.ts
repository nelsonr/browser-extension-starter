// Learn more: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages

const app = document.querySelector("#app");

if (app) {
    app.innerHTML = `
        <h1>Options Page</h1>
    `;
}

export { };
