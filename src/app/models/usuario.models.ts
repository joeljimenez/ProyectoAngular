export class Usuario {
    constructor(
        public nombre:string,
        public email:string,
        public password:string,
        public estado?: true,
        public role?:string,
        public img?:string,
        public google?:boolean
 
    ) {
        
    }
}