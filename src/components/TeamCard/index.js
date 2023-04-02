import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details
  return (
    <Link to={`/team-matches/${id}`} className="itemLink">
      <li className="teamCardContainer">
        <img src={teamImageUrl} alt={name} className="cardImage" />
        <p className="cardName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
