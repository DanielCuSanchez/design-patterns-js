const y = "Lelele";

const f = () => {
  const x = "Lalalala";
  (() => {
    const z = "Lololo";
    console.log(x, y, z);
  })();
};

f();
