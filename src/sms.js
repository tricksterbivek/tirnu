import React from 'react';
import { Fragment } from 'react';
import logo from './logo.png'
const Sms = () => {
    return ( 
        <Fragment>
        <div style={{"font-family": "Helvetica,Arial,sans-serif","min-width":"1000px","overflow":"auto","line-height":"2"}}>
<div style={{"margin":"50px auto","width":"70%","padding":"20px 0"}}>
<div style={{"border-bottom":"1px solid #eee"}}>
  <a href="/email" style={{"font-size":"1.4em","color": "#00466a","text-decoration":"none","font-weight":"600"}}><img id="logo"  src={logo} alt='' style={{"width":"260px"}}></img></a>
</div>
<p style={{"fontSize":"1.1em"}}>Hi,</p>
<p>Thank you for choosing Tirnu. Use the following OTP to complete your <b>Mobile</b> Verification procedures. OTP is valid for 5 minutes</p>
<h2 style={{"background": "#00466a","margin":" 0 auto","width": "maxContent","padding": "0 10px","color": "#fff","borderRadius": "4px"}}>123456</h2>
<p style={{"font-size":"0.9em"}}>Regards,<br />Tirnu</p>
<hr style={{"border":"none","borderTop":"1px solid #eee"}}/>
<div style={{"float":"right","padding":"8px 0","color":"#aaa","font-size":"0.8em","line-height":"1","font-weight":"300"}}>
  <p>Tirnu Inc</p>
  <p>Belgium</p>
</div>
</div>
</div>
    </Fragment>
     );
}
 
export default Sms;