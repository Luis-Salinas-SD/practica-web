var contenido = document.querySelector('#contenido');
function mostrar() {
    fetch('https://developers.syscom.mx/api/v1/productos?categoria=22', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZlZTkwYjc3NmNkNTU5OTU4ZGI2MjhjODlhOGI3Nzg2YzU2NTQzYTc1NWNhMjI0NzdhZWIzOTA3ZDkyN2FjMmNhYTA5MzY4NjcyZDliMDllIn0.eyJhdWQiOiJQMDlSaFdGQVAwM2U5YkNYNUgxWU1KZ3FWalZKOUhDdSIsImp0aSI6IjZlZTkwYjc3NmNkNTU5OTU4ZGI2MjhjODlhOGI3Nzg2YzU2NTQzYTc1NWNhMjI0NzdhZWIzOTA3ZDkyN2FjMmNhYTA5MzY4NjcyZDliMDllIiwiaWF0IjoxNTk3MjUyODQ1LCJuYmYiOjE1OTcyNTI4NDUsImV4cCI6MTYyODc4ODg0NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.AT9qpbdpwJz86mnfedPX2T6IRO6e9DeF9oswVnOzvk1GJX0NKzN0SHkSJ1WrCJiAAqaH9ArUs45uzp3g_AgWiMbc_Gieiaq1fwlko90Fzm4693Sii23yr3gcO7xUISeRP1PXncdRX4MTwEb-q1C4QI0FVcVn4iD_Mbdoj9sVvSi6tK2JkFOpJToLsTlozrU6u78PTHfPdznBY2_ArtPMpKvupmPmGPREPz2jWxPZ8HtDSux4QFKcKckcHMh0G4ibIFjkQUBwwgXYb7gD3dELlsuNrHRyPqjTgXpejnHzYP71_jEGO7-2PpK6YKoNK9PVmdQBUgWM5LYtMYqx_hfhwb4ZKL9LlNf3Jtoa5kGlDhfH5-slFyiLZ65-cPEocktXuPucHPZNERd8WTpVLIzIhhGP9odz0sb_ta5U6y8XIsuvwi7GvubdewciL0pkt3z607AHO0aLe3TjQhAWtZS69ry5IDELuhUKA8nDIFNhVg_MFs_jtMb9D8Aga0X9dy0IKh_5iGjuxOT5edLxzor2002-ybOAec7up57UAAxVu-fo-QpjsnLAUS2GrSsxQm8SeKYb-hDzNIfymF9Brp-znhq2j-SQvZ0es1jNx4ePQOwda0fiRbqFtbfhwoyfcPzTg8yMViFMlAHhGT4VU62a4YrMbK19d9L-WiTf_6t9wg0'
        }
    })//fetch
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data.productos[0]);
            var l = contenido.innerHTML = `
            <img src="${data.productos[0].img_portada}">
            <p>ID: ${data.productos[0].producto_id}</p>
            <p>Nombre: ${data.productos[0].titulo}</p>
            <p>Modelo: ${data.productos[0].modelo}</p>
            <p>Exsistencias: ${data.productos[0].total_existencia}</p>
            <p>Marca: ${data.productos[0].marca}</p>
            `
        })
}//function mostrar