# Context
A simple revision on React Context API
My mission is to understand React Context API and to try to use different components.
So using the above Figma to design the component structure:
https://www.figma.com/file/4rWWYkO7QtmvOXThx5l1ez/Untitled?node-id=0%3A1

Before we start , we need to design our UI display first before we add any functionality.

So we structure our folders by creating a COMPONENT & CONTEXT folder.

Step 1: Inside our COMPONENT FOLDER, we create the Budget(header), the first functional component we are going to create and the most easy part.

Step 2: We create the Balance component as functional component.

Step 3: We create the IncomeExpence component box

Step 4: Here we are going to create the Transaction functional component and inside we are going to create small transactions to use them dynamicaly in our project.

Step 5: We will need except of having excisting transactions, deleting them but also adding new transactions in our budget.

Documented Guide Lines 1:

So having our basic UI display now in order and correct design it we need to think about our global state. We then create a folder to our src called CONTEXT.
The purpose here is to create a single global state, this global state will have an initial state which will be a single object, were any global state will go inside to this object.
However now all we need are the transactions, because as long we have access to our transactions in certain components we can do our calculations here. 
So we need to passes our actions down so we can then delete them.

//Create Context:
We create the GlobalContext as we are going to bring other files that we are going to use it. And here we pass our initial state.

//Provider Component:
In order other component to have access to our store, we need to have a Provider, to wrap all the components to a provider component.
So we need to export it to bring it to our app file. Is going to be an arrow function. And since we are wrapping our folders in the App file, these will be our {childern}.
So in the props we are going to distructuring, And we need to have access to our reducer, se we need to have access tou our state and dispatch.

//Actions
We create two functions addTransaction and deleteTransaction, to add a new one or delete a transaction. Our delete takes as payload an id and the add takes as payload the transaction.

Documented Guide Line 2:

We are creating a seperate file called AppReducer. The AppReducer file is how we specify our state changes in response to certain actions to our store.
So we create the Reducer we passing it (import it at the top), then we passing it to useReducer, so we can have access to state value, from our initial state, 
passing that into the value of our provider.
This provider need to bring it to our App file too.

Documented Guide Line 3:

At the addTransaction file we are having a form, were we need some component state because we have input like "input type=test", 
they need to be part of state so we need to bring our hook. This hook name is useState
We create a piece of state and the we need a function to manipulate that piece of state, that we called setText. 
The useState in this phase because it is default we are going to put itin an empty string. Next goal is to connect those to our inputs. 
So our input will have a value of text, we need also an onChange event because whenever it type in, the pise of state will update, so we need to call a function here
and so setText and pass inside the parenthesis whatever we want to set to. We cant get that with the event(e) parameter here. So we can say event.target.value, that will set the text.

Documented Guide Line 4 

Transaction file line 10:
If the transaction amount is less than 0 means negative then lets have a class of minus lese we have a class of plus.

IncomeExpence file line 9-10-11:
We filter through getting all the possitive numbers
We reduce , add them alltogether
We fixed , add decimal.



