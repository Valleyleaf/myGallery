const app = reqquire('express')();
const PORT = 80890;

app.listen(
    PORT,
    () => console.log(`Running on http://localhost:${PORT}`)
);