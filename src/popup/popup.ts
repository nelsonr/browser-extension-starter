// The popup page is visible when the user clicks on the extension icon.
// It's just a regular web page that can receive or send messages to other parts of the extension.
// Learn more: https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup

import type { Tab } from "../types";
import { env, getCurrentTab } from "../utils";

function onButtonClick () {
    const button = document.querySelector("button");

    button?.addEventListener("click", () => {
        // Lets send a message to the current browser tab
        getCurrentTab().then((tab: Tab) => {
            // Sometimes the browser might not be able to
            // get the current tab, so it's always good practice
            // to check first to avoid runtime errors.
            if (tab && tab.id) {
                env.tabs.sendMessage(tab.id, {
                    action: "hello",
                    who: "Popup"
                });
            }
        });
    });
}

const app = document.querySelector("#app");

if (app) {
    app.innerHTML = `
        <h1>Hi there!</h1>

        <p>This is the popup page of your browser extension.</p>
        <p>Open the dev tools and click the button to see a message on the console.</p>

        <button>Say Hello</button>
    `;

    onButtonClick();
}

export { };
