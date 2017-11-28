import React from 'react';

import userInfo from '../../data/user_information';
import ThinksAboutSum from './about_sum';

class AboutMeTable extends React.Component {
    render() {
        return <div>
            <ThinksAboutSum />
            <table id={userInfo.id} className='user-table'>
                <tbody>
                    <tr>
                        <td>First name: {userInfo.firstName}</td>
                        <td>Last name: {userInfo.lastName}</td>
                    </tr>
                    <tr>
                        <td>Full name: {userInfo.getFullName()}</td>
                        <td className="other-column-table">Age: {userInfo.age}</td>
                    </tr>
                </tbody>
            </table>
        </div>;
    }
}

export default AboutMeTable;