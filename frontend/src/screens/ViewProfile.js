/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../context/auth-context";
import { useHttpClient } from "../hooks/http-hook";
import ViewUser from '../components/ViewUser';

const ViewProfile = () => {

    const auth = useContext(AuthContext);
    const { sendRequest } = useHttpClient();
    const [loadedUser, setloadedUser] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users/viewprofile',
                    'POST',
                    JSON.stringify({
                    }),
                    {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + auth.token
                    }
                );
                setloadedUser(responseData);
            } catch (err) { }
        };
        fetchUsers();
    }, [sendRequest]);

    return (
        <React.Fragment>
            {loadedUser && <ViewUser items={loadedUser} /> }
        </React.Fragment>
    );
};

export default ViewProfile;