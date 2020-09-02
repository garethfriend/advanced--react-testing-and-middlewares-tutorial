export default ({ dispatch }) => next => action => {
    // check to see if the action has a promise on it's payload propery
    // if it does then wait for it to resolve
    // if it doesn't then send the action on to the
    // next middleware
    if(!action.payload || !action.payload.then) {
        return next(action)
    }
    // wait for the promise to resolve
    // create new action with that data and dispatch it
    action.payload.then(function(response) {
        const newAction = { ...action, payload: response }
        dispatch(newAction)
    })
}
    
