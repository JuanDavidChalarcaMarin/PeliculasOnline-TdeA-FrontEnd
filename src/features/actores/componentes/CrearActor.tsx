import type { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { AxiosError } from "axios";
import type ActorCreacion from "../modelos/ActorCreacion.model";
import FormularioActor from "./FormularioActor";
import clienteAPI from "../../../api/clienteAxios";
import { extraerErrores } from "../../../utilidades/extraerErrores";
import convertirActorAFormData from "../utilidades/convertirActorAFormData";

export default function CrearActor() {
    const navigate = useNavigate();
    const [errores, setErrores] = useState<string[]>([]);

    const onSubmit: SubmitHandler<ActorCreacion> = async data => {
        try {
            setErrores([]);
            const formData = convertirActorAFormData(data);
            await clienteAPI.post('/actores', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            navigate('/actores');
        } catch (err) {
            setErrores(extraerErrores(err as AxiosError));
        }
    };

    return (
        <>
            <h3>Crear Actor</h3>
            <FormularioActor onSubmit={onSubmit} errores={errores} />
        </>
    );
}
