class MiClase {
  constructor(valor = 1) {
    (this.propiedad = valor),
      (this.metodo = () => {
        //Soy un metodo
      });
  }
}

const instancia = new MiClase();

console.log(instancia);
