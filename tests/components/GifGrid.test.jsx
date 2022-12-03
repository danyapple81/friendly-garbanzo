import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba en <GifGrid />', () => {

    const category = 'One Punch';

    test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category } />);
        //screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        //screen.debug();
    });

    test('debe mostrar items cuando se cargan la imágenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://loquesea/Saitama.jpg'
            },
            {
                id: 'ABCD',
                title: "Goku",
                url: 'https://loquesea/Goku.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={ category } />);
        //screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});