# Finance 4.0 Native Mobile App

This repository contains a front-end of the Finance 4.0 developed in React Native for Android and iOS devices.

# Introduction

 Many communities lack the resources to create tokens, which is why it was decided that an easy interface to create versatile tokens should be made, so a smartphone app has been developed for Android and iOS. 
 
 The user of the software artefact will be able to sign up and log into the Fin4 server and see their tokens, as well as other tokens on the server. The user will also be able to easily create a token through the server on the main Ethereum network. The user will be able to decide the name, decimals, symbol and purpose of the token, whether the token will be capped (and if so, the cap itself), as well as whether the token can be minted, burnt or transferred. 
 
 The application was developed with Expo, which allows the developer to easily test the application on many devices. The app can be downloaded from and the code can be audited on the following links respectively. Please note that communications with the server will not work unless the user has a working fin4 environment set up. More information on this in the "set up" section below.

https://expo.io/@gabh/TokenCreator

https://github.com/higab85/token-creator 

# Set up
To run the application on your device, you can either use the prebuilt version, or build it locally. Both need [Expo](https://expo.io/) installed on the device. APK's may be released in the future.

### Prebuilt instructions
Follow [this link](https://expo.io/@gabh/TokenCreator) to download the app from the device.

### Locally built
```
git clone https://github.com/higab85/tokencreator
cd tokencreator
npm install
expo start
```

## Server
There is a test server running Fin4-core at www.finfour.net.

If you would like to create your own server, please follow the documentationon [the fin4-core github page](https://github.com/FuturICT2/fin4-core).

# How to use the app

## Modals
After implementing Redux, where state is saved globally, one can be left wondering what to do with the UI state. If certain actions only affect the current screen then surely one should only manipulate the state in that class. The best practice is to [handle the UI with redux](https://codeburst.io/how-to-manage-ui-state-with-redux-24deb6cf0d57).

By handling the UI state with redux, the application state, one can trigger UI changes between sibling components. It also enables one to, for example, trigger a modal (pop-up prompts) when the application has received an asynchronous response, and the user has already changed the view. When UI elements such as Modals can be triggered via actions, the modal need only be declared on one parent class. Two kinds of Modal were made: 
- **Confirmation**: This modal has two buttons, one to confirm the user actually wants to do something, and the other to cancel that and not do anything. This modal is triggered when the user wants to delete a token-wallet. The user is asked for their confirmation before the token is actually deleted. 
- **Information**: This modal has one button (OK) which doesn't do anything. These modals’ only function is to inform the user that something has (or has not) happened. This modal is used when there has been an error logging in or when something has happened in the application.

![Information prompt](./screenshots/img3.png)  ![Confirmation prompt](./screenshots/img2.png)

## Account Tab
On first opening the app, the user will be greeted with the a navigation bar with 5 tabs open on the Account tab. From here, the Login view, the user will be able to either log into the server, or click the sign up button to register on the server, on th sign up view. Once logged in, the Account tab will show information on the user's profile, on the profile view. 

Any errors will be relayed on a prompt.

![Sign up view](./screenshots/img4.png) ![Sign in view](./screenshots/img5.png) ![Profile view](./screenshots/img6.png) ![Information prompt](./screenshots/img3.png)

## Creator View
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

## Wallet view
This view shows the tokens held by the user, and the balance. This view can be refreshed by pulling down the screen.

![Wallet view](./screenshots/img1.png)

## Market view
This view shows the tokens available on the Fin4 server. This view can be refeshed by pulling down the screen.

![Market view refreshing](./screenshots/img9.png)

## Settings view
The user can specify the URL or IP of the Fin4 server on this view.

![Settings view](./screenshots/img10.png)

# Adding functionality to the app
Integrating a new ﬁeld to the form is extremely easy:
1. In `app/containers/Creator.js`, add the name of the variable and give it a default value (under `initialValue` on line 52), and the necessary validation (under `validationSchema` on line 67) in the `Formik` component.
2. Add the `Input` ﬁeld inside the `React.Fragment` component (between lines 102 and 182), making sure you respect other `Input` ﬁelds.
3. If the value is a non-integer value, then nothing else needs to be done. If it is an integer, this value must be parsed to a string in `app/actions/apiActions.js`, under `fetchCreateToken()` on line 195. This must be done after the `serverToken` declaration (line 196), and before the `return` function (line 202). Eg. We want to add a variable called `initialSupply`, we’d write `serverToken.initialSupply = parseInt(token.initialSupply)` on line 201 of `app/actions/apiActions.js`. The reason it must be parsed ﬁrst is because the Fin4 server will return an error if numbers aren’t parsed as strings.

# About React Native and Redux
 
The task proposed was to make a modern looking native app for Android. Having considered Flutter and Kotlin, a framework which could be tested on iOS was needed, so that meant Kotlin could not be used. React Native had more documentation and looked easier than Flutter, so it was decided to write the program in React Native. React Native is a framework for creating native apps for iOS, Android and other platforms using React and JavaScript.

In React and React Native, different components are conflated together into other components to make an app. The idea is that the smaller components, or presentational components (stored in `app/components`), used by other bigger components are reusable. These bigger components are sometimes called smart components or containers (stored in `app/containers`). These will also host the business logic.

There are two main types of state, internal component state, and application state. The internal component state will be unique to the component, and cannot be accessed by other components, unless passed as an input, known as a prop. The application state can be accessed by the entire application, and is explained in detail below.

## SYSTEM ARCHITECTURE

The structure of the app follows the [Flux principles](https://github.com/facebook/flux/tree/master/examples/flux-concepts). Flux is a pattern for a managing data-flow in an application, where data only travels in one direction. For this application, Redux has been used. There are 4 parts in the flux system: view, action, dispatcher and the store.

### The store
The store is where the hierarchical data is held. This universal tree of data can be accessed from wherever in the application, and seeks to maintain consistent state throughout it. While this information can be accessed by any component, it must only be manipulated in response to an action. When the store changes, an event should be emitted to notify views connected to it, that they should update the information displayed (if applicable).

In this application, 2 ways of accessing the store have been used; 
1. Directly on the actions
2. Using `connect` on the components

#### 1. Directly
If it is not necessary to change the state, then one can access the state directly. In this particular instance, `getHost` is a function which fetches the `state.settings.host` on execution.
```js
getHost = () => store.getState().settings.host
```
#### 2. connect
`connect` can only be used from a component, and allows the component to interact with the store (both retrieve information, and dipatch changes).

```js
// app/containers/Wallet.js

const mapStateToProps = state => {
  return {
    tokens: state.user.balances,
    refreshing: false
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refresh: async () => {
      await dispatch(fetchTokens())
      dispatch(fetchBalances()) 
    }
  }
}
export default connect( mapStateToProps, mapDispatchToProps)(WalletList)
```

- `mapStateToProps` is retrieving the necessary parts from the state, and saving it as props. `connect` will make sure that if the store changes, that so will the props.
- `mapDispatchToProps` saves the functions which may be called to interact with the store, to the props.
- Then `TokenList`, is the component that these props will be passed onto.

More can be read about connect [here](https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/).

###  The dispatcher
The dispatcher will receive an action and make the appropriate changes to the store. In redux, there is no concept of a dispatcher. Actions are dispatched from views, and handled by the reducers. The reducers are in charge of manipulating the store according to the actions emitted. This is not an appropriate place to have any logic as this would make debugging the application more cumbersome.

```js
// app/reducers/ModalReducer.js
const initialState = {
  modalType: null,
  modalProps: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return {
        modalProps: {...action.modalProps, modalIsOpen: true},
        modalType: action.modalType
      }
    case ActionTypes.HIDE_MODAL:
      return initialState
    default:
      return state
  }
}
```

`ModalReducer.js` above, is the reducer for the modals. `initialState` holds the hidden (no modal) state. If there is no state when the reducer is called, `initialState` will be used as the state. 

### Actions
Actions define what functions are to be called to fulfil any command which may be carried out. These can be anything from logging into the application, to deleting an image from the profile. They can be both asynchronous or not. While asynchronous actions may have some logic to execute a request or query, it is encouraged that actions stay as minimal as possible, without manipulating the data.

```js
// app/actions/apiActions.js
// ...
export function receiveCreateTokens(response){
  return{
    type: ActionTypes.RECEIVE_CREATE_TOKENS,
    response,
    receivedAt: Date.now()
  }
}

export function fetchAuth(credentials){

  return function(dispatch) {
    dispatch(requestAuth(credentials))
    let url = 'http://' + getHost() + ':8181/wapi/login'
    Reactotron.log("url", url, credentials)
    return fetch( url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },  
        credentials: 'same-origin',
        body: JSON.stringify(credentials),
      })
      .then(response => {
        handleResponse(response, dispatch, receiveAuth)
      })
  }
}
// ...
```

Above we have 2 action functions; `receiveCreateTokens` is synchronous, and `fetchAuth` is asynchronous, as it calls a URL. 

Actions are stored in `app/actions`, and have been separated into modules like the reducers for simiplicity. Note that they also use the constants in `app/constants/ActionTypes.js`.


### Views
Views are in charge of both dispatching actions, and displaying data from the store. All data manipulation logic belongs here.

```js
// app/components/WalletList.js

const WalletList = ({ tokens, refreshing, refresh }) => (
  <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={tokens}
        extraData={tokens}
        removeClippedSubviews={false}
        keyExtractor={(item, index) => JSON.stringify(index)}        
        refreshing={refreshing }
        onRefresh={ () => refresh() }
        renderItem={({item}) => {
          return (
          <Token 
              // onPress={ () => onTokenPress(item) }
              item={item}
            />)
        }}
  >
  </FlatList>
)

export default WalletList
```

Above `WalletList` takes the props `tokens`, `refreshing`, and `refresh`. These were passed to it by `Wallet` in the snippet further up.

All views are stored either in `app/containers` or in `app/components`, except for `App.js` and `app/index.js`.