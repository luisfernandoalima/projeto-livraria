import app from "./main.js";

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Online na porta: ${PORT}`)
})