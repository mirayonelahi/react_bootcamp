# Basics of react

- using basic cli commands
- using create react app
- removing the extra files
- starting with index.js
- using ReactDOM.render to connect with base html file with base react
- prettier, eslint, gitignore, .env , npm setup
- can we write code without jsx? -yes. we can write it by using React.createElement()
- but we use jsx . why not. its so clean and makes our life easier
- while creating any jsx component
  - Name it starting capital letter
  - be careful about name conflict
  - needs to return something
  - all div/whatever should be wrapped in one div or fragment or anything that returns as a single component
  - needs to close every element
  - className instead of class
  - carefully about formatting as js automatically put semicolon
  - using react developer tool

# Let's make a basic best selling book component following the rules

- Parent component will be <BookList/>
- Booklists will contains <Book/>
- Books will contain <Image/> <Title/> <Author/>

```jsx
const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL200_SR200
      ,200_.jpg"
      alt="book"
    />
  );
};
const Title = () => {
  return <h1>Atomic Habits</h1>;
};
const Author = () => {
  return <h4>James Clear</h4>;
};
```

- So we created some basic hardcoded react components. Now if we want to add css in out react project how can we do it?
- we can create a basic index.css file and import in react.
- for small project this system works fine but for bigger project we will use css-in-js / utility class / bootstrap /tailwind

** power of jsx**

- we can use any js functionality
- using {}
- using ``

## Props

- using props we can pass values to different function
- which gives us the reusability power
- can add dynamic features
- props are immutable
- unidirectional parent to child
- careful about prop drilling
- how can we pass prop from child to parent?
- we pass function prop from parents for passing child to parent
- props directly used or we can destruct the specific fields
- props - children - anything passed between open and closed tags of components--- it passed like props.children and destruct naming children
- simple list - we will use .map() a lot while accessing lists
- be careful giving unique key .. its important for react virtual dom ecosystem for better performance
- using .map() and also we are passing each attribute as a prop separately.
- we can use rest/spread operator here to make it more clean and easy to write

from

```jsx
<section className="booklist">
  {books.map((book) => {
    return (
      <Book
        key={book.title}
        title={book.title}
        image={book.image}
        author={book.author}
      />
    );
  })}
</section>
```

to

```jsx
<section className="booklist">
  {books.map((book) => {
    return <Book key={book.title} {...book} />;
  })}
</section>
```

# lets play with events

- in react we can play with different types of events
- mouse event, keyboard event and different types of events
- we will use a lot of onClick and onChange
- we can create extra helper method or pass event directly
- we will be using `e.target` a lot when working with event

```jsx
// way 1
onClick={methodName}

// way 2
onClick={()=>{methodName(val)} }

// don't do this
onClick = {methodName(val)}

// we avoid the last method as its already invoked the event/function
```

import export in React

- two types export
  - default type and we import this without bracket and can be named anything.
  - named typed export where import should be done by using `{ exactNaming }` and should be imported using exact naming
