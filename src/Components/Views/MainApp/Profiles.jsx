import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import ProfileSwipe from '../../Profiles/ProfileSwipe'
import Create from '../../Profiles/Create'


const ProfileView = () => {
    let state = useSelector(state => state)
    const [profileCreated, setProfileCreated] = useState(false)
    let token = useSelector(state => state.token)
   

    // console.log(state)

    let getProfiles = async() => {
        let response = await fetch(`http://localhost:8080/4857/mine`, {
                        method: 'GET',
                        headers: new Headers({
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        })
                    })
        let json = await response.json()
        json.profile === null ? setProfileCreated(false) : setProfileCreated(true)
    }

    useEffect(() => {
        getProfiles()
    }, [])




    return(
        <div>
            {
                profileCreated ? <ProfileSwipe/> : <Create/>
            }
            
        </div>
    )
}

export default ProfileView