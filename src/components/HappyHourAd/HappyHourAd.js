import React from 'react';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  constructor(){
    super();
    
    /* run this.forceUpdate() every second */
    setInterval(() => this.forceUpdate(), 1000);
  }

    static propTypes = {
      title: PropTypes.string,
      promoDescription: PropTypes.string,
    };

    getCountdownTime(){
      const currentTime = new Date();
      const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
    
      if(currentTime.getUTCHours() >= 12){
        nextNoon.setUTCDate(currentTime.getUTCDate()+1);
      }    
      return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
    }   

    render() {
      return <div>
        <h3 className="title">Happy Hour</h3>;
        <div className="promoDescription">{this.getCountdownTime()}</div>;
      </div>;    
    }
}

HappyHourAd.defaultProps = {
  title: 'Happy Hour',
  promoDescription: 'Happy Hour is on!',
};  

export default HappyHourAd;