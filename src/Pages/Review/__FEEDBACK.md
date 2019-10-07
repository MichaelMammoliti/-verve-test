Generals:
- use defaultProps or default argument's values, as the code does not use a type system we can at least understand what type we need to pass.
- more sanity check on your components will improve performances by not rendering the dom node and leaving it blank. If we do not have a prop we should check that, otherwise we will not be able to use methods safely (i.e. for arrays: unable to access map of undefined).
- we should add some classes to follow BEM conventions as global styles are used. leaving blank html dom nodes is becoming confusing while debugging on dev mode.
- every component which is used inside a specific "parent" should be tightly coupled, and should live inside its parent folder, maybe a better folder structure would help.
- probably use camel case and not pascal case for your folder, it's a convention used for npm modules
- use displayName as this will improve your debugging experience
- indentation: 2 spaces
- CONSTANTS for action types

Reducers:
- inside your reducer using a prefix is probably a good idea, this allows cleaner action's names and avoid conflicts. i.e. "BASKET/ADD".
- some components do not need to be class if no lifecycle and state is present
- you might want to split your reducer into smaller and testable functions.

TicketCard.jsx
- put your default state values/keys inside the state.
- use classnames to do dynamic classes
- bind your actions and pass the action creators as props is better than dispatching directly inside the view
- this component should be stateless, we can pass the "active" prop from the parent by storing the active item data into the state, in the way it's coded now it will not lose the active state anymore until we refresh.

TicketCard.scss
- naming conventions should be used, if the component is named with pascal case, the .scss file should have the same case conventions to be consistent with the rest of the files
- use BEM conventions

TicketList.jsx
- stateless component

Total.jsx
- abstract all your utilities into one separate file
- BasketCard is not used and not needed, I guess we can remove it?
- sometimes abstracting inline function of the 'reduce' is convenient, it will make the code more testable and it will not create an anonymous function every time we execute it.
- sanity checks on props will prevent possible bugs;
- as the total only contains a string, I am not sure this component is needed.. maybe we should consider moving the logic outside and we should pass down props? we could calculate the total in a selector for example and we can pass everything as props as we could have access to the basket there.

TicketList
- could we improve snapshot by testing when we pass undefined as props and do some sanity check?

BasketCard.jsx
- getCardCost: can be abstracted into an utility file
- getCardCost: you can simply return a value without creating a specific constant/variable
- nesting destructuring can be confusing, could you please destructure in a separate line?
- sanity checks on this.props.item could be useful if some props are undefined, maybe lodash/get could help
- wrapping your elements into divs with classes could help readability and understanding the context of what value the node should contain
- consider lifting the state up to the parent and pass down callbacks which then call actions directly (mapDispatchToProps)

Basket.jsx
- fix indentation on first line
- we can avoid passing down a key to the components and instead creating a wrapper with a key assigned to it
- we can filter all basket before doing the render

actions/index.js
- maybe we should abstract basket's actions into a separate file and importing it
- tests for actions

reducers/index.js
- could you rename "basket" to "basketSelector"?

- Review.scss
maybe we should abstract the grid logic into a component, do we have one in our storybook library?
