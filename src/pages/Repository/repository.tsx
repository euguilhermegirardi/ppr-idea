import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import { RepositoryProps, Issue } from './models/repositoryProps';

const Repository = ({
    repository,
    issues,
}: {
    repository: RepositoryProps | null;
    issues: Issue[];
}) => {
    return (
        <>
            <Header>
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Back
                </Link>
            </Header>

            {repository && (
                <RepositoryInfo>
                    <header>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>

                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}

            <Issues>
                {issues.map(issue => (
                    <a key={issue.id} href={issue.html_url}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issues>
        </>
    );
};

export default Repository;