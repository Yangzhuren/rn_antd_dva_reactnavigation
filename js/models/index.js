import User from './User'
import {DvaInstance} from "dva";

export function registerModels(app: DvaInstance) {
    app.model(User)
}