import Frequncy from "../assets/frequency.png"

function TimeBar() {
  return (
    <div className="timebar">
      <div className="date">22/04/2026</div>
      <div className="frequency">
        <img src={Frequncy}/>
      </div>
      <div className="time">11:35</div>
    </div>
  )
}

export default TimeBar