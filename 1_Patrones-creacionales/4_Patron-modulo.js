const modulo_reveleador = (() => {
  const objeto = {};
  return {
    a: () => console.log(objeto),
    b: (key, val) => (objeto[key] = val),
    c: () => objeto,
  };
})();

modulo_reveleador.a();
modulo_reveleador.b("Guitar", "hero");
modulo_reveleador.a();

console.log(modulo_reveleador.c());
