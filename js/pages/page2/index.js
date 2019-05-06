import React, {Component} from 'react'
import {Button} from "@ant-design/react-native"
import Actions from './actions'
import {createAction} from "../../actions";
import {connect} from 'dva';

class Page2 extends Component {
    constructor(props) {
        super(props)
        new Actions(this)
        this.state = {
            clickCount: 0
        }
    }

    render() {
        const {clickCount} = this.state
        return (
            <Button onPress={this.clicked}>page2 click counts:{clickCount}</Button>
        )
    }
}

function mapStateToProps(state) {
    return {userInfo: state.user}
}

export default connect(mapStateToProps)(Page2)