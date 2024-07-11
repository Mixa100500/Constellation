import { render } from "@testing-library/react";
import GenresList from "./GenresList.jsx";

describe('GenresList', () => {
  it('renders a list of genres correctly', () => {
    const genres = ['Action', 'Adventure', 'Sci-Fi']; 
    const { container } = render(<GenresList genres={genres} />);

    expect(container.textContent).toContain('Action, Adventure, Sci-Fi');
  });

  it('renders an empty list when no genres are provided', () => {
    const { container } = render(<GenresList genres={[]} />);

    expect(container.textContent).toBe('');
  });
})