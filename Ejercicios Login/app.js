let moduloUsuarios = require('./usuarios')
const process = require('process');

let comando = process.argv[2]

switch (comando){
    case 'registro':
        let name = process.argv[3];
        let mail = process.argv[4];
        let pass = process.argv[5];
        let checkMail = moduloUsuarios.check(mail);
        let checkItem = moduloUsuarios.check2(mail);

        if(checkItem == true){
            console.log('//////////////////////////////////////////////////////')
            console.log("ERROR LA DIRECCION DE MAIL DEBE CONTENER @");
            console.log('//////////////////////////////////////////////////////')
            break;
        }

        if(checkMail == false){
            console.log('//////////////////////////////////////////////////////')
            console.log("ERROR YA SE ENCUENTRA REGISTRADO EL USUARIO " + mail )
            console.log('//////////////////////////////////////////////////////')
            break;

        }
        
        if(typeof name == "undefined"||typeof mail == "undefined"||typeof pass == "undefined"){
            console.log('//////////////////////////////////////////////////////')
            console.log('//////DEBES INGRESAR LOS DATOS CORRESPONDIENTES///////')
            console.log('//////////////////////////////////////////////////////')
            break;
        }
        moduloUsuarios.agregarUsuario(name,mail,pass)
        console.log('/////////////////////////////////////////////////////////////')
        console.log('/////////HA REGISTRADO SU USUARIO DE MANERA EXITOSA!/////////')
        console.log('/////////////////////////////////////////////////////////////')
        break;
    
        case 'loguear':
            let mailLogin = process.argv[3];
            let passLogin = process.argv[4];
            let userLogin = moduloUsuarios.login(mailLogin,passLogin);

            if (userLogin == undefined) {
                console.log('///////////////////////////////////////////////')
                console.log('/////////ERROR CREDENCIALES INVÁLIDAS!/////////')
                console.log('///////////////////////////////////////////////')            
            }else{
                console.log('//////////////////////////////////////////////////////////') 
                console.log('///////////// BIENVENIDO ' + userLogin.name.toUpperCase() +'////////////')
                console.log('//////////////////////////////////////////////////////////') 
                break;
            }

            case 'eliminar':
                let mailElim = process.argv[3];
                let passElim = process.argv[4];
                let userElim = moduloUsuarios.eliminar(mailElim,passElim);

                if (userElim == false){
                    console.log('///////////////////////////////////////////////')
                    console.log('/////////ERROR CREDENCIALES INVÁLIDAS!/////////')
                    console.log('///////////////////////////////////////////////')    
                }else{
                    console.log('/////////////////////////////////////////////////')
                    console.log('/////////USUARIO ELIMINADO CORRECTAMENTE/////////')
                    console.log('/////////////////////////////////////////////////')    
                    break;

                }
                }
    
        
            


    