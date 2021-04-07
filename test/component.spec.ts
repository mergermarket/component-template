import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'

import "svelte"
import Component from '../src/Component.svelte'

test('rendered', () => {
    const { getByText } = render(Component, {})

    expect(getByText("Hello, World!")).toBeInTheDocument()
})