export function filtradoFunko(arr, filtro) {
    const filtrado = arr.find((el) => {
        return el.modelo.includes(filtro);
    });
    return filtrado;
}