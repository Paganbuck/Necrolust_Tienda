const producto=require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));

//Ver la lista de productos
exports.getProducts=async(req, res, next) =>{
    const productos= await producto.find();
    if (!productos){
        return res.status(404).json({
            success:false,
            error:true
        })
    }

    res.status(200).json({
        sucess:true,
        cantidad: productos.length,
        productos
    })
}

//Ver un producto por ID
exports.getProductById= async (req, res, next)=>{
    const product= await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success:false,
            message: "Producto no encontrado",
            error:true
        })
    }
    res.status(200).json({
        sucess:true,
        message:"Aquí encuentra la información sobre tu producto",
        product
    })
}

//Update para producto
exports.updateProduct= async (req, res,next) =>{
    let product= await producto.findById(req.params.id) //Variable de tipo modificable

    if (!product){ //verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({
            success:false,
            message: "Producto no encontrado"
        })
    }
    //si el objeto existe, ejecuto la actualización
    product= await producto.findByIdAndUpdate(req.params.id, req.body,{
        new:true, //Validp atributos nuevos o actualizados
        runValidators:true
    });
    //Respuesta de exito en la actualización
    res.status(200).json({
        success:true,
        message:"Producto actualizado de forma exitosa",
        product
    })
}
//Eliminar producto
exports.deleteProduct= async (req, res,next) =>{
    const product= await producto.findById(req.params.id) //Variable de tipo modificable

    if (!product){ //verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({ //Si el objetono existe, return termina el método
            success:false,
            message: "Producto no encontrado"
        })
    }

    await product.remove(); //Eliminamos el producto
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente",
    })
}

//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product = await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//HABLAMOS DE FETCH
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); Llamamos al método creado para probar la consulta

//ver by ID
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//verProductoPorID('63633b8657fbf56145213750'); Probamos el método con el id del producto
