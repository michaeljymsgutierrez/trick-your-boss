# Trick Your Boss

<p align="center" style="margin-bottom:10px;">
  <a href="https://github.com/michaeljymsgutierrez/trick-your-boss">
    <img src="https://assets-omega-neon.vercel.app/images/trick-your-boss.png" alt="trick-your-boss-logo" height="200"  />
  </a>
</p>

This is a simple Chrome extension that helps you look busy by automatically reloading the current tab every 30 seconds.

## Table of Contents

- [Features](#features)
- [How it works](#how-it-works)
- [How to use it](#how-to-use-it)
- [Disclaimer](#disclaimer)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Auto-Reload:** Automatically reloads the current tab every 30 seconds to simulate activity.
- **Sleek UI:** A beautiful "glass card" popup design that is easy to use.

## How it works

The extension is composed of a content script and a popup.

- The **content script** is injected into the active tab and is responsible for the reloading logic. It uses the browser's local storage to persist the enabled/disabled state.
- The **popup** provides a user interface with "Start Pretending" and "Stop Pretending" buttons. It communicates with the content script to enable or disable the auto-reloading feature.

## How to use it

1.  Clone this repository or download the source code.
2.  Open Chrome and go to `chrome://extensions`.
3.  Enable "Developer mode".
4.  Click on "Load unpacked" and select the `src` directory.
5.  Click on the extension icon in the toolbar to enable or disable the auto-reloading feature.

## Disclaimer

This extension is for educational purposes only. Use it at your own risk. Your boss might not be amused.

## Contributing

Contributions are welcome! Please feel free to fork this repository, create a new branch, and submit a pull request.

## License

This project is licensed under the MIT License.
