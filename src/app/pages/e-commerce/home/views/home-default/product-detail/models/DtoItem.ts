export class DtoItemMast {
    id_item: string
    id_linea: string
    id_categoria: string
    id_subcategoria: string
    nombre: string
    precio: string
    disponibilidad: string
    tipoMoneda: string
    descripcionProducto: any[] = [];
    fotos: DtoFotoProducto[] = [];
}

export class DtoFotoProducto {
    url : string
    alt : string = 'Imagen no cargada'
}