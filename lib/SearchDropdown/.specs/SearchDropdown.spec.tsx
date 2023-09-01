import {
    describe,
    expect,
    it,
    vi
} from 'vitest';

import React from 'react';

import { fireEvent, getByText, render, screen } from '@testing-library/react';
import SearchDropdown from '..';

describe('SearchDropdown', () => {

    const mockResults = [
      {
        name: "item 1",
        action: () => {},
      },
      {
        name: "item 2",
        action: () => {},
      },
    ];

    const onChange = vi.fn();
    
    it('displays the search results and calls the onChange prop', () => {
        render(
              // @ts-expect-error TS(2554): props mismatch.
            <SearchDropdown placeholder="search me!" results={mockResults} handleOnChange={onChange} />
        );
        expect(onChange).not.toHaveBeenCalled();

        fireEvent.change(screen.getByPlaceholderText("search me!"), {target: {value: 'im searching!'}});

        expect(onChange).toHaveBeenCalled();

        expect(screen.getByText(mockResults[0].name))
        expect(screen.getByText(mockResults[1].name))

    })

});