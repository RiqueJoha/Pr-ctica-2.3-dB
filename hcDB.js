import { createPool } from "mysql2/promise";

const pool= createPool({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Ri35317848",
    database:"HC"
});

/* let resultado = await pool.query("SHOW TABLES;");

console.log(resultado); */

async function agregarNacimiento(sexo, nombre,apellido, peso) {
    let resultadoCrear = await pool.query(`INSERT INTO nacimientos (sexo, nombre,apellido, peso)VALUE(?,?,?,?);`,[sexo, nombre,apellido,peso]);

    console.log(resultadoCrear);

}

async function obtenerNacimientos() {
    let resultadoObtenerInfo = await pool.query("SELECT * FROM nacimientos");
    console.table(resultadoObtenerInfo[0]);
}

async function obtenerUnDato(id_padron) {
    let resultadObtenerDato = await pool.query(`SELECT * FROM nacimientos WHERE id_padron= ?;`,[id_padron]);
    console.table(resultadObtenerDato[0]);
}


async function actualizarPeso(id_padron, peso) {
    let resultadoActualizar = await pool.query(`UPDATE nacimientos SET peso=? WHERE id_padron= ?;`,[peso,id_padron]);
    console.log(resultadoActualizar);
}

async function eliminarNacimiento(id_padron) {
    let resultadoEliminar = await pool.query(`DELETE FROM nacimientos where id_padron= ?;`,[id_padron]);
    console.log(resultadoEliminar);
}

await eliminarNacimiento(4);

/* await actualizarPeso(1,2.1); */
await actualizarPeso(3,3.4);

await obtenerUnDato(2);


await obtenerNacimientos();

/* await agregarNacimiento("Masculino","Daniel","Peralta",3.1); */
/* await agregarNacimiento("Masculino","Noah","Riquelme",3);
await agregarNacimiento("Femenina","Kiara","Perez",2.6); */

pool.end();