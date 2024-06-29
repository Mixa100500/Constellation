import { render, screen, waitFor } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Reviews } from './Reviews';
import { ReviewItem } from './ReviewItem'; // предполагается, что компонент ReviewItem импортирован из файла ReviewItem

vi.mock('react-router-dom', () => ({
  useParams: vi.fn()
}));

vi.mock('react-redux', () => ({
  useSelector: vi.fn()
}));

describe('Reviews component', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ id: 'some_id' });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders Reviews component correctly when loaded is false', () => {
    useSelector.mockReturnValue({ list: [], loaded: false })
    render(<Reviews isMovie={true} />);
    expect(screen.getByText('loading...')).toBeInTheDocument();
    expect(screen.queryByTestId('review-item')).not.toBeInTheDocument();
  });

  it('renders Reviews component correctly when loaded is true', async () => {
    useSelector.mockReturnValue({ list: [{ id: 1, author: 'John Doe', content: 'Great movie!', author_details: { rating: 8 } }], loaded: true }); // Измените здесь состояние, если требуется
    render(<Reviews isMovie={true} />);
    await waitFor(() => {
      expect(screen.queryByText('loading...')).not.toBeInTheDocument();
      expect(screen.getByTestId('review-item')).toBeInTheDocument();
    });
  });
});