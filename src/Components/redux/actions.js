/* REGISTER */

export const USER_REGISTER = 'USER_REGISTER'
export function updateUser(userInfo) {
    return {
        type: USER_REGISTER,
        payload: userInfo
    }
}

export const USER_LOGIN = 'USER_LOGIN'
export function userLogin(userInfo) {
    return {
        type: USER_LOGIN,
        payload: userInfo
    }
}


export const MOD_LOGIN = 'MOD_LOGIN'
export function updateMod(token) {
    return {
        type: MOD_LOGIN,
        payload: token
    }
}

export const ADMIN_LOGIN = 'ADMIN_LOGIN'
export function updateAdmin(token) {
    return {
        type: ADMIN_LOGIN,
        payload: token
    }
}


export const UPDATE_TOKEN = 'UPDATE_TOKEN'
export function updateToken(token) {
    return {
        type: UPDATE_TOKEN,
        payload: token
    }
}



export const UPDATE_MOD_TOKEN = 'UPDATE_MOD_TOKEN'
export function updateModToken(token) {
    return {
        type: UPDATE_TOKEN,
        payload: token
    }
}

export const UPDATE_ADMIN_TOKEN = 'UPDATE_ADMIN_TOKEN'
export function updateAdminToken(token) {
    return {
        type: UPDATE_ADMIN_TOKEN,
        payload: token
    }
}

export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export function updateProfile(profile) {
    return {
        type: UPDATE_PROFILE,
        payload: profile
    }
}
