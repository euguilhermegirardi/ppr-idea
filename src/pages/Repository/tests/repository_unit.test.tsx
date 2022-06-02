import { MemoryRouter } from 'react-router-dom';
import { render, RenderResult, screen } from '@testing-library/react';
import Repository from '../repository';
import { mockRepository, mockIssues } from './models/repositoryProps';

describe('Repos', () => {
    let element: RenderResult;

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        element = render(
            <MemoryRouter>
                <Repository
                    repository={mockRepository}
                    issues={mockIssues}
                />
            </MemoryRouter>
        );
    });

    it('should render the component', () => {
        // Arrange
        expect(screen).not.toBeNull();
    });

    it('should find "back" text', () => {
        // Assert
        const backTxt = screen.getByText('Back');

        // Arrange
        expect(backTxt).toBeInTheDocument();
    });

    it('should show image', () => {
        // Assert
        const image = screen.getByTestId('image') as HTMLImageElement;

        // Arrange
        expect(image.src).toContain(mockRepository.owner.avatar_url)
    });

    it('should show main title', () => {
        // Assert
        const mainTitle = screen.getByTestId('full-name');

        // Arrange
        expect(mainTitle).toHaveTextContent(mockRepository.full_name);
    });

    it('should show stars, forks and open issues', () => {
        // Assert
        const stars = screen.getByTestId('stars');
        const forks = screen.getByTestId('forks');
        const issues = screen.getByTestId('issues');

        // Arrange
        expect(stars).toHaveTextContent(mockRepository.stargazers_count);
        expect(forks).toHaveTextContent(mockRepository.forks_count);
        expect(issues).toHaveTextContent(mockRepository.open_issues_count);
    });

    it('should show issues list', () => {
        const issueList = screen.getByTestId('issuesList');

        // eslint-disable-next-line testing-library/no-node-access
        expect(issueList.children).toHaveLength(3);
    });

    it("should match snapshopt", () => {
        // Assert
        const { container } = element;

        // Arrange
        expect(container).toMatchSnapshot();
    });
});