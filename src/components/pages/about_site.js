import React from 'react';
import userInfo from '../data/user_information'

class AboutPage extends React.Component{
    render(){
        return <div className="center-cursive-text">
            <div>What do you think about it? (See next line)</div>
            <h2>2 + 2 = {2 + 3}</h2>
            <div>I think it's wrong. Who I am?</div>
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
            <br/><hr/>
            <div className="center-cursive-text">
                I’m an experienced Website Developer looking to continue my career within agency side development. <br/>
                I have excellent design and coding skills, as well as an ability convert client requirements into exciting online applications.
            </div>
            <hr/>
        </div>;
    }
}

export default AboutPage;