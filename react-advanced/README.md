## Use of different hooks

#### useState

let's use a basic variable to change data.

```jsx
const ErrorExample = () => {
  let title = "title";
  const handleChange = () => {
    title = "new title";
    console.log(title);
  };
  return (
    <>
      <h2>Hello {title}</h2>
      <button className="btn" onClick={handleChange}>
        change title
      </button>
    </>
  );
};
```

in the above example when we are changing the variable title with click event, is it showing/changing component dynamically?

- no it's not as the virtual dom is not getting any update while getting any new click event and for this situation we are not rerendering the component
- how can we fix this issue?
- we need to rerender our component when it changes
- we want to hook up any variable where any event change will be read by virtual dom and changes inside the component
- useState() hook comes to solve this issue
- if we just console.log(useState) what we gonna see?
- we will see a function taking a parameter and returning an object
- now lets call it as a function `console.log(useState())`
- we can see the object we are getting with two parameter. One is a value and another is a function
- so the first parameter we will use to initialize/getting current state value
- 2nd parameter we will use as a setter/update of the state

```jsx
const val = useState(1);
console.log(val);
```

- from the code above we can see that it returns a array of objects
- we can destruct those values
- `const [value, setValue] = useState(1)`
- some rules of using hook
  - we always need to define this in top level
  - don't init it in side loops/ any other hooks
  - can't call conditionally
  - start with use
  - components needs to uppercase pascel case
  - hooks should be inside func component

```jsx
const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const handleClick = () => {
    setPeople((prev) => [...prev, { id: 8, name: "ayon" }]);
  };
  const handleDelete = (id) => {
    setPeople((prev) =>
      prev.filter((val) => {
        return val.id != id;
      })
    );
  };
  return (
    <>
      <h2>useState array example</h2>
      {people.map((p) => {
        return (
          <div className="item" key={p.id}>
            <h4> {p.name}</h4>
            <button onClick={() => handleDelete(p.id)}>Click</button>
          </div>
        );
      })}
      <button className="btn" onClick={handleClick}>
        Click outside
      </button>
    </>
  );
};
```

- in the above example using usestate we add and delete values and showed in window real time
- sometime we see when we log any state that starts rendering twice. why is that?
- in index.js we wrap the app with React.strict thats the reason its rendering twice

1. Birthday Reminder

#### useEffect and Conditional Rendering

- whenever we are handling something out of our component or managing any side effect we use the hook useffect
- fetching data, subscription , timer
- useEffect take 2 parameter
- one is callback function
- another is any dependency
- using this hook we can manage different lifecycle in react together
- used to handle side effect and work outside the component
- we cant put hooks under any conditional
- but we can put condition inside the callback function of hooks
- 2nd parameter in useeffect is optional
- if we dont put anything in 2nd parameter then it will render every time any render happens
- if we pass just [] then it will only run for the first time app renders
- if any condition/state/variable is given then when that changes the useeffect triggers that time
- we can return in useeffect as a clean up function
- whats memory leak?
- in our app if we overuse eventlisteneres or creating so many unnecessary rerendering then there creates memory leak
- we have to carefull about the memory leak as it cause performance issue
- while using useEffect hook this memory leaks needs to be sorted out
- using the cleanup feature in useeffect we can solve this

```jsx
const UseEffectBasics = () => {
  const [size, serSize] = useState(window.innerWidth);
  const handle = () => {
    serSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("heyy");
    window.addEventListener("resize", handle);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", handle);
    };
  }, []);
  return (
    <>
      <h2>window {size}</h2>
    </>
  );
};
```

- in the above example we can see that using return / clean up method in useeefect we handle the memory leak in our app.
- whenever any uffeffect closes it runs clean upfunction
- when we have conditional rendering where multiple conponents will be there and handling showing/hiding . we will need to handle all the memory leak or unnecessary rendering using clean up function
- now lets fetch some data.
- some issue using assync/await inside useEffect dirrectly .
- as assync/await returns a promise
- so we create a seperate function for that
-

1. Tours

- we fetch some tour info using fetch
- first create 2 states for data and loading page
- create a useeffect to run fetchdata function
- in the fetchdata function we use assync await and fetch to get the data
- then what data we fetched we add it to data state
- then we pass data to tours component
- in tours we map the data and pass the data to tour component
- we destructure and show data accordingly
- we need to pass data from child to parent for deleting single list
- for that we pass function from parent to child and using that we pass from child to parent

2. Reviews

-

3. Accordion
4. Menu
5. Tabs
6. Slider

#### Forms

- let's make a basic form in react
- 2 input field and one submit

8. Lorem Ipsum Generator
9. Color Shades Generator
10. Grocery Bud

#### useRef

11. Navbar

#### useContext

12. Modal and Sidebar
13. Stripe Menus

#### useReducer and useContext

14. Cart

#### React Router
