import { FC, useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
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
            setInputError('Você precisa digitar autor/nome do repositório');
            return;
        }

        try {
            const response = await api.get(`users/${newRepository}/repos`);

            const repository = response.data;
            setRepositories(repository);
            setNewRepository('');
            setInputError('');
        } catch (err) {
            setInputError('Hmm... algo deu errado ao buscar esse repositório');
        }
    }

    return (
        <>
            <Title>Explore repositórios no GitHub</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository} data-testid="form">
                <input
                    value={newRepository}
                    onChange={e => setNewRepository(e.target.value)}
                    placeholder="Digite o nome do repositório aqui"
                    type="text"
                    aria-label="search-input"
                />
                <button type="submit">Pesquisar</button>
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