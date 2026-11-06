import type ActorCreacion from "../modelos/ActorCreacion.model";

export default function convertirActorAFormData(actor: ActorCreacion): FormData {
    const formData = new FormData();

    formData.append('nombre', actor.nombre);
    formData.append('fechaNacimiento', actor.fechaNacimiento);

    // En edición, foto puede ser la URL actual. Solo enviamos un archivo nuevo.
    if (actor.foto instanceof File) {
        formData.append('foto', actor.foto);
    }

    return formData;
}
