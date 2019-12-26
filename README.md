# React Hooks

## Examples and Documentation for React Hooks features

### UseState

The useState hook lets you add state to functional components.
In classes, the state is always an object.
With the useState hook, the state doesn´t have to be an object.
The useState hook returns an array with 2 elements.
The fist element is the current value of the state, and the second element is a state setter fuction.
New state value depends on the previous state value? You can pass a function to the setter function.
When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function.

### UseEffect

The Effect Hook lets you perform _side effects_ in _functional components_

It is a close replacement for _componentDidMount, componentDidUpdate_ and _componentWillUnmount_
