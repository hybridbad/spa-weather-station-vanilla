<<<<<<< HEAD
# SPA

## Try the app at this link

## Installing

Setup instructions

Clone repo:

Install dependencies
`npm-install`

Run local server
`npm start`

Go to to local server at port 8080:
`127.0.0.1:8080`

## Project overview

## Technologies used

JavaScript / CSS / HTML  
Node.js / Express  
Heroku

### Server

Link

## Testing
=======
# spa-weather-station

# VueJS

- Templates are a big part of VUE
  - Separate UI from the business logic
  - Vue is responsible for compiling the templates into what user sees
  - minimizes amount of code to write
  - protect you from changes
- UI and data are bind together by declarative bindings
  - they hold ui and data together
  - simplify development
  - can separate working on ui from working on backend
  - remove the burden of managing the DOM (things update automatically)

Size of vue: 74.8 kb

Run-time performance

- VDOM: Virtual DOM
  - vue uses a virtual document object model - this makes it run fast
  - it does not blocking the user while it updates the dom
  - virtual dom minimizes the number of calculation browsers needs to make to change the page the user sees
  - it is a lightweight copy og the actual DOM
  - it is responsible for what needs updating
  - it batches the updates (instead of performing each update individually)

Browser support:

- Supports legacy browsers
- SupportsChrome, Apple, Microsoft, Mozilla
- Supports Safari on ios, Android

Licensing: MIT (like jQuery, Angular)

## Installing and Setting up Vue:

- Vue.js (Core library)
  - via CDN - unpkg - it is kept in sync
  - add the bottom of the body html

<script src="https://unpkg.com/vue"></script>

- Axios (HTTP requests)
  - library for http requests - recommended by axios
  - reference from unpkg
  - ability to make http request sin the vue apps

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

Example of AXIOS request to weatherAPI: https://www.sitepoint.com/fetching-data-third-party-api-vue-axios/

```js
var weatherData = new Vue({
  el: '#weatherData',
  data: {
    results: []
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/data')
      .then(response => (this.results = response.data.data.reverse()));
  }
});
```

## Initializing an instance of VUE

- invoke the Vue constructor function
- instance of Vue = view (has a role)

```js
var weatherData = new Vue(){
  el: 'weatherData',
  data:{

  }
}
```

- this code initializes weatherData
- if you visit a page with this in the script html, you see nothing
- Vue constructor `new Vue`, was imported from the vue js core library from above
- can pass options to constructor to make weatherData more functional

`var weatherData = new Vue(){el:'weatherData', data:{}}`

**Mounting weatherData onto the DOM**

- serves as the bridge between the UI and data we want to show
- mounting is when VUEs virtual dom is shown to the user
- this is when the view becomes visible to the user
- to mount an instance of VUE onto the DOM, use the `el` option
- el identifies the HTML element the vue instance will be mounted onto

  - 2 choices

    - assign to an html element: `el: document.getElementById('weatherData')`
    - or via a css selector: `el: '#weatherData'`

- mounting an instance of view replaces the actual HTML DOM element with the VUE generated DOM
  - don't set el option to html or body elements

**Lifecycle of a view**
Has 4 stages

- creation
- mounting
- updating
- destroy

Each stage has 2 hooks: before and after

- each hook is created in this format: beforeCreate / created or beforeMount / mounted

Creation:

- when you call the view constructor
  - beforeCreate hook fires first
  - after implementing logic in the beforeCreate hook, it gets executed
  - state gets initialized (loading properties, event handlers, data and watchers)
  - after the state gets initialized, the created hook will fired
  - after view has completed its creation stage, the template is compiled
  - once template is compiled, the view's life-cycle move into the mounting stage

Mounting:

- responsible for inserting the view into the dom
  - beforeMount is triggered first
    - custom code can be executed here
  - view's virtual dom gets created
    - this dom replaces the actual html dom identified by the el property discussed above
    - virtual dom enables UI changes to happen fast
  - after this swap, the mounted hook gets fired
  - after the view completes the mounting stage, it begins listening for changes to the data
    - view spends most of its time in this listening stage

