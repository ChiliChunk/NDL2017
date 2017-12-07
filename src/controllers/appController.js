
export function getReponsesOfSelectedForm (db , patient , form , callBack , last){

  console.log("REQUEST DB" , db)
  console.log("REQUEST PATIENT" , patient)
  console.log("REQUEST FORM" , form)
  var repPresentent = true
  db.get(patient._id.toString()).catch(function (err) {
    if (err.status === 404) {
      console.log("Rep NON présentent")
      repPresentent = false
      return (callBack ("noPat" , patient , form , last))
    }
    else { // hm, some other error
      throw err;
    }
  })
  .then(function (doc) {
      if (repPresentent){
        var trouve = false
        doc.reponses.map( (formObject , i) => {
          if (formObject._id  == form.metadata._id ){
            trouve = true
            return(callBack(formObject , patient , form , last)) //return un callBack parce que assynchrone...
          }
        })
        if (!trouve){
          return(
            callBack("noForm" , patient , form , last)
          )
        }
      }
    })
    .catch(function (err) {
      console.error(err)
    })
}


export function pushRdvObjectFinished(db , functionPush){
  console.log("pushRdvObjectFinished")
  // var toMongo = []
  db.allDocs({include_docs: true})
  .then ( function (result) {
    result.rows.map( (oneRow , i ) => {
      var stayInPouch = []
      oneRow.doc.reponses.map( (reponsesObject , j ) => {
        var pushObject = reponsesObject

        if (reponsesObject.finished){ //on doit le push dans la mongo et le virer de la pouch
           pushObject.patientID = oneRow.doc._id // on ajout l'id pat dans l'objet qu'on va push
           console.log("TRY TO PUSH IN MONGO RESPONSEOBJECT" , reponsesObject)
           functionPush(reponsesObject)
          //  toMongo.push(pushObject)

           // /!\ ON CONSIDERE DONC QUE SI LE CHAMP patientID EST SET => LE FORM OBJECT A ETE PUSH DANS LA MONGO
        }
          stayInPouch.push(pushObject)
      })
          // on reforme le doc avec ce qu'il y a a garder
      return(
        db.put({
          _id : oneRow.doc._id,
          reponses : stayInPouch,
          appId : oneRow.doc.appId,
          _rev : oneRow.doc._rev

        })
      )
    })
  })
  // console.log ("OBJECT TO PUSH IN MONGO" , toMongo)
  // console.log(toMongo.length)
  // toMongo.map( (oneObject , i ) => {

  // })
}
