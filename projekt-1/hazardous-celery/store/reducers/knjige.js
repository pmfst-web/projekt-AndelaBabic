import { KNJIGE } from '../../data/test-podaci';
import { PROMJENA_FAVORITA } from '../actions/knjige';

const pocetnoStanje = {
  knjige: KNJIGE,
  filterKnjige: KNJIGE,
  favoritKnjige: [],
};

const knjigaReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case PROMJENA_FAVORITA: {
      const odabran = state.favoritKnjige.findIndex(
        (knjiga) => knjiga.id === action.idKnjige
      );
      if (odabran >= 0) {
        const noviFavoriti = [...state.favoritKnjige]
        noviFavoriti.splice(odabran, 1)
        return {...state, favoritKnjige: noviFavoriti}
      } else {
        const rad = state.radovi.find(rad => rad.id === action.idKnjige)
        return {...state, favoritKnjige: state.favoritKnjige.concat(knjiga)}
      }
    }
    default:
      return state;
  }
};
export default knjigaReducer;