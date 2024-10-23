// Crear reserva (fecha,hora y nro de personas)

const loginUser = (req, res) => {
    const body = req.body;
  
    const match = passwordCompare(body.pass, usuario.pass);
  
    if (body.user === usuario.user) {
      if (match) {
        req.session.usuario = usuario;
  
        return res.redirect("/");
      } else {
        res.send("Contraseña incorrecta");
      }
    } else {
      res.send("El usuario no existe");
    }
  };

// const seeUser = (req,res) =>{
//     const body = req.body;
//     res.send (body.usuario)
// }

// const newReserv = (req, res) => {
//   const usuario = { fecha, hora, personas } = req.body;
//   const usuarioId = req.session.usuario.id;
//    console.log (usuario, usuarioId)
// };



usuario = {
  user: "Rick",
  pass: "Morty",

};

module.exports = { loguinUser };
