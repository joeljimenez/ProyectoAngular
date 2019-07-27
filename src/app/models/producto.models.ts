export class Productos {
    constructor(
        public nombre:string,
        public codigo:string,
        public precio:number,
        public cantidad: number,
        public descripcion:string,
        public estado:number,
        public categoria:string,
        public img?:string,

    ) {
        
    }
}