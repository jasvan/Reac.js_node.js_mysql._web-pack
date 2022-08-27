import Express from "express";
import Cors from "cors";

/// importar la conecion a la db

import db from "./database/db.js";
import blogRoutes from './routes/routes.js'

const app = Express()
app.use( Cors() )
app.use( Express.json() )
app.use( '/blogs', blogRoutes )

try
{
  await db.authenticate()
  console.log( ' Conexion exitosa a la base de datos' )
} catch ( error )
{
  console.log( ' Error de Conexion a la base de datos:', error )
}

app.listen( 8000, () => {
  console.log( 'Server is runing in http://localhost:8000/' )
} )