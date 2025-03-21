import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { IGalleryItemProps } from '../types';
import configureStore from 'redux-mock-store';
import Heart from '../components/Heart/index';
import { Provider } from 'react-redux';
import { like, unlike } from '../redux/slices/characterSlice';

const mockStore = configureStore([]);
describe('Heart Component', () => {
  const item: IGalleryItemProps = {
    item: {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: { name: 'Earth', url: 'https://example.com' },
      location: { name: 'Earth', url: 'https://example.com' },
      image: 'https://example.com/rick.png',
      episode: ['https://example.com/episode/1'],
      url: 'https://example.com/character/1',
      created: '2023-10-01',
    },
  };

  test('should dispatch like action when character is not liked', () => {
    const initialState = {
      characters: {
        characters: [],
      },
    };
    const store = mockStore(initialState);
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <Heart item={item.item} />
      </Provider>
    );

    const heartImg = screen.getByAltText('image');
    fireEvent.click(heartImg);
    expect(store.dispatch).toHaveBeenLastCalledWith(like(item.item));
  });

  test('should dispatch unlike action when character is alreay liked', () => {
    const initialState = {
      characters: {
        characters: [item.item],
      },
    };
    const store = mockStore(initialState);
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <Heart item={item.item} />
      </Provider>
    );
    const heartImg = screen.getByAltText('image');
    fireEvent.click(heartImg);
    expect(store.dispatch).toHaveBeenLastCalledWith(unlike(item.item.id));
  });
});
