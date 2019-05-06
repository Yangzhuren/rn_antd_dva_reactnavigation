import React, {Component} from 'react'
import {Button, Flex} from "@ant-design/react-native"
import Actions from './actions'
import {connect} from 'dva'

class Page1 extends Component {

    constructor(props) {
        super(props)
        new Actions(this)
    }

    render() {
        const {clickCount} = this.props.userInfo
        return (
            <Flex align={"center"} justify={"center"} style={{flex: 1}}>
                <Button onPress={this.clicked}>go page2 and click count:{clickCount}</Button>
            </Flex>
        )
    }
}

function mapStateToProps(state) {
    return {userInfo: state.user}
}

export default connect(mapStateToProps)(Page1)