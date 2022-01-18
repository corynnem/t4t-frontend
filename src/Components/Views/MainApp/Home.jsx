import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import ProfileView from './Profiles';

const Home = () => {
    useEffect(() => {
        // setFirstName(state.user.firstName)
        // setPronouns(state.user.pronouns)
        // setGenderIden(state.user.genderIden)
        // console.log(state)
        // setTimeout(() => {
        //     console.log(token)
        // }, 5000)
        
    }, [])

    return(
        <div>
            <ProfileView/>
        </div>
    )
}

export default Home;