const INCREMENTAR_TEMPO = "aluno/INCREMENTAR_TEMPO";
const REDUZIR_TEMPO = "aluno/REDUZIR_TEMPO";
const MODIFICAR_EMAIL = "aluno/MODIFICAR_EMAIL";

export const incrementar_tempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzir_tempo = () => ({ type: REDUZIR_TEMPO });
export const modificar_email = (payload) => ({
  type: MODIFICAR_EMAIL,
  payload,
});

const initialState = {
  nome: "Arthur Nonaka",
  email: "zenaboa7@gmail.com",
  diasRestantes: 120,
};

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      state.diasRestantes += 1;
      break;
    case REDUZIR_TEMPO:
      state.diasRestantes -= 1;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
  }
}, initialState);

export default reducer;