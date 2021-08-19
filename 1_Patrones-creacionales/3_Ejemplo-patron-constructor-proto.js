Object.prototype.log = function () {
  console.log(this);
};

const pruebaObjeto = { numero: 3 };

pruebaObjeto.log();

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    try {
      return this.replace(/^\s+| \s+$/g, "j");
    } catch (error) {
      return this;
    }
  };
}

const pruebaTexto = "              lalala           ".trim();

pruebaTexto.log();
