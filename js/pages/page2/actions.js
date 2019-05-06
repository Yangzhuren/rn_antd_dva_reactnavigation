import {BaseAction} from '../../common'
import {createAction} from "../../actions";

export default class Actions extends BaseAction {
    clicked() {
        const {clickCount} = this.state
        this.setState({
            clickCount: clickCount + 1
        },()=>{
            const userAction = createAction('user/checkUser')({clickCount: this.state.clickCount})
            this.props.dispatch(userAction)
        })
    }
}