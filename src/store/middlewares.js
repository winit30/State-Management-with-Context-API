const asyncer = (dispatch, state) => {
  return (action) => {
    return typeof action === 'function' ?  action(dispatch, state) : dispatch(action);
  }
}

const logger = (action, prevState, currentState) => {
	console.groupCollapsed('Logger');
	console.log('%c Action:', 'color: blue', action);
	console.log('%c Previous State:', 'color: red', prevState);
	console.log('%c Current State:', 'color: green', currentState);
	console.groupEnd();
};

export { asyncer, logger }
