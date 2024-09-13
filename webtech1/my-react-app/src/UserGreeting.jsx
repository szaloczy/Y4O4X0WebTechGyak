import PropTypes from 'prop-types'

function UserGreeting(props){
  return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2>  : 
  <h2 className="">Please log in to continue</h2> )
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defailtProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting