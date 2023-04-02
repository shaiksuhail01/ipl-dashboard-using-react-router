import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

const backgroundColorsList = {
  RCB: 'rcbBg',
  KKR: 'kkrBg',
  KXP: 'kxpBg',
  CSK: 'cskBg',
  RR: 'rrBg',
  MI: 'miBg',
  SH: 'shBg',
  DC: 'dcBg',
}

class TeamMatches extends Component {
  state = {
    bannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    teamId: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getEachTeamsDetails()
  }

  getEachTeamsDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches
    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const updatedRecentMatchDetails = recentMatches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))

    this.setState({
      bannerUrl: teamBannerUrl,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatchDetails,
      isLoading: false,
      teamId: id,
    })
  }

  render() {
    const {
      bannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading,
      teamId,
    } = this.state
    const teamMatchBgColor = backgroundColorsList[teamId]
    return isLoading ? (
      <div className="spinnerContainer">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className={`teamMatchesContainer ${teamMatchBgColor}`}>
        <img src={bannerUrl} alt="team banner" className="bannerImage" />
        <h1 className="latestMatchesText">Latest Matches</h1>
        <LatestMatch
          key={latestMatchDetails.id}
          matchDetails={latestMatchDetails}
        />

        <div className="recentMatchesContainer">
          {recentMatches.map(eachItem => (
            <MatchCard key={eachItem.id} cardDetails={eachItem} />
          ))}
        </div>
      </div>
    )
  }
}
export default TeamMatches
