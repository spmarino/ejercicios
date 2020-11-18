const fs = require('fs');

let moduloUsuarios = {
    archivo : './usuarios.json',
    leerJSON : function(){
        let usuariosJson = fs.readFileSync(this.archivo,'utf-8');//función nativa para leer archivo JSON.
        return JSON.parse(usuariosJson)// convierte un json en arrays de objetos literales.
    },
    agregarUsuario : function(name,mail,pass){
        let userList = this.leerJSON();// La funcion crea un nuevo objeto literal que será agregado con la propiedad "push"
                                       // a la variable userList que posteriormente será guardada.
        let newUser = {
            name : name,
            mail : mail,
            pass : pass,
        }

        userList.push(newUser)
        this.guardarJSON(userList)


    },
    guardarJSON : function(info){// Convierte el array de objetos literales en JSON
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync(this.archivo,nuevoJSON,'utf-8')//Funcion nativa para escribir sobre un JSON
        
    },
    eliminar : function(mail, pass){
        let userList = this.leerJSON();
        let newList = [];
        let elim = false;

        userList.forEach(function(user){ //El forEach recorre el array e impone la condicion de que SI el user  
            if (user.mail == mail && user.pass == pass){ // y el mail están dentro del array cambia el valor del bool "elim",
                elim = true; // todos usuarios que NO correspondan a la condición se agregaran a un nuevo array 
            }else{ //"newList" con la propiedad "push", el nuevo array reemplazar al del archivo "JSON"
                newList.push(user); //De ésta manera se almacenan en el "newList" todos los usuarios que no han sido eliminados.
            }
        })
        this.guardarJSON(newList);
        return elim;
    },

    login : function (mail, pass){
        let userList = this.leerJSON();
        let userLogin ;

        userList.forEach(function(user){//el forEach recorre el array y si la condición se cumple retornará el valor del usuario 
            if(user.mail == mail && user.pass == pass){//sino será "undefined".
                userLogin = user
            }
            })
            return userLogin;
        },
        check : function (mail){
            let userList = this.leerJSON();
            let userCheck = true;
            userList.forEach(function(user){
                if(user.mail == mail){
                    userCheck=false;
                }
            })
            return userCheck;
        },
        check2 : function (mail){
            let userCheck2 = true;
            if(mail.includes("@")){
                userCheck2 = false;
            }
            return userCheck2;

        }
        }
module.exports = moduloUsuarios