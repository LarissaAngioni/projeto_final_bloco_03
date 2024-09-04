import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import { ThreeDots } from "react-loader-spinner";

function FormCategoria() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      alert("Categoria não encontrada!");
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar("/categorias", categoria, setCategoria);

        alert("Categoria atualizada com sucesso!");
      } catch (error: any) {
        alert("Erro ao atualizar a categoria!");
      }
    } else {
      try {
        await cadastrar("/categorias", categoria, setCategoria);

        alert("Categoria cadastrada com sucesso!");
      } catch (error: any) {
        alert("Erro ao cadastrar a categoria!");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="categoria">Categoria</label>
          <input
            type="text"
            placeholder="Nome da categoria"
            name="tipo"
            className="border-2 border-slate-700 rounded p-2 utral-800"
            required
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-green-600 
            hover:bg-green-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? (
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper mx-auto"
            />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
