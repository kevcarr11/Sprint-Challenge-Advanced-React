- [ ] Why would you use class component over function components (removing hooks from the question)?
  If you needed to hold data in state you would need a class component.

- [ ] Name three lifecycle methods and their purposes.
   -componentDidMount (This is the phase when the component is being built (birth) out from ground up)

  -componentDidUpdate (setState can be used to change (growth) the component’s state data, forcing a call to render)

  -componentWillUnmount (Component is removed (death) from the screen)

- [ ] What is the purpose of a custom hook?
   Provides reuse of the same hook making code DRY

- [ ] Why is it important to test our apps?
  - Surfaces bugs faster.
  - Reduces the risk of regressions.
  - Allows us to trust the code.
  - Makes us think about the edge cases.
  - Acts as a safety net when making changes or refactoring.
  - Acts as documentation for the code.
  - Encourages us to write more testable (better!) code.