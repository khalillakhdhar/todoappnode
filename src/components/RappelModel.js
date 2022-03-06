import { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


 class RappelModel extends Component
 {
 constructor(props)
 {
super(props)
this.state=
{
rappel:props.rappel
}

 }
 onDeleteClick (id) {
  // eslint-disable-next-line no-restricted-globals
  if(confirm("êtes vous sûre de vouloir supprimer"))
  {
  axios
    .delete('http://localhost:8082/rappel/'+id)
    .then(res => {
      window.location.replace("");
    })
    .catch(err => {
      console.log("Error form ShowBookDetails_deleteClick");
    })
  }
};
 render()
 {
  
  const rappel = this.state.rappel;
 
  return (

    <div className=' card carte'>
    <div className='card-body'>
      <h2>{rappel.text}</h2>
      <br></br>
      <span>{rappel.date}</span>
    </div>
    <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,rappel._id)}>Delete Book</button><br />
            </div>
    </div>
  )
  }
 }
export default RappelModel;
