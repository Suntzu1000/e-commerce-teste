import Paginas from "./components/pages/Paginas";
import store from "./controller/store";
import './styles/main.scss'
import {Provider} from 'react-redux'



function App() {
  return (
    <>
      <Provider store={store}>
        <Paginas/>
      </Provider>
    </>
  );
}

export default App;
