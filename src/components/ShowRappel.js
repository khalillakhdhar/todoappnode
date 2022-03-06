import { Component } from 'react'
import axios from 'axios'
import RappelModel from './RappelModel'
import AddRappel from './AddRappel';

class ShowRappel extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = {
      rappels: [],
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:8082/rappel/')
      .then((res) => {
        this.setState({
          rappels: res.data,
        })
        console.log('fetched' + this.state.rappels)
      })
      .catch((err) => {
        console.log('error with fetch ' + err)
      })
  }

  render() {
    const rappels = this.state.rappels
    let listRappels
    if (!rappels) {
      listRappels = 'aucun rappel'
    } else {
      listRappels = rappels.map((rappel, k) => (
        <RappelModel rappel={rappel} key={k} />
      ))
    }
    return <><AddRappel></AddRappel><div>{listRappels}</div></>
  }
}
export default ShowRappel
