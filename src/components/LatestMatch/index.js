import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    secondInnings,
    umpires,
    venue,
    result,
  } = matchDetails
  return (
    <div className="latestMatchContainer">
      <div className="firstDivContainer">
        <div>
          <p className="teamName">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="place">{venue}</p>
          <p className="latestWin">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="firstImage"
        />
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="firstImage2"
      />

      <hr className="horizontalLine" color="#475569" />
      <div className="secondContainer">
        <h1 className="inningsText">First Innings</h1>
        <p className="inningsPara">{firstInnings}</p>
        <h1 className="inningsText">Second Innings</h1>
        <p className="inningsPara">{secondInnings}</p>
        <h1 className="inningsText">Man Of The Match</h1>
        <p className="inningsPara">{manOfTheMatch}</p>
        <h1 className="inningsText">Umpires</h1>
        <p className="inningsPara">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
