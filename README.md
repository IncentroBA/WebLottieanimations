## LottieAnimations

Add Lottie JSON Animations for web

Lottie is an ecosystem of libraries for parsing [Adobe After Effects](https://www.adobe.com/products/aftereffects.html)
animations exported as JSON with [bodymovin](https://github.com/airbnb/lottie-web) and rendering them on Web!

There is also a [Native Lottie Animations widget](https://marketplace.mendix.com/link/component/202739)

## Features

Insert a JSON (`string`) which contains the Lottie file.

File visibility (`attribute`): the attribute to display/hide the widget. This is needed to use the widget as custom
loader (as it does not replace/modify the Mendix default loader).

Image height (`integer`): Set the Lottie image height.

Image width (`integer`): Set the Lottie image width.

## Usage

Place the widget and insert a Lottie JSON and you are good to go!

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
