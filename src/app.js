import express from 'express';
import horaActual from './time.js'
//(app.js) Configuración de Express y rutas//

const app = express();


app.get('/',(req,res)=> {
res.send('hoolaaa');

app.get('/hora',(req,res)=> {
res.send(horaActual);

app.get('/fecha-completa', (req, res) => {
    const fecha = new Date();
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    res.send(fecha.toLocaleDateString('es-ES', opciones));
});

})
})
export default app;