Updating:

- if any property in the initialized data object gets changed, the view goes through the update stage
- responsible for modifying the virtual DOM and re-rendering the UI
  - if a data property in vue, that's bound to the UI is modified, the beforeUpdate hook is fired
  - the beforeUpdate can execute custom code
  - once completed, this stage re-renders the virtual dom with the fewest number of changes necessary
    - these changes are called patches
    - once patches are generated, the virtual DOM gets updated
    - UI on screen gets updated
  - updated hook gets fired

Destroy:

- VUE instance method - this stage happens only if the method is called on the VUE instance
- when this is called the view enters in the destroy stage
- starts with beforeDestroy and any custom code being executed
- moves to tearing down the virtual DOM
- stop watching for changes to data
- vue instance will trigger the destroyed hook
- destroy stage is not called if user navigates to a different page

## Creating Vue.js Templates

- created with HTML (valid html)
- data that drives these templates are defined in the Vue instance it
- to drive the view we need data

data property: object with 2 roles

- at design time it represents the schema
- at runtime it serves as the model

```js
var weatherData = new Vue(){
  el: 'weatherData',
  data:{                      // <- data property  //
    appName: 'WeatherData'                         // Plain Old JS Object (POJO)
  }                                                //
}
```

- data property is a POJO

  - nothing is unique to Vue in that
  - it means I can access view data from outside of the Vue

  `weatherData.data.appName`

- VUE automatically creates shortcuts to data properties
- means I can work with VUE's data like this:

  `weatherData.appName`

- apparently it's not as easy as this in other UI frameworks

## Loading Data properties

- VUE loads them during the creation stage (see life cycle)
- for each property in the data object, VUE uses JS built in Object.defineProperty method to create Getters / Setters
  - this enables change notifications and dependency tracking under the covers
  - this means that when the data property changes, everything that relies on it will know about the change
  - this means making the property REACTIVE

Caveats:

- can only modify properties defined in the data object
- can't add properties to the data object at runtime
- can't remove properties from the data object at runtime
  - because data properties are converted to getters/setters during the creation stage
- this all shows how the data object of VUE serves as a schema, like when creating a database table
- if you know you need a property in the view eventually, but not when the view is created, just assign it to null or empty value
- in browser console, data properties with JS objects are formatted differently, because VUE adds getters/setters
  - to get around this and be able to read the objects created by vue, install an extension in chrome: vue-devtools - we'll be able to see JS objects

## Naming properties

- can be anything
- use js naming rules: start with letter, case-sensitive, cannot use reserved words
- SPECIFIC TO VUE: property names should not start with \$ or \_
  - these can conflict with VUE internal operations

## Property values

- each property in the data:{} aka data object has a value
- the value will be shown in the view
- if i modify a value, the UI will async change to reflect the change
- dependency tracking and change modification is important
- data property values should JUST BE DATA
- supports primitive values: numbers, string, dates arrays
- does not support native objects: Number, String, Date, Array
- SICK with RAW DATA
- this simplifies state management
- once data object is defined, we can bind it to a template

## Binding content to a template

Binding text: plain text

- semantic syntax
- declarative syntax
- onetime bindings

**Semantic binding**

- create a data binding by using a semantic syntax: use {{ ... }}

Example:

```html
<h1>Some text {{appName}}</h1>
<h1>{{appName}}</h1>
<h1>{{appName}} {{someOtherData}}</h1>
```

```js
var weatherData = new Vue(){
  el: 'weatherData',
  data:{                      // <- data property  //
    appName: 'WeatherData'                         // Plain Old JS Object (POJO)
  }                                                //
}
```

```html
<h1>Some text {{appName}}</h1>
```

