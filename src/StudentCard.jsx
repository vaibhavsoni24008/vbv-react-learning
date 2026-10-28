

function StudentCard(props) {
    console.log(props)
  return (
    <div>
        <div style={{border:"1px solid black", padding:"2px"}}>
            <h1>Name {props.name}</h1>
            <h3>Email {props.email}</h3>
            <h4>Name2 {props.name2}</h4>
            {props.email2 && <h5>Email2 {props.email2}</h5>}
        </div>
    </div>
  )
}

export default StudentCard
