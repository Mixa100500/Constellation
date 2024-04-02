import { render } from '@testing-library/react';
import { ReviewItem } from './ReviewItem';

describe('ReviewItem component', () => {
  const review = {
    author: 'John Doe',
    content: 'This is a review content.',
    author_details: {
      rating: 8
    }
  };

  test('renders author, content, and rating correctly', () => {
    const { getByText } = render(<ReviewItem review={review} />);
    
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('This is a review content.')).toBeInTheDocument();
    expect(getByText('Rating: 8')).toBeInTheDocument();
  });

  test('displays first character of author name in icon text', () => {
    const { getByText } = render(<ReviewItem review={review} />);
    expect(getByText('J')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(<ReviewItem review={review} />);
    expect(container).toMatchSnapshot();
  });

  test('renders with default rating if rating is not provided', () => {
    const reviewWithoutRating = {
      author: 'Jane Doe',
      content: 'This is another review content.',
      author_details: {}
    };
    const { getByText } = render(<ReviewItem review={reviewWithoutRating} />);
    
    expect(getByText('Rating:')).toBeInTheDocument();
  });
});