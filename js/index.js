import React, {Component} from 'react'
import {InputItem, List, Provider} from "@ant-design/react-native";
import Pages from './pages'
import dva from "dva";
import {registerModels} from "./models";
import createMemoryHistory from "history/createMemoryHistory";

class Root extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Provider>
                <Pages/>
            </Provider>
        )
    }
}

const app = dva({
    history:createMemoryHistory(),
    initialState: {},
    onError: function (e) {
        console.log("dva onError", e)
    }
})

registerModels(app)

app.router(() => <Root/>)

const App = app.start()

export default App