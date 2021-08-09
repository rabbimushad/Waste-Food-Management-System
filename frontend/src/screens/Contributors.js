import React, { useEffect, useState} from 'react';
import { useHttpClient } from "../hooks/http-hook";
import DisplayContributors from '../components/DisplayContributors';

const Contributors = () => {

    const { sendRequest } = useHttpClient();
    const [contributors, setContributors] = useState();

    useEffect(() => {
        const fetchContributors = async () => {
            try {
                const responseData = await sendRequest(
                  'http://localhost:5000/api/users/contributors'
                );
                setContributors(responseData);
              } catch (err) {}
        };
        fetchContributors();
    }, [sendRequest]);

    return (
        <React.Fragment>
            {contributors && <DisplayContributors items={contributors} />}
        </React.Fragment>
    );
};

export default Contributors;