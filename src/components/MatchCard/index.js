import './index.css'

const MatchCard = props => {
  const {cardDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = cardDetails
  let statusColor
  if (matchStatus === 'Lost') {
    statusColor = 'redBackground'
  } else {
    statusColor = 'greenBackground'
  }
  return (
    <li className="matchCard">
      <img
        src={competingTeamLogo}
        className="secondImage"
        alt={`competing team ${competingTeam}`}
      />
      <p className="matchCardTeamName">{competingTeam}</p>
      <p className="matchCardPara">{result}</p>
      <p className={`matchWonORLoseText ${statusColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
