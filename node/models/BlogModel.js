// importamos la coneccion a la base de datos
import db from "../database/db.js";

import { DataTypes } from "sequelize";

const BlogModel = db.define( 'users', {
  usuario: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  img: { type: DataTypes.TEXT },
  createdAt: { type: DataTypes.DATE },
  updatedAt: { type: DataTypes.DATE }
} )

export default BlogModel