<?php
            //conexion a BBDD procedimental
            $miConexion =mysqli_connect("localhost", "root", "", "bbddcharros");

            //comprobar conexión
            if(!$miConexion){
                echo "La conexión ha fallado... <br>" . mysqli_error();
                exit();
            }

        $elNombre = $_GET['nombre'];
        $elMail = $_GET['email'];
        $elMensaje = $_GET['mensaje'];
        $laFecha = date("Y-m-d H:i:s");//la fecha se insertara automaticamente //rescatareamos la fecha del sistema

        $miConsulta = "INSERT INTO mensajes (Nombre, Email, Mensaje, Fecha) VALUES ('". $elNombre . "', '" . $elMail . "', '" . $elMensaje . "', '" . $laFecha . "')";
        $resultado = mysqli_query($miConexion, $miConsulta);

        //cerramos la conexión
        mysqli_close($miConexion);

        echo "<script>
                alert('Mensaje enviado exitosamente');
                window.location= 'contacto.html'
        </script>";

        // echo '<script language="javascript">alert("Mensaje enviado exitosamente");</script>';
        // window.location.href="contacto.html"

        // sleep(3);
        // header("Location:index.html");
        

        // echo "<br> El comentario se agrego con exito... <br><br>";
    ?>