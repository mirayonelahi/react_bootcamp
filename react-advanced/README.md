## Corresponding Projects

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
-

1. Birthday Reminder

#### useEffect and Conditional Rendering

2. Tours
3. Reviews
4. Accordion
5. Menu
6. Tabs
7. Slider

#### Forms

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
