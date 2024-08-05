import app from "./app";

const port = 3001;
app.listen(port, () => {
  console.log(`ACESSAR: http://localhost:${port}`);
  console.log(`PORT: ${port}`)
})
