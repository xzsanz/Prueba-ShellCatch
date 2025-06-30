async function obtenerUsuario() {
    try{
        const reponse =await fetch("https://randomuser.me/api/");
        const datos =await reponse.json();
        const usuario=datos.results[0];
        document.getElementById('foto_usuario').src=usuario.picture.large
        document.getElementById('nombre_usuario').texContent =`${usuario.name.first} ${usuario.name.last}`;
        document.getElementById('correo_usuario').textContent=usuario.email;
        document.getElementById('ubicacion_usuario').textContent=`${usuario.ubicacion.ciudad}, ${usuario.ubicacion.estado}`;
    }catch(error){
        alert("Ocurrio un error");
        console.error(error);
    }
}