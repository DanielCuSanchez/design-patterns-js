const prototipo = {
  marca: "nissan",
  acelerar: function () {
    console.log(`acelerando ${this.marca}`);
  },
};

const versa = Object.create(prototipo);

versa.acelerar();
