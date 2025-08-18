import './App.css'
import Ex_context1 from './comp/Ex_context1'
import Ex_cont_Provider from './Ex_cont_Provider'
import Ex_js_2 from './Ex_js_2';
import Ex_reduxTool_4 from "./components/Ex_reduxTool_4";

import Ex_zustand_3 from './Ex_zustand_3';
import { store_redux } from './js/store_redux';
import { Provider } from "react-redux";

function App() {
  return (
    <Ex_cont_Provider>
      <Ex_context1 />
    </Ex_cont_Provider>,

    <Ex_js_2 />,
    <Ex_zustand_3 />,
    <Ex_reduxTool_4 />,
    <Provider store={store_redux}>
      <Ex_reduxTool_4 />
    </Provider>
  );
}

export default App;
