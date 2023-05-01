import { render, screen } from '@testing-library/react'
import App from './PhoneApp'
import PhoneApp from './PhoneApp'

describe('PhoneApp', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<PhoneApp />)
    expect(getByTestId('phone-app')).toBeInTheDocument()
  })
})