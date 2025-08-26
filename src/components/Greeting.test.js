import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";

describe('<Greeting> component', () => {

    test('renders Hello World! as text', () => {
        // arrange
        render(<Greeting />);
        // assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test("renders It's good to see you! if the button is NOT clicked", () => {
        // arrange
        render(<Greeting />);
        // assert
        const textElement = screen.getByText("It's good to see you!");
        const textChangedElement = screen.queryByText("Changed!");
        expect(textElement).toBeInTheDocument();
        expect(textChangedElement).not.toBeInTheDocument();
    })

    test("renders Changed! if the button is IS clicked", () => {
        // arrange
        render(<Greeting />);
        // act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        // assert
        const textElement = screen.getByText("Changed!");
        expect(textElement).toBeInTheDocument();
    })

    test("does not render It's good to see you! if the button is IS clicked", () => {
        // arrange
        render(<Greeting />);
        // act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        // assert
        const textElement = screen.queryByText("It's good to see you!");
        expect(textElement).toBeNull();
    })

});
