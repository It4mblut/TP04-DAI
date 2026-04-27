//(index.js) punto de entrada del servido//
import app from './src/app.js'

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor en puerto https://localhost:${port}`)
})
