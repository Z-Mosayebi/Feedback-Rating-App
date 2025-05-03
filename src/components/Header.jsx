import PropTypes from "prop-types"; //  Import PropTypes


function Header({text = "Feedback Rating" , bgColor = "rgba(0,0,0,0.4)" , textColor= "#ff6a95"}) {

const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
}

  return (
    <header className="navbar" style = {headerStyles}>
      <div className="container">
        <h2 className="navbar-brand">{text}</h2>
      </div>
    </header>
  )
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}


export default Header


