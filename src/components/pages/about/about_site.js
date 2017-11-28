import React from 'react';

import AboutMeTable from './about_me_table'

class AboutPage extends React.Component{
    render(){
        return <div className="center-cursive-text">
            <AboutMeTable />
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