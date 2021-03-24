import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './LandingPage.js';
import SearchByCatPage from './SearchByCat';
import SearchPage from './SearchCharity';



class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 1 //1- landing page, 2- search by name page, 3- search by cat page
    }
    this.switchPage = this.switchPage.bind(this)
    this.showSearch = this.showSearch.bind(this)
  }
  switchPage() { //for switching btw the 2 pages after already clicking on in landing page
    if (this.state.page === 2) {
      this.setState({
        page: 3
      })
    } else {
      this.setState({
        page: 2
      })
    }
  }

  showSearch = e => {
    if (e.target.id === 'catBtn'){
      this.setState({
        page: 3
      })
    } else {
      this.setState({
        page: 2
      })
    }
  }

  render() {
    return(
      <div>
        {this.state.page === 1 && <LandingPage showSearch={this.showSearch}/>}
        {this.state.page === 2 && <SearchPage switchPage={this.switchPage}/>}
        {this.state.page === 3 && <SearchByCatPage switchPage={this.switchPage}/>}
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'))

