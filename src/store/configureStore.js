import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';
import { loadState, saveState } from './localStorage';

const configureStore = () => {

    const middleware = [
        thunk,
        reduxImmutableStateInvariant()
    ];

    const initialState = loadState();

    const store = createStore(
        rootReducer,
        initialState ? { participants: { ...initialState } } : initialState,
        applyMiddleware(...middleware)
    );

    store.subscribe(() => {
        saveState({
            listOfParticipants: store.getState().participants.listOfParticipants
        });
    });

    return store;
};

export default configureStore;