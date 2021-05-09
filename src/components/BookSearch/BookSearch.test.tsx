import React from 'react';
import { act, render } from '@testing-library/react';
import { BookSearch } from './BookSearch';

test('Book Search Renders', () => {
    const { getByText } = render(<BookSearch />);
    expect(getByText(/Try searching for a topic, for example/i)).toBeInTheDocument();
});
