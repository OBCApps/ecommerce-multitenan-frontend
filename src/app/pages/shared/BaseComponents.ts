export class BaseComponents {





    // ---------------- FUNCTIONS
    getIconByTipoMoneda(tipoMoneda: any): any {
        switch (tipoMoneda) {
            case 'PEN': {
                return "S/ ";
            }
            case 'USD': {
                return "$ ";
            }
            default : {
                return "Er "
            }
        }

    }
}