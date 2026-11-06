import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { SubmitHandler } from "react-hook-form";
import type { AxiosError } from "axios";
import type Actor from "../modelos/Actor.model";
import type ActorCreacion from "../modelos/ActorCreacion.model";
import FormularioActor from "./FormularioActor";
import Cargando from "../../../componentes/Cargando";
import clienteAPI from "../../../api/clienteAxios";
import { extraerErrores } from "../../../utilidades/extraerErrores";
import convertirActorAFormData from "../utilidades/convertirActorAFormData";

export default function EditarActor() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [modelo, setModelo] = useState<ActorCreacion>();
    const [errores, setErrores] = useState<string[]>([]);

    useEffect(() => {
        clienteAPI.get<Actor>(`/actores/${id}`)
            .then(res => setModelo({
                nombre: res.data.nombre,
                fechaNacimiento: res.data.fechaNacimiento,
                foto: res.data.foto
            }))
            .catch(() => navigate('/actores'));
    }, [id, navigate]);

    const onSubmit: SubmitHandler<ActorCreacion> = async data => {
        try {
            setErrores([]);
            const formData = convertirActorAFormData(data);
            await clienteAPI.put(`/actores/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            navigate('/actores');
        } catch (err) {
            setErrores(extraerErrores(err as AxiosError));
        }
    };

    return (
        <>
            <h3>Editar Actor</h3>
            {modelo
                ? <FormularioActor modelo={modelo} onSubmit={onSubmit} errores={errores} />
                : <Cargando />}
        </>
    );
}
