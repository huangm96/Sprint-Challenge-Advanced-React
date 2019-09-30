- [ ] Why would you use class component over function components (removing hooks from the question)?

The React.Component base class that allows us to use some of the methods that the React team has curated to tap into what we call the Component Lifecycle. 

- [ ] Name three lifecycle methods and their purposes.

componentDidMount() - Whatever initial data you’ll have access to will be defined on the constructor of this phase
componentDidUpdate() -   a method one could use here to stop a component from calling render if necessary.
componentWillUnmount() - called and can be used for any clean up you may need to do.

- [ ] What is the purpose of a custom hook?

less code, less error.

- [ ] Why is it important to test our apps?

Surfaces bugs faster.
Reduces the risk of regressions.
Allows us to trust the code.
Makes us think about the edge cases.
Acts as a safety net when making changes or refactoring.
Acts as documentation for the code.
Encourages us to write more testable (better!) code.