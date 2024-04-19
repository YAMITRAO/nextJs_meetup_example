import style from "./MeetupDetails.module.css"

const MeetupDetails = (props) => {
  return (
    <div className={style.container}>
        <img src={props.image} alt="none"/>
        <div className={style.title}>{props.title}</div>
        <div className={style.address}>{props.address}</div>
        <div className={style.description}>{props.description}</div>
    </div>
  )
}

export default MeetupDetails