- if this code is executed, vue would look for {{..}} and execute/replace them with actual values from the data object
- VUE looks inside each pair of {{...}} and evaluate the code
- in this case, code is a variable called `appName`
  - vue looks for `appName` in the data object on the vue instance
  - if a property named appName is found, vue replaces {{appName}} with its value at runtime
  - if no property is found in the data object, the replacement is a "" and a warning in console window
- this is called interpolation

**Declarative bindings**

- created via directives
- directives are predefined tokens that tell Vue to do something specific to a DOM element
- they provide a way to reactively update the DOM when an associated value changes
- vue has several directives from the box
- they all begin with `v-`

Example: `v-text`

- helps interpolate a property value as the text of an HTML element

Example:

```html
<h2 v-text="appName"></h2>
```

- at runtime VUE assigns the text content property of the html element to the property value
- this bind the element's entire content to a property
- you can bind to part of an element's content by using the semantic syntax {{...}}

**One time bindings**

- helps optimize view performance
- use v-once in the html tag when you don't need to listen to changes
- this tells vue to render the element is hosting it `<h2 v-once>` to run only once - this skips the updated stage of the cycle
- any child of an element with the once directive will also be rendered only once

```html
<h2 v-once>{{appName}}</h2>
```

- when the page loads, the appName binding takes effect = value is displayed
- if you try to change the appName property by dowing weatherData.appName = "something else" - will not work

## Binding to HTML

- can show plain html inside the element by adding the html directive to an element

```js
var weatherData = new Vue(){
  el: 'weatherData',
  data:{
    appName: '<a href="/">WeatherData</a>'
  }
}
```

- appName is now a link, and tipically you wouldnt do this
- you want to keep the ui separate to the data
- but you might get data some a webservice that might include HTML
- to bind an html to a template you can use the html directive

```html
<h2 v-html="appName"></h2>
```

- v-html updates the innerHTML property of the element it's attached to

## Binding to HTML Attributes

v-bind

- binds html attributes
- can bind data property values to HTML attributes
- {{...}} can;t be used inside HTML attributes
- must use a bind directive to the src attribute

```js
var weatherData = new Vue(){
  el: 'weatherData',
  data:{
    appName: '<a href="/">WeatherData</a>',
    appLogo = '/public/img/logo.png'
  }
}
```

```html
<div id="weatherData">
  <img v-bind:src="appLogo" />
</div>
```

## Binding to CSS properties - inline css

### Getting CSS properties from an Object

- can get css props from a JS object during binding
- similar to traditional CSS approach
  - style string is a JS object
  - each property name of the object represents the name of a CSS property
  - value associated with each property can be a property name or a static value

```js
var weatherData = new Vue(){
  el: 'weatherData',
  data:{
    appName: '<a href="/">WeatherData</a>',
    appLogo = '/public/img/logo.png',
    color: '#FF6A00'
  }
}
```

```html
<div id="weatherData">
  <h2 v-bind:style="{color:color}">{{appName}}</h2>
</div>
```

- binding to the css color property

**Problem**

- you can't set variables with dashes in JS objects `v-bind:style="{color:color}"` <- this is the JS object which is used to assign css properties in the style tag

**Solution:**
To add something like font-family use camel case

```js
var weatherData = new Vue(){
  el: 'weatherData',
  data:{
    appName: '<a href="/">WeatherData</a>',
    appLogo = '/public/img/logo.png',
    color: '#FF6A00',
    appNameFontFamily: 'someFont'
  }
}
```

```js
<h2
  v-text="appName"
  v-bind:style="{
    color:color,
    fontFamily:appNameFontFamily
  }"
/>
```

The above can be refactored to a data value property like this: (cleans up code)

```js
var weatherData = new Vue(){
  el: 'weatherData',
  data:{
    appName: '<a href="/">WeatherData</a>',
    appLogo = '/public/img/logo.png',
    appStyle:{
      color: '#FF6A00',
      fontFamily: 'Verdana',
      margin: 0
    }
  }
}
```

