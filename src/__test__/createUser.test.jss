jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');
import { createUser } from '../client/js/createUser';

test('createUser calls fetch with the right args and returns the user id', async () => {
    fetch.mockReturnValue(Promise.resolve(new Response('4')));

    const userId = await createUser();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost' + ':8081/sentiment', {
        method: 'POST',
    });
    expect(userId).toBe('4');
});