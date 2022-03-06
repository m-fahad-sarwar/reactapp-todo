import Vector from '../../assets/Vector.png'
import Icon from '../../assets/icon.png'


const Reason = (prop) =>{
    return(
        <div className="reason">
            <img src={Vector} alt="prop.alt" />
            <h4>{prop.reason}</h4>
            <p>{prop.text}</p>

        </div>
    )
}
export default Reason;