```js
<h2 v-text="appName" v-bind:style="appStyle" />
```

### Getting CSS properties from an Array

- styles shared across multiple elements
- ex: color of an element shared with other elements
- when we need to use multiple style definitions during binding: use a JS array
- it is a way of separating styles and make them reusable across multiple elements
- properties are stacked from left to right
- latest property setting has the greatest precedence

Example:

```js
var weatherData = new Vue(){
  el: 'weatherData',
  data:{
    appName: '<a href="/">WeatherData</a>',
    appLogo = '/public/img/logo.png',
    accentColor:{
      color: '#FF6A00',
    },
    headers: {
      fontFamily:'Verdana',
      margin: 0
    }
  }
}
```

```js
<h2 v-text="appName" v-bind:style="[accentColor, headers]" />
```

**Strive to keep CSS separate from data**

- instead of defining CSS properties in the data object
- define them in standards CSS classes and bind to those classes

### Binding to CSS Classes

- a way of getting CSS classes from a JS object
- improvement from binding to css properties
- helps maintain separation between design and data - keep code clean and maintainable

Example: code above refactored

DATA Object

```js
var weatherData = new Vue(){
  el: 'weatherData',
  data:{
    appName: '<a href="/">WeatherData</a>',
    appLogo = '/public/img/logo.png',
    accentColor: 'accent-color',
    headers: 'headers'
  }
}
```

UI

```html
<style>
  .headers {
    font-family: 'Verdana';
    margin: 0;
  }
  .accent-color {
    color: #ff6a00;
  }
</style>

<h2 v-text="appName" v-bind:class="[accentColor, headers]"></h2>
```

- separated UI from data
- not generating html and css from js, we complement HTML and CSS
- this approach works by prepending the class attribute withe the bind directive `v-bind:class=`
- similar to binding to the style attribute `v-bind:style`
- can combine a class attributes to a JS array or a JS object

Differences:

- example binds class attribute to a JS array
- each element in array is name of a property
- the property references the name of an actual CSS class `accentColor` or `headers`
- at runtime, H2 element becomes this: <h2 class = "accent-color headers"> </h2>
- we can make this `v-bind:class="[accentColor, headers]">` into `v-bind:class="headerStyles">` and adapt the data object of the VUE instance

Binding to a JS object

```html
<h2
  v-text="appName"
  v-bind:class="{
    'headers:' true //<name:headers and flag true
    }"
></h2>
```

- this is a way to conditionally apply CSS classes to an element
- code above binds the headers css class to the h2 element via a JS object - by setting it to true we accomplish this
- headers css class gets added the the h2 element in the update stage
- can use conditionals from the data object to assign css attributes to an html element

DATA OBJECT

```js
var weatherData = new Vue(){
  el: 'weatherData',
  data:{
    appName:"WeatherData",
    isOnline: false                 //<-this
  }
}

```

UI
CSS

```html
<style>
  .headers {
    font-family: 'Verdana';
    margin: 0;
  }
  .accent-color {
    color: #ff6a00;
  }
</style>

HML and bindings
<h2
  v-text="appName"
  v-bind:class="
'headers': true,
'accent-color': isOnline              //<- sets condition here of when to apply the accent-color class
"
></h2>
```

- now, when the data property isOnline changes, the UI will reflect the change

## Javascript expressions

- expression is a line of code that produces a value
- only expressions can be used in bindings
- use a JS expression in a template by using {{..}}
- they are evaluated withing the context of a view
- when evaluated, an expression is scoped to the hosting view instance

Example

```html
<h2 v-test="appName" , v-bind:style="{color:isOnline? '#FF6A00' : '#000'}"></h2>
```

This is an expression: {color:isOnline? '#FF6A00' : '#000'}

