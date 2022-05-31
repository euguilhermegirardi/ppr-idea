import React, { FormEvent, Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './styles';
import { DashboardRepositoryProps } from './models/dashboardProps';
//import logoImg from '../../assets/logo.png';

const Dashboard = ({
    newRepository,
    inputError,
    repositories,
    handleAddRepository,
    setNewRepository,
}: {
    newRepository: string;
    inputError: string;
    repositories: DashboardRepositoryProps[];
    handleAddRepository: (event: FormEvent<HTMLFormElement>) => Promise<void>;
    setNewRepository: Dispatch<React.SetStateAction<string>>;
}) => {
    return (
        <>
            {/* <img src={logoImg} alt="GitHub Explorer" /> */}
            <Title>Explore repositórios no GitHub</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepository}
                    onChange={e => setNewRepository(e.target.value)}
                    placeholder="Digite o nome do repositório aqui"
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

export default Dashboard;