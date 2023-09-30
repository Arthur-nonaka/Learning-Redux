const COMPLETAR_AULA = "aulas/COMPLETAR_AULA";
const COMPLETAR_CURSO = "aulas/COMPLETAR_CURSO";
const RESETAR_CURSO = "aulas/RESETAR_CURSO";

export const completar_aula = (payload) => ({ type: COMPLETAR_AULA, payload });
export const completar_curso = () => ({ type: COMPLETAR_CURSO });
export const resetar_curso = () => ({ type: RESETAR_CURSO });

const initialState = [
  {
    id: 1,
    nome: "Design",
    completa: true,
  },
  {
    id: 2,
    nome: "HTML",
    completa: false,
  },
  {
    id: 3,
    nome: "UI",
    completa: false,
  },
];

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      state.forEach((x) => {
        if (x.id === action.payload) {
          x.completa = true;
        }
      });
      break;
    case COMPLETAR_CURSO:
      state.forEach((x) => {
        if (!x.completa) {
          x.completa = true;
        }
      });
      break;
    case RESETAR_CURSO:
      state.forEach((x) => {
        if (x.completa) {
          x.completa = false;
        }
      });
      break;
  }
}, initialState);

export default reducer;