- determines the color of the header
- uses the isOnline property of the data field to make that decision
- style is applied conditionally at runtime
- if the value isOnline changes, the expression will be reevaluated
- expressions run within a sandbox - gets executed in an isolated environment
- global variables can't be used in expressions, like \$
- no way to whitelist them
- they conflict with VUE itself

# Binding with Forms in VUE.js

- collect data through forms
- bind to forms in view
- use input bindings to collect data
- clean up data when collecting it - remove whitespace / perform utility type tasks
  - modify bound values

## Using Input Bindings

- create a two way binding to collect data
- use the v-model directive
- can be used with input text, text area and select tags
- can use the model directive with text fields, checkboxes, radio buttons and drop down lists

## Binding to Text fields

**input tag**

- enter a search query in an html input element
- in vue, you can bind to the input element using a v-model directive like this: `<input v-model="query" placeholder="Search...">`
- this binds to an html input element
- this assumes there is a property in data scope called query
- query property bridges the UI and the data with the help of the model directive

```js
var weatherData = new Vue(){
  el: 'weatherData',
  data:{
    appName:"WeatherData",
    query: ''                //<-this is the query element for the input
  }
}
```

using v-model directive to bind the input to the query in data property

```html
<div id="growler">
  <input v-model="query" placeholder="Search..." />
  <div>Searching for: {{query}}</div>
</div>
```

- with this, if you type something in the input area, the query will be updated and update the ui accordingly
- this is the magic of 2 way binding - change notifications impact the ui

**Textarea**
Example:

```js
var weatherData = new Vue({
  el: '#weatherData',
  data: {
    query: '',
    emailMessage: ''
  }
});

<input v-model="query" placeholder="Search..." />
<div>Searching for: {{ query }}</div>

<textarea v-model = "emailMessage"></textarea>
<div>Email text: {{ emailMessage }}</div>
```

**Check boxes**

- choose a single value
- choose multiple values - checkbox list

Example:

```html
<input type="checkbox" v-model="isPowerSyntaxEnabled" />
```

- input type is set for checkbox
- and binding is to isPowerSyntaxEnabled

**With multiple options**

- you have to create a property that holds an array, and each checkbox selected by client will save its value to this array.
- once that is done you can show the selected checkboxes
- this is updated live

Example:

```js
var weatherData = new Vue({
  el: '#weatherData',
  data: {
    isPowerSyntaxEnabled: false,
    searchIndex: []
  }
});

<label><input type="checkbox" v-model="searchIndexes" value="temperature" />Temperature</label>
<label><input type="checkbox" v-model="searchIndexes" value="pressure"/>Pressure</label>
<label><input type="checkbox" v-model="searchIndexes" value="humidity"/>Humidity</label><br>
<small>Selected: {{selectedIndexes}}</small>
```

**Drop down lists**

- created with select element
- to make a single choice
- to make multiple choices
- use v-model directive

Example:

```js
var weatherData = new Vue({
  el: '#weatherData',
  data: {
    selectedSearchIndex: 'temperature'
  }
});
```

```html
<div id="weatherData">
  <select multiple v-model="selectedSearchIndex">
    <option value="temperature">Temperature</option>
    <option value="pressure">Pressure</option>
    <option value="pressure">Humidity</option>
  </select>
  <p>Selected: {{selectedSearchIndex}}</p>
</div>
```

## Modifying bound values

- vue syncs a value input by the user with the data whenever an input event is fired
- input event is triggered when an html input or select element collects user input
- this occurs after the keypress html dom event but before the keyup event
- once the keyup event is fired, the value input from the user can be modified
  - VUE provides 2 modifiers: trim string values and automatically convert input values to numbers

**To use it, append .trim to the model directive:**

```html
<input v-model.trim="query" placeholder="Search..." />
```

- once the white space is removed, the modified value is sent to the query property in the Vue data property

**Use .number modifier to cast user input to a number:**

- useful as html elements always return strings
- this tries to get a Number object out of the input value
- to use number modifier append .number to the model directive

