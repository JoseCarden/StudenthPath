const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3000; // Puedes cambiar el puerto si es necesario

app.use(cors());
app.use(bodyParser.json()); // Middleware para parsear JSON en las solicitudes

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'ProyectoEduVigia', // Nombre de tu base de datos
  port: 3306 // Asegúrate de que el puerto sea correcto según tu configuración de MySQL
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexión a la base de datos establecida');
});

// Ruta para registrar un administrador
app.post('/registrar-admin', (req, res) => {
  console.log('Datos recibidos:', req.body); // Verifica los datos recibidos
  const { Correo, Usuario, Clave } = req.body;
  const sql = `INSERT INTO Admin (Correo, Usuaro, Clave) VALUES ('${Correo}', '${Usuario}', '${Clave}')`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al registrar administrador:', err); // Muestra errores de inserción
      res.status(500).send('Error al registrar administrador');
      return;
    }
    console.log('Administrador registrado:', result); // Verifica el resultado de la inserción
    res.send('Administrador registrado exitosamente');
  });
});

// Ruta para validar credenciales de administrador
app.post('/validar-credenciales', (req, res) => {
    console.log('Datos de inicio de sesión:', req.body);
    const { Correo, Usuario, Clave } = req.body;
    const sql = `SELECT * FROM Admin WHERE Correo = '${Correo}' AND Usuaro = '${Usuario}' AND Clave = '${Clave}'`;
    
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al verificar credenciales:', err);
        res.status(500).send({ autenticado: false, mensaje: 'Error al verificar credenciales' });
        return;
      }
      
      if (result.length > 0) {
        console.log('Inicio de sesión exitoso');
        res.send({ autenticado: true, mensaje: 'Inicio de sesión exitoso' });
      } else {
        console.log('Credenciales incorrectas');
        res.send({ autenticado: false, mensaje: 'Credenciales incorrectas' });
      }
    });
  });
  
app.post('/cambiar-clave', (req, res) => {
  const { Correo, Clave } = req.body;
  
  // Verificar si el correo existe en la base de datos
  const checkEmailQuery = `SELECT * FROM Admin WHERE Correo = '${Correo}'`;
  db.query(checkEmailQuery, (err, result) => {
    if (err) {
      console.error('Error al verificar correo:', err);
      res.status(500).send({ actualizado: false, mensaje: 'Error al verificar correo' });
      return;
    }

    if (result.length === 0) {
      console.log('Correo no encontrado');
      res.send({ actualizado: false, mensaje: 'Correo no encontrado' });
      return;
    }

    // Si el correo existe, proceder a cambiar la clave
    const updateQuery = `UPDATE Admin SET Clave = '${Clave}' WHERE Correo = '${Correo}'`;
    db.query(updateQuery, (err, result) => {
      if (err) {
        console.error('Error al cambiar la clave:', err);
        res.status(500).send({ actualizado: false, mensaje: 'Error al cambiar la clave' });
        return;
      }

      if (result.affectedRows > 0) {
        console.log('Clave cambiada exitosamente');
        res.send({ actualizado: true, mensaje: 'Clave cambiada exitosamente' });
      } else {
        console.log('No se cambió la clave');
        res.send({ actualizado: false, mensaje: 'No se cambió la clave' });
      }
    });
  });
});
  
app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
