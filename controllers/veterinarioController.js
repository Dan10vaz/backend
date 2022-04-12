import Veterinario from "../models/Veterinario.js";

const registrar = async (req, res) => {
  const {email} = req.body;

  //Prevenir usuarios duplicados
    const existeUsuario = await Veterinario.findOne({email});

    if(existeUsuario) {
      const error = new Error('Usuario ya registrado');
      return res.status(400).json({msg: error.message});
    }

  try {
    //Guardar un Nuevo Veterinario
    const veterinario = new Veterinario(req.body);
    const veterianrioGuardado = await veterinario.save(); //creamos o guardamos en la abse de datos

    res.json(veterianrioGuardado);
  } catch (error) {
    console.log(`El error es: ${error}`);
  }
};

const perfil = (req, res) => {
  res.json({ msg: "Mostrando perfil" });
};

export { registrar, perfil };
