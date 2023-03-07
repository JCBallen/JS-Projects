// ! Export enable reading from other modules/files
export function suma(x = 0, y = 0) {
    return x + y
}

export function multiplicar(x = 0, y = 0) {
    return x * y
}

export const mi_titulo = 'JS Module Title'
export const num = 43
export const mi_lista = [3, true, 'hi']

// if nothing is specifically called, return default
export default mi_titulo