import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {listOfTeams: [], isLoading: true}

  componentDidMount() {
    this.getTeamsDetails()
  }

  getTeamsDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({listOfTeams: updatedData, isLoading: false})
  }

  render() {
    const {listOfTeams, isLoading} = this.state

    return (
      <div className="homeContainer">
        <div className="logoAndNameContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logoImage"
          />
          <h1 className="logoHeading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="listOfTeamsContainer">
            {listOfTeams.map(eachItem => (
              <TeamCard key={eachItem.id} details={eachItem} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Home
