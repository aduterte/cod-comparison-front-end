import React, {useState} from "react"

export default function GenericProfile(){

    const [player, setPlayer] = useState({name: "", number: "", network: ""}),
        [stats, setStats] = useState({})

    function getStats(e){
        e.preventDefault()
        fetch(`https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/${player.name}%2523${player.number}/${player.network}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
        })
        .then(resp => resp.json())
        .then(data => setStats(data))
    
    }

    const handleChange = (e) => {
        setPlayer({...player, [e.target.name]: e.target.value })
        console.log(player)
    }
    
    return (
        <div>
            <form onSubmit={getStats}>
                <label>Enter Name: </label>
                <input name="name" onChange={handleChange} value={player.name} placeholder="user"/>
                <label>#</label>
                <input name="number" onChange={handleChange} value={player.number} placeholder="12345"/>
                <br/>
                {/* activision id endpoints not working */}
                <input onChange={handleChange} type="radio" name="network" value="battle"/><label> BattleNet</label>
                <input onChange={handleChange} type="radio" name="network" value="psn"/><label> PlayStaion Network</label>
                <input onChange={handleChange} type="radio" name="network" value="xbl"/><label> XBox Live</label>
                <input onChange={handleChange} type="radio" name="network" value="uno"/><label> Activison ID</label>
                <button>Get Stats</button>
            </form>
            <div>{stats.username}</div>
            <div>Level: {stats.level}</div>
            <div>KD Ratio: {stats.lifetime && stats.lifetime.all.properties.kdRatio}</div>
        </div>
    )
}