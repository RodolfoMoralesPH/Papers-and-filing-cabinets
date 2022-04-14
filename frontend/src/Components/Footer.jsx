import React from 'react'
import { BsCalendar3 } from 'react-icons/bs';
function Footer() {
  return (
    <div className="footer">
        <div className="footer__left">
            
            <table>
  <tr>
  <span className="title">
        <BsCalendar3 /> IndieChecks
    </span>
  </tr>
  <tr>
    <td>About IndieChecks</td>
    <td>Software and Licenses</td>
  </tr>
  <tr>
    <td>Join Our Team</td>
    <td>Trademark Notices</td>
  </tr>
  <tr>
    <td>Press</td>
    <td>Affiliates and Sources</td>
  </tr>
  <tr>
    <td>Security</td>
  </tr>
</table>

        </div>

        <div className="footer__right">
            <span className="footer__right-text">
            ©1997-2022 Intuit, Inc. All rights reserved.
Intuit, QuickBooks, QB, TurboTax, ProConnect, and Mint are registered trademarks
of Intuit Inc. Terms and conditions, features, support, pricing, and service options
subject to change without notice.

Security Certification of the TurboTax Online application has been performed by
C-Level Security.

By accessing and using this page you agree to the Terms of Use.
            </span>
        </div>
    </div>
  )
}

export default Footer