import React from 'react';

const Header = () => {
  return (
    <React.Fragment>
      <div className="carousel-header-nav">
        <table>
          <tbody>
          <tr id="carousel-logo"></tr>
          <tr className="radio-location">
            <td className="fas fa-map-marker-alt" id="map-marker"></td>
            <td id="location-one-btn">SF Bay Area city</td>
            <td className="fas fa-chevron-circle-right" id="arrow-right"></td>
            <td id="location-two-btn">SF Bay Area City</td>
            <td className="fas fa-chevron-circle-down" id="arrow-down"></td>
          </tr>
          <tr id="filler"></tr>
          <tr id="signIn-btn-container">
            <td><button id="sign-up-btn">Sign Up</button></td>
            <td><button id="sign-in-btn">Sign in</button></td>
            <td className="fas fa-search"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}

export default Header;
