import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { listar } from "../../../services/Service";
import { ThreeDots } from "react-loader-spinner";
import CardCategorias from "../cardcategorias/CardCategorias";

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {

        try {
            await listar('/categorias', setCategorias);
        } catch (error: any) {
            alert('Erro ao listar as Categorias')
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <>
            {categorias.length === 0 && (
                <ThreeDots
                visible={true}
                height="80"
                width="80"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="
                bg-green-300 
                flex 
                justify-center
                ">
                <div className="my-4 container flex flex-col">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default ListarCategorias;