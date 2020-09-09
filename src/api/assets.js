import { ASSETS_API_URL } from '../config';
import { ASSETS_API_KEY } from '../config';

export const fetchAssets = (max, last) => {
    return fetch(`${ASSETS_API_URL}?apikey=${ASSETS_API_KEY}&max=${max}&last=${last}`)
      .then(res => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          console.log('error', error);
        }
      )
}
