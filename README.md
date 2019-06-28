# Finance 4.0 Native Mobile App

This repository contains a front-end of the Finance 4.0 developed in React Native for Android and iOS devices.

## Set up
To run the application on your device, you can either use the prebuilt version, or build it locally. Both need [Expo](https://expo.io/) installed on the device. APK's may be released in the future.

#### Prebuilt instructions
Follow [this link](https://expo.io/@gabh/TokenCreator) to download the app from the device.

#### Locally built
```
git clone https://github.com/higab85/tokencreator
cd tokencreator
npm install
expo start
```

### Server
There is a test server running Fin4-core at www.finfour.net.

If you would like to create your own server, please follow the documentationon [the fin4-core github page](https://github.com/FuturICT2/fin4-core).

## How to use the app

#### Account Tab
On first opening the app, the user will be greeted with the a navigation bar with 5 tabs open on the Account tab. From here, the Login view, the user will be able to either log into the server, or click the sign up button to register on the server, on th sign up view. Once logged in, the Account tab will show information on the user's profile, on the profile view. 

Any errors will be relayed on a prompt.

![Sign up view](./screenshots/img4.png) ![Sign in view](./screenshots/img5.png) ![Profile view](./screenshots/img6.png) ![Information prompt](./screenshots/img3.png)

#### Creator View
Next to the Login View we have the Creator view where the user can create tokens on the Fin4 server. The user will be able to choose:
- Token name
- Token symbol
- Decimals
- Purpose
- Burnability
- Transferability
- Mintability
- Whether it is capped (and if so, the cap)

All fields must be filled in, except for the cap if the token is uncapped. The token symbol must be 3 letters, the decimals field only accepts integers between 0 and 255, and the cap accepts any integer greater or equal to 1.

| Field           | Type    | Input validation        |
|-----------------|---------|-------------------------|
| Name            | String  | None                    |
| Symbol          | String  | 3 Characters            |
| Decimals        | Integer | 0<x<255                 |
| Purpose         | String  | None                    |
| Burnability     | Boolean | None                    |
| Transferability | Boolean | None                    |
| Mintability     | Boolean | None                    |
| Capped          | Boolean | None                    |
| Cap             | Integer | if Capped is true: x>0  |

Once the user taps submit, A prompt will appear confirming the user wants to create the token. The user will be able to carry out the action by tapping OK, or abort the action by tapping cancel.

![Creator view uncapped](./screenshots/img7.png) ![Creator view capped](./screenshots/img8.png) ![Confirmation prompt](./screenshots/img2.png)

#### Wallet view
This view shows the tokens held by the user, and the balance. This view can be refreshed by pulling down the screen.

![Wallet view](./screenshots/img2.png)

#### Market view
This view shows the tokens available on the Fin4 server. This view can be refeshed by pulling down the screen.

![Market view refreshing](./screenshots/img9.png)

#### Settings view
The user can specify the URL or IP of the Fin4 server on this view.

![Settings view](./screenshots/img10.png)

## Adding functionality to the app
Integrating a new ﬁeld to the form is extremely easy:
1. In app/containers/Creator.js, add the name of the variable and give it a default value (under initialValue on line 52), and the necessary validation (under validationSchema on line 67) in the Formik component.
2. Add the Input ﬁeld inside the React.Fragment component (between lines 102 and 182), making sure you respect other Input ﬁelds.
3. If the value is a non-integer value, then nothing else needs to be done. If it is an integer, this value must be parsed to a string in app/actions/apiActions.js, under fetchCreateToken() on line 195. This must be done after the serverToken declaration (line 196), and before the return function (line 202). Eg. We want to add a variable called initialSupply, we’d write serverToken.initialSupply = parseInt(token.initialSupply) on line 201 of app/actions/apiActions.js. The reason it must be parsed ﬁrst is because the Fin4 server will return an error if numbers aren’t parsed as strings.

## About React Native and Redux

In React and React Native, different components are conflated together into other components to make an app. The idea is that the smaller components, or presentational components, used by other bigger components are reusable. These bigger components are sometimes called smart components or containers. These will also host the business logic.

There are two main types of state, internal component state, and application state. The internal component state will be unique to the component, and cannot be accessed by other components, unless passed as an input, known as a prop. The application state can be accessed by the entire application, and is explained in detail below.

### SYSTEM ARCHITECTURE

The structure of the app follows the [Flux principles](https://github.com/facebook/flux/tree/master/examples/flux-concepts). Flux is a pattern for a managing data-flow in an application, where data only travels in one direction. For this application, Redux has been used. There are 4 parts in the flux system: view, action, dispatcher and the store.

#### The store
The store is where the hierarchical data is held. This universal tree of data can be accessed from wherever in the application, and seeks to maintain consistent state throughout it. While this information can be accessed by any component, it must only be manipulated in response to an action. When the store changes, an event should be emitted to notify views connected to it, that they should update the information displayed (if applicable).

####  The dispatcher
The dispatcher will receive an action and make the appropriate changes to the store. In redux, there is no concept of a dispatcher. Actions are dispatched and handled by the reducers. The reducers are in charge of manipulating the store according to the actions emitted. This is not an appropriate place to have any logic as this would make debugging the application more cumbersome.

#### Actions
Actions define what functions are to be called to fulfil any command which may be carried out. These can be anything from logging into the application, to deleting an image from the profile. They can be both asynchronous or not. While asynchronous actions may have some logic to execute a request or query, it is encouraged that actions stay as minimal as possible, without manipulating the data.

#### Views
Views are in charge of both dispatching actions, and displaying data from the store. All data manipulation logic belongs here.
