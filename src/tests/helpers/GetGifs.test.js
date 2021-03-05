import { GetGifs } from '../../helpers/GetGifs';

describe('Pruebas con GetGifs Fecth', () => {
  test('debe de traer 10 elementos', async () => {
    const gifs = await GetGifs('One Punch');

    expect(gifs.length).toBe(10);
  });

  test('debe de traer 10 elementos', async () => {
    const gifs = await GetGifs('');

    expect(gifs.length).toBe(0);
  });
});
