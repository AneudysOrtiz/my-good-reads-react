import React from 'react';
import { act, render } from '@testing-library/react';
import { WishListComponent } from './WishListComponent';

test('Wish List Renders', () => {
    const { getByText } = render(<WishListComponent />);
    expect(getByText(/My Reading Wish List/i)).toBeInTheDocument();
});
