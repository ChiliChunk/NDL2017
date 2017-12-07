import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import PouchDB from "pouchdb"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MainPage from "./containers/MainPage"
import * as appActions from "./actions/appActions"

window.PouchDB = PouchDB //POUR LE DEV

var ressources = require("./ressources.json")
var db = new PouchDB ("patientDB")

class App extends Component {

  constructor(props){
    super(props)
    console.log("Starting app...")
  }

  cleanDocs(){ // pour eviter du leak de stockage
    console.log("CLEAN DOCS")
    var actualIdApp = ressources[0].formMeta.applicationId

    db.allDocs({include_docs: true})
    .then(function (result) {
      console.log ("ALL DOCS" , result)

      result.rows.map( (rowObject , i ) => { // on check tt les docs présents en DB
        if (rowObject.doc.appId != actualIdApp){ // si c'est un doc d'une ancienne app
          var newTabForm = []
          rowObject.doc.reponses.map( ( reponsesObject , j) => { // on regarde si les form sont "finish"
            if (reponsesObject.finished == true && reponsesObject.patientID === undefined){ // ici on ne garde donc que ceux qui sont terminé mais pas encore push (patientID === undefined) (données valides mais pas encore envoyées dans le servuer)
              newTabForm.push (reponsesObject)
            }
          })


          var newEntireDoc = {
            _id : rowObject.doc._id,
            reponses : newTabForm,
            appId : rowObject.doc.appId,
            _rev : rowObject.doc._rev

          }
          console.log("NEW DOC" , newEntireDoc)


          if (newTabForm.length > 0){ // si il y a encore des form a garde on garde le doc
            return (
              db.put(newEntireDoc)
            )
          }
          else{ // sinon on delete le doc
            console.log("ON ESSAYE DE REMOVE" , rowObject.doc._id)
            return(
              db.remove(rowObject.doc)
            )
          }

        }
      })

    }).catch(function (err) {
      console.error("ERROR" , err)
    })
  }



  render() {

    return(
      <div>
        <MuiThemeProvider>
          <MainPage/>
        </MuiThemeProvider>
      </div>
    );

  }

}

export default App
