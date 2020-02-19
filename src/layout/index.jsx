import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

import "../scss/index.scss";
import x from "../../static/logos/x.png";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;

    const xStyle = {
      display: 'block',
      position: 'center center',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%',
      height: '100%',
      opacity: '80%',
    };

    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        {
        
        }

        <img src={x} alt="X" style={xStyle} />

        <div className="bg">
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />  
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />  
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />  
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />
          <div className="tri" />  
        </div>
      </div>
    );
  }
}
