import { FC, useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiSearch } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './styles';
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
        <>
            <Title>Search for a GitHub repository profile</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository} data-testid="form">
                <input
                    value={newRepository}
                    onChange={e => setNewRepository(e.target.value)}
                    placeholder="Search a profile"
                />
                <button type="submit"><FiSearch size={25} /></button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(repository => (
                    <Link
                        key={repository.full_name}
                        to={`/repositories/${repository.full_name}`}
                    >
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard_container;