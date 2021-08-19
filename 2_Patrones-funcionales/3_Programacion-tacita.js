const f = (ruta, cb) => {
  const resultado = computacionPesada();

  cb(resultado);
};

f("/users", (resultado) => {});

const manejaResultado = (resultado) => {};

app.get("/users", manejaResultado);
