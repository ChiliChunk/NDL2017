
const initialState = {
  showPatient : true,
  selectedPatient : {},
  selectedForm : {},
  patientList :  [],
}

export default function appReducers (state = initialState , action){
  switch (action.type) {

    case "UPDATE_SHOW_PATIENT_STATE":
        return ({
          ...state,
          showPatient : action.newState,
          selectedForm : {}
        })
      break

    case "SET_SELECTED_PATIENT":
      return ({
        ...state,
        selectedPatient : action.newPatient,
      })
      break

    case "SET_SELECTED_FORM":
      return ({
        ...state,
        selectedForm : action.form
      })
      break

    case "RESET_PATIETN_LIST":
      return({
        ...state,
        patientList : []
      })
      break

    case "AUTH_SIGNIN_SUCCESS":
        localStorage.setItem('token' , action.token)
        localStorage.setItem('fullUser' , JSON.stringify(action.user))
        return({
            ...state
        })
        break

    default:
      var newPatientTab = state.patientList
      newPatientTab.push(action.patient)
      return({
        ...state,
        patientList : newPatientTab
      })

  }

}
