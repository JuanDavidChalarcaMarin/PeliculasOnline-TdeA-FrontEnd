import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type CineCreacion from "../modelos/CineCreacion.model";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { primeraLetraMayuscula } from "../../../validaciones/Validaciones";
import Boton from "../../../componentes/Boton";
import { NavLink } from "react-router";
import Mapa from "../../../componentes/Mapa/Mapa";
import MostrarErrores from "../../../componentes/MostrarErrores";

export default function FormularioCine(props: FormularioCineProps) {

    const { register, handleSubmit, setValue, reset, watch,
        formState: { errors, isValid, isSubmitting } }
        = useForm<CineCreacion>({
            resolver: yupResolver(reglasDeValidacion),
            mode: 'onChange',
            defaultValues: props.modelo ?? { nombre: '', latitud: undefined, longitud: undefined }
        });

    const latitud = watch('latitud');
    const longitud = watch('longitud');
    const coordenadasActuales = typeof latitud === 'number' && typeof longitud === 'number'
        && !Number.isNaN(latitud) && !Number.isNaN(longitud)
        ? [{ lat: latitud, lng: longitud }]
        : undefined;

    useEffect(() => {
        if (props.modelo) {
            reset(props.modelo);
        }
    }, [props.modelo, reset]);

    return (
        <>
            <MostrarErrores errores={props.errores} />
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" className="form-control" autoComplete="off"
                        {...register('nombre')} />
                    {errors.nombre && <p className="error">{errors.nombre.message}</p>}
                </div>

                <div className="row mt-3">
                    <div className="col-md-6">
                        <label htmlFor="latitud">Latitud</label>
                        <input type="number" id="latitud" className="form-control" step="any"
                            {...register('latitud', { valueAsNumber: true, onChange: (e) => {
                                const valor = Number(e.target.value);
                                setValue('latitud', valor, { shouldValidate: true, shouldDirty: true });
                            } })} />
                        {errors.latitud && <p className="error">{errors.latitud.message}</p>}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="longitud">Longitud</label>
                        <input type="number" id="longitud" className="form-control" step="any"
                            {...register('longitud', { valueAsNumber: true, onChange: (e) => {
                                const valor = Number(e.target.value);
                                setValue('longitud', valor, { shouldValidate: true, shouldDirty: true });
                            } })} />
                        {errors.longitud && <p className="error">{errors.longitud.message}</p>}
                    </div>
                </div>

                <div className="mt-4">
                    <Mapa
                        key={`${latitud ?? 'sin-lat'}-${longitud ?? 'sin-lng'}`}
                        coordenadas={coordenadasActuales}
                        lugarSeleccionado={coordenada => {
                            setValue('latitud', Number(coordenada.lat), {
                                shouldValidate: true,
                                shouldDirty: true
                            });

                            setValue('longitud', Number(coordenada.lng), {
                                shouldValidate: true,
                                shouldDirty: true
                            });
                        }} />
                </div>

                <div className="mt-3">
                    <Boton type="submit" disabled={!isValid || isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar'}</Boton>
                    <NavLink to="/cines" className="btn btn-secondary ms-2">Cancelar</NavLink>
                </div>
            </form>
        </>
    )

}

interface FormularioCineProps {
    modelo?: CineCreacion;
    onSubmit: SubmitHandler<CineCreacion>;
    errores: string[];
}

const reglasDeValidacion = yup.object({
    nombre: yup.string().required('El nombre es obligatorio')
        .test(primeraLetraMayuscula()),
    latitud: yup.number()
        .typeError('La latitud es obligatoria')
        .required('La latitud es obligatoria')
        .min(-90, 'La latitud debe estar entre -90 y 90.')
        .max(90, 'La latitud debe estar entre -90 y 90.'),
    longitud: yup.number()
        .typeError('La longitud es obligatoria')
        .required('La longitud es obligatoria')
        .min(-180, 'La longitud debe estar entre -180 y 180.')
        .max(180, 'La longitud debe estar entre -180 y 180.')
})
