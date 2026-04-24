//(time.js)Módulo que devuelve la hora actual//
function horaActual (){
  return  dayjs().format('HH:mm : ss')
}

export default horaActual