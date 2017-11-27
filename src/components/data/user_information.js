import React from 'react';

// about me -----------------------------------------------------------------
const userInfo = {
    id : 'main-user',
    age : 26,
    firstName : 'Denis',
    lastName : 'Bubnov',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

export default userInfo;