import React, { FC, useState, useEffect, FormEvent } from 'react';
import Dashboard from './dashboard';
import { DashboardRepositoryProps } from './models/dashboardProps';
import api from '../../services/api';

const Dashboard_container: FC = () => {
    const [newRepository, setNewRepository] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<DashboardRepositoryProps[]>(() => {
        const storageRepositories = localStorage.getItem(
            '@GitHubExplorer:repositories',
        );

        if (storageRepositories) {
            return JSON.parse(storageRepositories);
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem(
            '@GitHubExplorer:repositories',
            JSON.stringify(repositories),
        );
    }, [repositories]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!newRepository) {
            setInputError('You need to type the author\'s name');
            return;
        }

        try {
            const response = await api.get(`users/${newRepository}/repos`);

            const repository = response.data;
            setRepositories(repository);
            setNewRepository('');
            setInputError('');
        } catch (err) {
            setInputError('Ops... something is wrong');
        }
    }

    return (
        <Dashboard
            newRepository={newRepository}
            inputError={inputError}
            repositories={repositories}
            handleAddRepository={handleAddRepository}
            setNewRepository={setNewRepository}
        />
    );
};

export default Dashboard_container;