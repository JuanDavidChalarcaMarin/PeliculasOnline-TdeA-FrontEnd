import { useEntidades } from "../../../hooks/useEntidades";
import type Actor from "../modelos/Actor.model";
import IndiceEntidades from "../../../componentes/IndiceEntidades";

export default function IndiceActores() {
    const entidadesHook = useEntidades<Actor>('/actores');

    return (
        <IndiceEntidades<Actor>
            titulo="Actores"
            nombreEntidad="Actor"
            url="/actores"
            urlCrear="/actores/crear"
            {...entidadesHook}
        >
            {(actores, botones) => <>
                <thead>
                    <tr>
                        <th scope="col">Foto</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Fecha de nacimiento</th>
                        <th scope="col" className="text-end">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {actores.map(actor => (
                        <tr key={actor.id}>
                            <td>
                                {actor.foto
                                    ? <img src={actor.foto} alt={`Foto de ${actor.nombre}`}
                                        style={{ width: 55, height: 65, objectFit: 'cover', borderRadius: 4 }} />
                                    : <span>Sin foto</span>}
                            </td>
                            <td>{actor.nombre}</td>
                            <td>{actor.fechaNacimiento}</td>
                            <td className="text-end">
                                {botones(`/actores/editar/${actor.id}`, actor.id)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </>}
        </IndiceEntidades>
    );
}
