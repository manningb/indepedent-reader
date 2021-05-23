<p align="center">
  <img src="icon.png" width="75" height="75"/>
</p>

<h1 align="center">Independent Reader</h1>

_Independent Reader is a web browser extension to help bypass the premium paywall on indepdendent.ie._

### How it works

This extensions runs in the background of your browser. When you access an independent.ie article, the script will find the article text, which is inside of a JSON object in a script tag of the page's code and render it to the browser. As the article text string does not contain new line characters, these are added where there is no space after a full stop. It will also remove the paywall code from the page. You don't need to press any buttons for it to run.

### Installation Instructions (From: [Bypass Paywalls repo](https://github.com/iamadamdev/bypass-paywalls-chrome))

**Google Chrome / Microsoft Edge** (Custom sites supported)

1. Download this repo as a [ZIP file from GitHub](https://github.com/manningb/indepedent-reader/archive/refs/heads/main.zip).
1. Unzip the file and you should have a folder named `independent-reader-main`.
1. In Chrome/Edge go to the extensions page (`chrome://extensions` or `edge://extensions`).
1. Enable Developer Mode.
1. Drag the `independent-reader-main` folder anywhere on the page to import it (do not delete the folder afterwards).

**Notes**

- Every time you open Chrome it may warn you about running extensions in developer mode, just click &#10005; to keep the extension enabled.
