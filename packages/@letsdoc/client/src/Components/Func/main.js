import axios from 'axios'
import React from 'react'
import { Navigate } from 'react-router-dom'
import CryptoJS from 'crypto-js'

export const ENVIRONMENT = 'development'
export const api_url = process.env.BACKEND_URL || 'http://localhost:8000/api/v1/'
export const domain  = 'letsdoc.serhiiromaniuk.com'

export const opt = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

export const api = {
    ping: api_url + 'ping', 
    get: {
        auth: {
            user: {
                uuid: api_url + 'auth/user/get/',
                list: api_url + 'auth/user/list'
            },
        }
    },
    post: {
        auth: {
            user: {
                create: api_url + 'auth/user/create',
                login: api_url + 'auth/user/login'
            }
        },
        doc: {
            page: {
                get: api_url + 'doc/page/get',
                create: api_url + 'doc/page/create',
                update: api_url + 'doc/page/update'
            }
        },
        user: {
            domains: {
                get: api_url + 'user/domains/get',
                upsert: api_url + 'user/domains/upsert',
                delete: api_url + 'user/domains/delete',
            }
        }
    }
}

export const rolesMap = {
    default: 1,
    manager: 2,
    admin: 3,
    owner: 4
}

export const rolesList = [
    'default',
    'manager',
    'admin',
    'owner'
]

export function handlePermission(properUrl, permission = rolesMap.default) {
    const auth_token = JSON.parse(localStorage.getItem('auth_token'))
    const token = auth_token.token
    const now = new Date()
    const urlUser = api.get.auth.user.uuid
    
    if (!auth_token) {
        makeReditect('/login')
    } else {
        if (now.getTime() > auth_token.expire) {
            localStorage.removeItem('auth_token')
            makeReditect('/login')
        } else {
            axios.get(urlUser + token, opt).then(
                function(res) {
                    let arr = []
                    for (var key in rolesMap) {
                        arr.push(rolesMap[key])
                    }
                    
                    const map = arr.slice(arr.indexOf(permission)) 
                    const userRole = res.data.role_id
    
                    if (map.includes(userRole)) {
                        makeReditect(properUrl)
                    } else {
                        makeReditect('/error')
                    }
                }
            ).catch(
                function(error) {
                    console.log(error)
                }
            )
        }
    }
}

export function handleLogin(Component) {
    const auth_token = !!localStorage.getItem('auth_token')
    if (auth_token) {
        return <Navigate to='/' />
    } else {
        return <Component />
    }
}

export function verifyAuth(Component, Navigate) {
    const auth_token = localStorage.getItem('auth_token')
    const now = new Date()
    const token = JSON.parse(auth_token)

    if (!!auth_token) {
        if (now.getTime() > token.expire) {
            localStorage.removeItem('auth_token')
            return <Navigate to={Navigate || '/login'} />
        } else {
            return <Component />
        }
    } else {
        return <Navigate to={Navigate || '/login'} />
    }
}

export function makeLogin(tkn, ttl) {
    const now = new Date()
    const time = ttl || 7200E+3 // miliseconds
    const auth_token = {
        token: tkn,
        expire: now.getTime() + time
    }

    localStorage.setItem('auth_token', JSON.stringify(auth_token))
    window.location = '/'
}

export function makeLogout(e) {
    e.preventDefault()
    localStorage.removeItem('auth_token')
    window.location.href = '/login'
}

export function makeReditect(to) {
    const auth_token = localStorage.getItem('auth_token')
    if (auth_token) {
        // return <Navigate to={to} />
        window.location.href = to
    } else {
        window.location.href = '/login'
    }
}

export function getUserData() {
    const auth_token = localStorage.getItem('auth_token')
    const now = new Date()
    const token = JSON.parse(auth_token)

    if (!!auth_token) {
        if (now.getTime() > token.expire) {
            localStorage.removeItem('auth_token')
            return false
        } else {
            return token
        }
    }
}

export function encryptText(text, key) {
    return CryptoJS.AES.encrypt(text, key).toString()
}

export function decryptText(encryption, key) {
    return CryptoJS.AES.decrypt(encryption, key).toString(CryptoJS.enc.Utf8)
}
