import { render, screen } from "@testing-library/react";
import { Rating } from "./Rating";

test('renders content', () => {
  const rating = {
    rating: 2,
    label: 'HBO'
  }

  render(<Rating {...rating} />)
  const element = screen.getByText(rating.label)
  expect(element).toBeDefined()
})

Rating