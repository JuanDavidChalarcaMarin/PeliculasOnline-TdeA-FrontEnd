import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { SubmitHandler } from "react-hook-form";
import type { AxiosError } from "axios";
import type CineCreacion from "../modelos/CineCreacion.model";
import FormularioCine from "./FormularioCine";
import Cargando from "../../../componentes/Cargando";
import { extraerErrores } from "../../../utilidades/extraerErrores";
import { obtenerCinePorId, actualizarCine } from "../servicios/cinesServicio";

export default function EditarCine() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [modelo, setModelo] = useState<CineCreacion | undefined>(undefined);
    const [errores, setErrores] = useState<string[]>([]);

    useEffect(() => {
        if (!id) {
            navigate('/cines');
            return;
        }

        obtenerCinePorId(id)
            .then(res => setModelo(res.data))
            .catch(() => navigate('/cines'));
    }, [id, navigate]);

    const onSubmit: SubmitHandler<CineCreacion> = async (data) => {
        try {
            await actualizarCine(id as string, data);
            navigate('/cines');
        } catch (err) {
            setErrores(extraerErrores(err as AxiosError));
        }
    }

    return (
        <>
            <h3>Editar Cine</h3>
            {modelo ? <FormularioCine errores={errores} modelo={modelo} onSubmit={onSubmit} /> : <Cargando />}
        </>
    )
}
