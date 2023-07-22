import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  adicionarAtividade,
  removerAtividade,
  finalizarAtividade,
} from "../redux/features/atividades.slice";
import { RootState } from "../redux/store";

interface Atividade {
  id: number;
  descricao: string;
  finalizada: boolean;
}

const ToDoList: React.FC = () => {
  const [novaAtividade, setNovaAtividade] = useState("");
  const atividades = useSelector(
    (state: RootState) => state.atividades.atividades
  );
  const dispatch = useDispatch();

  const handleAdicionarAtividade = () => {
    if (novaAtividade.trim() !== "") {
      dispatch(adicionarAtividade(novaAtividade));
      setNovaAtividade("");
    }
  };

  const handleRemoverAtividade = (id: number) => {
    dispatch(removerAtividade(id));
  };

  const handleFinalizarAtividade = (id: number) => {
    dispatch(finalizarAtividade(id));
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>React Todo App</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <input
          type="text"
          value={novaAtividade}
          placeholder="Enter Something"
          onChange={(e) => setNovaAtividade(e.target.value)}
        />
        <button
          className="btn btn-success m-2"
          onClick={handleAdicionarAtividade}
        >
          Add
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <ul className="m-0">
          {atividades.map((atividade: Atividade) => (
            <li
              key={atividade.id}
              className="d-flex justify-content-center align-items-center"
            >
              <span
                style={{
                  textDecoration: atividade.finalizada
                    ? "line-through"
                    : "none",
                }}
              >
                {atividade.descricao}
              </span>
              <div className="flex-grow-1"></div>
              <button
                className="btn btn-success m-2"
                onClick={() => handleFinalizarAtividade(atividade.id)}
              >
                <i className="fas fa-check"></i> {/* Bootstrap check icon */}
              </button>
              <button
                className="btn btn-danger m-2"
                onClick={() => handleRemoverAtividade(atividade.id)}
              >
                <i className="fas fa-times"></i> {/* Bootstrap X icon */}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
