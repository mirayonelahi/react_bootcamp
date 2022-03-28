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
- for small project this system works fine but for bigger project we will use css-in-js
-
