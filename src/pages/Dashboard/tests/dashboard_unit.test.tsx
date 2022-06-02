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

    // describe('onSubmit', () => {
    //     it('should be able to submit form', async () => {
    //         // Assert
    //         // const onSubmit = jest.fn();
    //         const mockedFn = jest.fn(() => {
    //             console.log('onSubmit');
    //         });

    //         // const { container, getByTestId, getByText } = render(
    //         //     <>
    //         //         <Form hasError={false} onSubmit={mockedFn} />
    //         //     </>
    //         // );

    //         // console.log(container)

    //         // // eslint-disable-next-line testing-library/prefer-screen-queries
    //         // fireEvent.click(getByText('Pesquisar'));
    //         // expect(mockedFn).toHaveBeenCalled();

    //         const { getByText } = render(
    //             <div>
    //                 <form id="form-id" onSubmit={mockedFn}>
    //                     <input />
    //                     <button form="form-id" type="submit">
    //                         Submit
    //                     </button>
    //                 </form>
    //             </div>
    //         );

    //         // eslint-disable-next-line testing-library/prefer-screen-queries
    //         fireEvent.click(getByText('Submit'));
    //         expect(mockedFn).toHaveBeenCalled();
    //     });
    // })

    it("should match snapshopt", () => {
        // Assert
        const { container } = element;
        // Arrange

        expect(container).toMatchSnapshot();
    });
});