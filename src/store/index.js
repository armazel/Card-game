import { createStore, applyMiddleware,compose } from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import testSaga from '../sagas/test'


export default function configureStore(initialState) {

    const sagaMiddleware = createSagaMiddleware();
    /*const run = type => sagaMiddleware.run(type);*/


    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(testSaga);
    return store;
};

