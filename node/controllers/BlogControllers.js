import BlogModel from '../models/BlogModel.js';

//metodos pra el crud **/

// mostrar todos los registros
export const getAllBlogs = async ( reg, res ) => {
  try
  {
    const blogs = await BlogModel.findAll()
    res.json( blogs )
  } catch ( error )
  {
    res.json( { message: error.message } )
  }
}
// mostrar un registro
export const getBlogs = async ( reg, res ) => {
  try
  {
    const blog = await BlogModel.findAll( {
      where: {
        id: reg.params.id
      }
    } )
    res.json( blog[ 0 ] )
  } catch ( error )
  {
    res.json( { message: error.message } )
  }
}

// crear un registro
export const createBlog = async ( reg, res ) => {
  try
  {
    await BlogModel.create( reg.body )
    res.json( {
      "message": "resgistro creado correctamente "
    } )

  } catch ( error )
  {
    res.json( { message: error.message } )
  }
}

// actualizar un registro
export const updateBlog = async ( reg, res ) => {
  try
  {
    await BlogModel.update( reg.body, {
      where: { id: reg.params.id }
    } )
    res.json( {
      "message": "resgistro actualizado correctamente "
    } )
  } catch {
    res.json( { message: error.message } )
  }
}

// eliminar registro

export const deleteBlog = async ( reg, res ) => {
  try
  {
    await BlogModel.destroy( {
      where: { id: reg.params.id }
    } )
    res.json( {
      "message": "resgistro eliminado correctamente "
    } )
  } catch ( error )
  {
    res.json( { message: error.message } )
  }
}