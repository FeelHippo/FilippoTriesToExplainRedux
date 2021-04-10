## MASTER BRANCH: basic React App WITHOUT Redux
### first of all, create a new react app:
```console
    npx create-react-app my-app
    cd my-app
    npm start
```

### install basic dependencies:

- node-sass
- react-router-dom
- axios

### views are implemented using the container/presentational component pattern
[Detailed explanation](https://scotch.io/courses/5-essential-react-concepts-to-know-before-learning-redux/presentational-and-container-component-pattern-in-react)

... so, App.js will determine which CONTAINER is called, depending on the routing.
- Navbar is fixed, so it is placed outside of <Router></Router>
- path '/' will call Home container, path={'/detail/:id'} the NewsDetail container
- these last two containers are not implemented yet, so they are commented out to avoid runtime errors

### How Navbar works
#### the 'entry point' is ./src/containers/Navbar.js, which is a CLASS component.

note how the state is defined inside of the constructor, and hence its SCOPE is imited to Navbar.js

updateSearchField and fetchUserNews are two methods (functions), the first is in charge of updating the internal state as the user types text inside a text field

fetchUserNews is fired when the user clicks on a button, and calls the API

take a look at the render() function: the return value is another component, called NavbarView, and we assign to it three props

#### the presentational component is ./src/components/Navbar/navbar.jsx

this is a simple functional component, note how the props are destructured, and the parenthesis

when text is typed into the input field, onChange={ updateUserValue } will update the state of the container

when the button is clicked, onClick={ fetchUserNews } will call the api function

### .src/services/api.js

NOTE: this service is a function that returns an object
const api = () => { return {} } is an arrow function that returns an object
the returned object exposes methods for api petitions, for instance:
{
    ...
    fetchUserNews: async (values) => await axios.get(values)
    ...
} 

so, when I do api(), the function fires and the object with all the methods is returned as a result

#### this is exactly what happens in Navbar.js lines 5 and 6
- import api module
- destructure the methods by firing the functions

## MOST IMPORTANT ASPECT OF THIS INITIAL PROJECT:
open the console in the devTools
try to insert a text inside the text field, and click on 'Search'
as you can see, the API returns the search results as expected
BUT, these results are now stuck inside the Navbar.js container
it would be difficult and certainly not fun to share those results with other components

ENTER REDUX
