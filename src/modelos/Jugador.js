class Jugador extends Modelo {

    constructor(x, y) {
        super(imagenes.jugador, x, y)
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY
    }

    actualizar(){
        this.x = this.x + this.vx;
        if(this.x< (this.ancho/2)){
            this.x = this.ancho/2
        }
        if(this.x > (480 -this.ancho/2 )){
            this.x = 480 -this.ancho/2
        }

        this.y = this.y + this.vy;
        if(this.y < (this.alto/2)){
            this.y = this.alto/2

        }
        if(this.y > (320 - this.alto/2 )){
            this.y = 320  - this.alto/2 
        }
    }
    
    moverX (direccion){
        this.vx = direccion * 4;
    }
    
    moverY (direccion){
        this.vy = direccion * 4;
    }
    
}
