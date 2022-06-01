import React, { FormEvent, Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiSearch } from 'react-icons/fi';
import { Title, TitleContainer, Form, Repositories, Error } from './styles';
import { DashboardRepositoryProps } from './models/dashboardProps';

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
            <TitleContainer>
                <Title>Github Finder</Title>
            </TitleContainer>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
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

export default Dashboard;