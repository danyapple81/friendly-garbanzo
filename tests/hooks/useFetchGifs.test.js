import { renderHook, waitFor } from '@testing-library/react';
import {useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe devolver el estado incial', () => {
        const { result } = renderHook( () => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe devolver un arreglo de imágenes y isLoading en false', async() => {
        const { result } = renderHook( () => useFetchGifs('One Punch'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(images.length).toEqual(10);
        expect(isLoading).toBeFalsy();
    });
});