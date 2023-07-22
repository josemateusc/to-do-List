import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Atividade {
  id: number;
  descricao: string;
  finalizada: boolean;
}

interface AtividadesState {
  atividades: Atividade[];
}

const initialState: AtividadesState = {
  atividades: [],
};

const atividadesSlice = createSlice({
  name: "atividades",
  initialState,
  reducers: {
    adicionarAtividade(state, action: PayloadAction<string>) {
      const novaAtividade: Atividade = {
        id: state.atividades.length + 1,
        descricao: action.payload,
        finalizada: false,
      };
      state.atividades.push(novaAtividade);
    },
    removerAtividade(state, action: PayloadAction<number>) {
      state.atividades = state.atividades.filter(
        (atividade) => atividade.id !== action.payload
      );
    },
    finalizarAtividade(state, action: PayloadAction<number>) {
      const atividade = state.atividades.find(
        (atividade) => atividade.id === action.payload
      );
      if (atividade) {
        atividade.finalizada = true;
      }
    },
  },
});

export const { adicionarAtividade, removerAtividade, finalizarAtividade } =
  atividadesSlice.actions;

export default atividadesSlice.reducer;
