import clienteAPI from "../../../api/clienteAxios";
import type Cine from "../modelos/Cine.model";
import type CineCreacion from "../modelos/CineCreacion.model";

export function obtenerCinesPaginados(pagina: number, recordsPorPagina: number) {
    return clienteAPI.get<Cine[]>('/cines', {
        params: { pagina, recordsPorPagina }
    });
}

export function obtenerTodosLosCines() {
    return clienteAPI.get<Cine[]>('/cines/todos');
}

export function obtenerCinePorId(id: number | string) {
    return clienteAPI.get<Cine>(`/cines/${id}`);
}

export function crearCine(cine: CineCreacion) {
    return clienteAPI.post('/cines', cine);
}

export function actualizarCine(id: number | string, cine: CineCreacion) {
    return clienteAPI.put(`/cines/${id}`, cine);
}

export function borrarCine(id: number | string) {
    return clienteAPI.delete(`/cines/${id}`);
}

