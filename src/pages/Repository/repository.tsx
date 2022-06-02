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
                            data-testid="image"
                        />
                        <div>
                            <strong data-testid="full-name">{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>

                    <ul>
                        <li data-testid="stars">
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li data-testid="forks">
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li data-testid="issues">
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}

            <Issues data-testid="issuesList">
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