import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import Dashboard from '../dashboard';

describe('Dashboard', () => {
    let element: RenderResult;

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        element = render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );
    });

    it('should render the component', () => {
        // Arrange
        expect(screen).not.toBeNull();
    });

    it('should find the main title', () => {
        // Assert
        const title = screen.getByText(/Search for a GitHub repository profile/i)

        // Arrange
        expect(title).toBeInTheDocument();
    });

    it('should be able to type something in the input', async () => {
        // Assert
        const input = screen.getByLabelText('search-input') as HTMLInputElement;

        // Arrange
        fireEvent.change(input, { target: { value: 'Barbosa, Gabs' } });
        expect(input.value).toBe('Barbosa, Gabs');
    });

    it("should match snapshopt", () => {
        // Assert
        const { container } = element;

        // Arrange
        expect(container).toMatchSnapshot();
    });
});