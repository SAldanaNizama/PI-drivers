  import { ADD_DRIVER, GET_NAME, GET_TEAM, GET_ID, GET_DRIVER, FILTER_TEAM, FILTER_ORIGIN, CLEAR_DETAIL, CREATE_DRIVER  } from "./type";
import axios from "axios"
const URL_BASE = "http//localhost:3001"
 
export function getAllDriver() {
  return async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL_BASE}/drivers`)
    
    return dispatch({
      type: GET_DRIVER,
      payload: data
    })
  } catch (error) {
   alert(error.message)
  }
}
}

export function getDriverName(name) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/drivers?name=${name}`)
      return dispatch({
        type: GET_NAME,
        payload: data 
      })
    } catch (error) {
      alert(error.response.data)
    }
  }
}

export function getTeams() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/teams`)
      
      return dispatch({
        type: GET_TEAM,
        payload:data
      })
    } catch (error) {
    alert(error.message)      
    }
  }
}

export function adddriver(driver) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${URL_BASE}/driver`, driver)
      return dispatch({
        type: ADD_DRIVER,
        payload: data
      })
    } catch (error) {
      if(error.response.status=== 400) throw Error(error.response.data)
    }
  }
}


export function getDriverById(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/drivers/${id}`)
      return dispatch({
        type: GET_ID,
        payload: data
      })
    } catch (error) {
      return error.response;
    }
  }
}
export function filterAndTeam(team) {
  return {
    type: FILTER_TEAM,
    payload: team
  }
}
export function filterOrigin(data) {
  
}