```html
<input v-model.number="result" placeholder="2+3=" />
```

- this will take a value, cast it to a number and send it to the result property in the Vue data property
- it is cast to float - uses a js parseFloat
- property will be a number if at least the first character of the input is a number
- leading and trailing whitespace ignore
- if leading char is not a number, than the value will be interpreted as a string

## Lazily bind values

- example: do a search when the input has changed only, not with every letter typed
- it fires after the input event has lost its focus
- the data model updates after the input field loses focus: this is called lazy binding
- append .lazy modifier to the model directive

Example:

```html
<input v-model.lazy="query" placeholder="Search:..." />
```

**Can chain modifiers**

- remove white space after the query has changed

<input v-model.lazy.trim="query" placeholder="Search:..." />

Form elements

```html
<input v-model="query" placeholder="Search..." />
<div>Searching for: {{ query }}</div>

<textarea v-model="emailMessage" placeholder="Message..." /></textarea>
<div>Email text: {{ emailMessage }}</div>

<label><input type="checkbox" v-model="searchIndexes" value="temperature" />Temperature</label>
<label><input type="checkbox" v-model="searchIndexes" value="pressure"/>Pressure</label>
<label><input type="checkbox" v-model="searchIndexes" value="humidity"/>Humidity</label><br>
<small>selected: {{searchIndexes}}</small>

</br>
</br>

<select multiple v-model="selectedSearchIndexes">
  <option value="temperature">Temperature</option>
  <option value="pressure">Pressure</option>
  <option value="humidity">Humidity</option>
</select>
<p>Selected: {{selectedSearchIndexes}}</p>
```

# Respond to user events

## Using event handler

- attach to events
- use the v-on directive
- listens for events in the html dom

Example

```html
<button v-on:click="executeSearch">Search</button>
```

- this executes a search when the button is clicked
- using the v-on directive to attach to the button click event
- this event can be any JS event listener
- custom JS can be run when an event is triggered
- in this example I'm using executeSearch custom JS

## Defining event handlers

- executeSearch is the name of a JS function
- this can be found in the methods property of the VUE instance
- this function must be defined within the scope fo the view
- for this you must set up the methods option

Example:

```js
var menu = new Vue({
  el: '#menu',
  data: {
    componentName: 'Menu',
    list: ['Option 1', 'Option 2']
  },
  methods: {
    retrieveWeatherData: function() {
      alert('Weather data retrieved');
    }
  }
});
```

```html
<input v-model="query" placeholder="Search..." />
<div>Searching for: {{ query }}</div>
<button type="button" v-on:click="executeSearch">Search</button>
```

## Examining event

- include an optional event parameter in the method
- this shows the query
- and also the text of the button aka event.target.innerText
  Example:

```js
methods: {
    executeSearch: function(event) {
      alert("Query: " + this.query + '"Button:"' + event.target.innerText + '"');
    }
  }
```

## Passing other params to a method

- use inline JS statement
- expand the the event reference in the on directive

Example

- on a server, search might assign a token to a user
- that token can be passed to the eventHandler
- to do this, expand the event reference

```js
var growler = new Vue({
    el: '#weatherData',
    data: {
        query: ''
    },
    methods: {
        executeSearch: function(t, e) {
            var msg = 'Token: ' + t + '\n' +
                'Query: ' + this.query + '\n' +
                'Button: ' + e.target.innerText
            ;
            alert(msg);
        }
    }
```

```html
<button
  v-on:click="executeSearch(12345, $event)"
  type="button"
  class="btn btn-primary"
>
  Search
</button>
```

- \$event is a reserved variable in vue
- will give me access to the html dom event that was triggered
- provides same event object as above
- only diff si that here we are passing it to the event handler with another parameter

## Altering event behaviors

1. Event propagation
2. React to keyboard and mouse events
3. Consider special keys
>>>>>>> 07d89a876b487e5c002a67ba30d61d23b4313db8
