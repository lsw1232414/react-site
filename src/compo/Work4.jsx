import { Provider } from "react-redux";
import store_redux from "../js/store_redux";
import Ex_reduxTool_4 from "../comp_work4/Ex_reduxTool_4";


const Work4 = () => {
    return (
        <Provider store={store_redux}>
            <Ex_reduxTool_4 />
        </Provider>
    );
};

export default Work4;
