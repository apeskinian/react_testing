import { render, screen } from '@testing-library/react'
import Async from './Async';

describe('<Async> component' ,() => {

    test('renders posts if request succeeds', async () => {
        // arrange
        render(<Async />)
        // assert
        const listItemElements = await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0);
    });

})