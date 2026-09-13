<!-- Project Name -->
I project Name is "DevStack" 
<!-- Description -->
where one can choose this stacks {technologies} according to his choise or uses 

<!-- Technologies used  -->
i used these technologies : 

React.js
Tailwind CSS, DaisyUI
TypeScript / JavaScript (ES6+)
React-Toastify (NPM Package)
JSON (for technology data)
Vite (build tool)

<!-- Features -->
3 features are there : 

Beautiful and organized UI 
FUll Functioning Website 
Many Options to choose when choosing stacks 


### 
<!-- Question & Answer  -->
###

1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React code easier to read and helps us create UI components.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component. 

State is data that is managed inside a component. i can change the data when the user interacts with the application.

3. What does the useState hook do, and where did you use it in this project?

it lets a functional component store and update the  data.

I used it to manage the application's changing data, such as the selected players/stack and other UI states.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders. I used it to load the JSON data when the application starts, so the data can be displayed in the UI.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list.


6. What is conditional rendering? Show one place you used it.

Conditional rendering means rendering using a condition applied to it .
 when the player stack is empty, I show an empty stack message:

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  stack.map((player) => <PlayerCard key={player.id} player={player} />)
)}




7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

like this -

<PlayerCard player={player} />

A child can send information to the parent by calling a function passed as a prop.

like this -

<PlayerCard onSelect={handleSelect} />

The child can  call onSelect() when an action happens.