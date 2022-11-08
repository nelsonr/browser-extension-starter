// Learn more: 

import type { Tab } from "../types";
import { env, getCurrentTab } from "../utils";

function onButtonClick () {
    const button = document.querySelector("button");

    button?.addEventListener("click", (ev) => {
        // Lets send a message to the current browser tab
        getCurrentTab().then((tab: Tab) => {
            if (tab && tab.id) {
                env.tabs.sendMessage(tab.id, {
                    action: "hello",
                    who: "Popup"
                });
            }
        });

        ev.preventDefault();
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
