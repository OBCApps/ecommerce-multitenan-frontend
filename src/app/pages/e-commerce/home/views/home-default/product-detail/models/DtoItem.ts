export class DtoItemMast {
    id_item: string
    id_linea: string
    id_categoria: string
    id_subcategoria: string
    nombre_template: string
    nombre: string
    precio: string
    descProductoCorta: string
    descProductoLarga: string
    ingredientes: string
    disponibilidad: string
    tipoMoneda: string
    beneficios: any[] = [];
    especificacionesPrincipales: any[] = [];
    especificacionesSecundarias: any[] = [];
    fichaproducto: any[] = [];
    informacionAdicioanl: any[] = [];
    modoUso: any[] = [];
    fotos: DtoFotoProducto[] = [];
}

export class DtoFotoProducto {
    url: string
    alt: string = 'Imagen no cargada'
}