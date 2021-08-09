/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../context/auth-context";
import { useHttpClient } from "../hooks/http-hook";
import DisplayUserRecFood from '../components/DisplayUserRecFood';

const UserRecFood = () => {

    const auth = useContext(AuthContext);
    const { sendRequest } = useHttpClient();
    const [loadedFood, setLoadedFood] = useState();

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users/viewreceivedfood',
                    'POST',
                    JSON.stringify({
                    }),
                    {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + auth.token
                    }
                );
                setLoadedFood(responseData);
            } catch (err) { }
        };
        fetchFoods();
    }, [sendRequest]);

    return (
        <React.Fragment>
            {loadedFood && <DisplayUserRecFood items={loadedFood} />}
        </React.Fragment>
    );
};

export default UserRecFood;
