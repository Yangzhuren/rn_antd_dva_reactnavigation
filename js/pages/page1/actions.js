import {BaseAction} from '../../common'

export default class Actions extends BaseAction {
    clicked() {
        this.props.navigation.navigate('page2')
    }
}