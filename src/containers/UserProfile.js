import React from "react"
import {userAtom, userStatsAtom} from "../Atom"
import {useRecoilState, useRecoilValue} from "recoil"


export default function UserProfile(){

    const user = useRecoilValue(userAtom),
        [stats, setStats] = useRecoilState(userStatsAtom)

    function getStats(){
      fetch(`https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/${user.gameName}/${user.network}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }
      })
      .then(resp => resp.json())
      .then(data => setStats(data))
  
    }
    return (
        <div>
            <h1>Welcome {user.name}</h1>
            <button onClick={getStats}>Get Stats</button>
            <div>{stats.username}</div>
            <div>Level: {stats.level}</div>
            <div>KD Ratio: {stats.lifetime && stats.lifetime.all.properties.kdRatio}</div>
        </div>
    )
}