import { FC, useEffect, useState } from 'react';
import { useRouteMatch, } from 'react-router-dom';
import Repository from './repository';
import { RepositoryProps, Issue } from './models/repositoryProps';
import api from '../../services/api';

type RepositoryParams = {
    repository: string;
};

const Repository_container: FC = () => {
    const [repositoryy, setRepository] = useState<RepositoryProps | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        api.get(`repos/${params.repository}`).then(response => {
            setRepository(response.data);
        });

        api.get(`repos/${params.repository}/issues`).then(response => {
            setIssues(response.data);
        });
    }, [params.repository]);


    return (
        <>
            <Repository
                repository={repositoryy}
                issues={issues}
            />
        </>
    );
};

export default Repository_container;