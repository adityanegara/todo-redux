import './global.scss';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import Todo from "./Components/Organisms/Todo/Todo";

const store = configureStore();
const App = () =>{
    return(
        <Provider store={store}>
           <Todo/>
        </Provider>
    )
}

export default App;