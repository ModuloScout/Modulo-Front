import {merge} from "lodash";
import Cookies from "js-cookie";
import {fetchJSON} from "refresh-fetch";

const COOKIE_NAME = 'MODULO_TOKEN_ACCESS';

export const retrieveToken = () => Cookies.get(COOKIE_NAME)
export const clearToken = () => Cookies.remove(COOKIE_NAME)

export let fetchJSONWithToken = (url: string, options = {}) => {
    const token = retrieveToken()
    let optionsWithToken = options
    if (token != null) {
        optionsWithToken = merge({}, options, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        })
    }

    return fetchJSON(url, optionsWithToken)
}

export const logout = () => {
    clearToken();
}
