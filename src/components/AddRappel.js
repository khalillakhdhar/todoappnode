import { Component } from 'react';
import axios from 'axios';



class AddRappel extends Component
{
// eslint-disable-next-line no-useless-constructor
constructor(props)
{
    super(props);
    this.state=
    {
        text:"",
        date:""
    }

}
onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    };
onSubmit=e=>
{
    e.preventDefault(); //ne prend pas en compte les modification 
    const data= {
        text:this.state.text,
        date:this.state.date
    }
    axios
    .post("http://localhost:8082/rappel/",data)
    .then(res=>
        {
            this.setState(
                {
                text:"",
                date:""
                }
            );
            alert("ajouté avec succés");
            window.location.replace("");
        }
        ).catch(err=>
            {
                console.log("Error in adding rappel!"+err);

            }

        )
}
render()
{
return(
<div className="container">
  <div className="row">
    <div className="col">
      
    </div>
    <div className="col">
    <form onSubmit={this.onSubmit}>
    <div className="mb-3">
       
        <h1>Gestion des rappel</h1>
  <label  className="form-label">Texte du rappel</label>
  <input type="text" value={this.state.text} onChange={this.onChange}  name='text' className="form-control" placeholder="votre text ici"/>
</div>
<div className="mb-3">
<label  className="form-label">Date du rappel</label>
  <input type="datetime-local" value={this.state.date} onChange={this.onChange} name='date' className="form-control" placeholder="votre text ici"/>
</div>
<div className="mb-3">
<button type="submit" className="btn btn-primary mb-3">Ajouter</button>

</div>
</form>
    </div>
    <div className="col">
      
    </div>
  </div>
</div>

);}
}
export default AddRappel;