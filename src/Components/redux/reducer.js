import { USER_REGISTER, UPDATE_TOKEN, UPDATE_MOD_TOKEN, UPDATE_ADMIN_TOKEN, UPDATE_PROFILE } from "./actions"
import all from './state'

let reducer = (state={all}, action) => {
    
    switch(action.type) {
        case USER_REGISTER:
            let newUser = {...all}
            newUser.user = action.payload
            console.log(newUser)
            return newUser

        case UPDATE_TOKEN:
            let newToken = {...all}
            newToken.token = action.payload
            return newToken

        case UPDATE_MOD_TOKEN:
            let modToken = {...all}
            modToken.modToken = action.payload
            return modToken
        
        case UPDATE_ADMIN_TOKEN: 
            let adminToken = {...all}
            adminToken.adminToken = action.payload
            return adminToken
        case UPDATE_PROFILE: 
            let userProfile = {...all}
            userProfile.userProfile = action.payload
            return userProfile
        default:
            return state;
    }
    
}

export default reducer