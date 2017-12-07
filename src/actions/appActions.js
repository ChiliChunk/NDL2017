//
import {checkHttpStatus, checkPermissions} from '../utils';

const config = {
    'secret': 'D1LiraPPzZwO4DqpDgVAvFIbeX8v9QI7feef3qAf1bgZnUpLgwKN5ugEBoLg',
    'server': {
      'host': 'localhost',
      'port': 3001,
      'secure': false,
    },
    'signaling': {
      'host': 'localhost',
      'port': 8888,
    },
    'STUN': {
      'host': 'localhost',
      'port': 8888,
    },
    'TURN': {
      'host': 'localhost',
      'port': 3478,
    },
    role : {
      ROLE_PATIENT : "ROLE_PATIENT",
      ROLE_DIETETICIEN : "ROLE_DIETETICIEN",
      ROLE_MANAGER : "ROLE_MANAGER",
      ROLE_ADMIN : "ROLE_ADMIN",
      ROLE_DEV  :"ROLE_DEV",
    }
};

const URL_SCHEME = config.server.secure ? 'https' : 'http';
const HOSTNAME = `${URL_SCHEME}://${config.server.host}:${config.server.port}`;
const LOGIN_URL = `${HOSTNAME}/auth/authenticate`;
const API_URL = `${HOSTNAME}/api/`

export function updateShowPatientState(newState){
  return{
    type : "UPDATE_SHOW_PATIENT_STATE",
    newState : newState
  }
}

export function setSelectedPatient(newPatient){
  return{
    type : "SET_SELECTED_PATIENT",
    newPatient : newPatient
  }
}

export function setSelectedForm (form){
  return {
    type : "SET_SELECTED_FORM",
    form : form
  }
}

export function resetPatientList(){
  return {
      type : "RESET_PATIETN_LIST",
    }
}

export function addPatientToPatientList(patient){
  return{
    type : "ADD_PATIENT_TO_PATIENT_LIST",
    patient : patient
  }
}
// export function setSelectedForm (newForm){
//   return {
//     type : "SET_SELECTED_FORM",
//     newForm : newForm
//   }
// }

export function login(data) {
  console.log("LOGIN FIRED => " , data)
    return dispatch => {
        dispatch(loginRequest())
        return fetch(LOGIN_URL, {
            method: 'POST',
            mode: 'cors',
            type: 'json',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({username: data.username, password: data.password})
        })
        .then(checkHttpStatus)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            dispatch(response.success
                ? loginSuccess(response)
                : console.error("ERROR RESPONSE.SUCCESS"));
                return response;
        })
        .catch(function (response) {
            console.error(response)
            console.error("ERROR : DANS LE CATCH")
        });
    }
}

export function loginRequest() {
    return {type: "AUTH_SIGNIN"}
}

export function loginSuccess(response) {
    return {
        type: "AUTH_SIGNIN_SUCCESS",
        success: response.success,
        token: response.token,
        user: response.user
    };
}

export function fetchDieteticien() { // pour le test
  return dispatch => {
    dispatch(requestDieteticien())
    return fetch(API_URL + 'dieteticien/', {
      method: 'GET',
      mode: 'cors',
      type: 'json',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Access-Token': localStorage.getItem('token')
      })
    })
      .then((response) => {
        /* console.dir(response); */
        return response.json()
      })
      .then((response) => {
        /* console.dir(response); */
		console.log("REPONSES GET" , response)
        console.log('typeof : ' + typeof response);
        dispatch(response.success ? receiveDieteticienSuccess(response) : console.error("ERROR REPONSE SUCCESS"))
      })
      .catch((error) => {
		console.error("ERROR")
        console.dir(error);

      });
  }
}

export function requestDieteticien() {
  return {
    type: "DIETETICIEN_EHPAD_FETCH_ALL"
  }
}

export function receiveDieteticienSuccess(dieteticien) {
	console.log("receiveDieteticienSuccess" , dieteticien)
  return {
    type: "DIETETICIEN_EHPAD_FETCH_ALL_SUCCESS",
    dieteticien,
  }
}




export function pushOfflineData(objectRdv) {
  console.log("PUSH OFFLINE DATA")
  var patientId = objectRdv.patientID
  return dispatch => {
    dispatch(pushOfflineDataTry())
    return fetch(API_URL + 'offlinePush/', {
      method: 'PUT',
      mode: 'cors',
      type: 'json',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Access-Token': localStorage.getItem('token')
      }),
      body : JSON.stringify({patientId : patientId,
                            allObject : objectRdv})
    })
      .then((response) => {
        /* console.dir(response); */
        return response.json()
      })
      .then((response) => {
        /* console.dir(response); */
		console.log("REPONSES PUT OFFLINE" , response)
        console.log('typeof : ' + typeof response);
        dispatch(response.success ? pushOfflineDataSuccess(response) : console.error("ERROR REPONSE SUCCESS DANS LE PUT"))
      })
      .catch((error) => {
		console.error("ERROR")
        console.dir(error);

      });
  }
}

export function pushOfflineDataTry() {
  return {
    type: "PUSH_OFFLINE_DATA"
  }
}

export function pushOfflineDataSuccess(newPatient) {
	console.log("push done" , newPatient)
  return {
    type: "PUSH_OFFLINE_DATA_SUCCESS",
  }
}
