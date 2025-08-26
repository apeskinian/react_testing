import { render, screen } from '@testing-library/react'
import Greeting from "./Greeting";

test('renders Hello World as text', () => {
    // arrange
    render(<Greeting />);

    // act
    // ...nothing

    // assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
});