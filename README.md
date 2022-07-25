# Jaboon E-Commerce  

Jaboon is a web-application based in ReactJs and Firebase, with some web 3D features made with Spline
The objective is a web-app totally functional, fast and user frendly with across-device capabilities



## Links
- [Github Link](https://github.com/MateoBarbato/Jabon-Barbato) 👀
    Download the files ! 
    Direct Link : https://github.com/MateoBarbato/Jabon-Barbato 
- [Link del Proyecto](https://jabon-barbato.vercel.app)  👀
  Visit the webapp of the proyect already deployed and feel free to go trought all the functionalities.



## Features

- E-shop based on ReactJs
- Data base implemented with Firebase
- 3D created and implemented with Spline


## Downloading Files

Jaboon requires [React](https://reactjs.org) v8^+ to run.

First Download the repository from Github link or
Clone the repository on your desired folder
```sh
git clone https://github.com/MateoBarbato/Jabon-Barbato
```

## Install the dependencies and start the server.
First check that you are in the proyect folder with ```.ls``` on the console, then do this:

```sh
npm install --save
npm start
```

Once you do this it will automatically open a window in your default browser with the proyect in it.

By default it runs in ```localhost:4000``` but you can change it depending of your preference following this steps  or reading this [tutorial](https://devdojo.com/howtoubuntu/how-to-change-reactjs-localhost-port):

- First look for the package.json file in your proyect folder

- Once located search the script property of script of the json file
    https://i.postimg.cc/3JNXZRGb/tutolocalhost.png

- Depending on what launching method you are using you can add ```set PORT==DESIREDPORTNUMBER``` followed by ```&&```
and then the react launching method
>Example : `set PORT==3002 && react-scripts start`
- Also if you check the console when you run the proyect it will dispay 2 messages, one saying that is running on localhost:PORT and a second message saying that is running on your network saying [YOUR IP ADDRES:PORT] something like this:
>Example :  `196.69.1.1:3000`

## Navigation
En el header se encuentran las difrentes rutas para filtrar por categorias, o clickeando en el nombre de la pagina se vuelve a la muestra sin filtrar; tambien en el heder esta el acceso a nosotros, donde se habla un poco de los valores e ideas de la marca y donde hay un metodo para establecer contacto. Al final del header tambien hay un boton para habilitar o deshabilitar el modo oscuro en la pagina.
![image](https://user-images.githubusercontent.com/62154295/180803211-0f5617ec-d406-43f7-8975-55980a5a2ad9.png)


El usuario al entrar en la pagina se encontrara con la vista principal de la misma, donde se muestran todos los productos de la pagina para un facil acceso y visualizacion. 
![image](https://user-images.githubusercontent.com/62154295/180802554-0954f9ce-953a-41ed-8917-ff36b70e8e6a.png)

Al hacer click en el item que deseemos ver nos llevara a una pagina de detalle, donde podremos ver informacion mas detallada del producto, junto a un menu para poder elegir cantidades y agregar al carrito.
![image](https://user-images.githubusercontent.com/62154295/180802783-2d1aa6e8-d7e6-4812-84ee-f37344f31af9.png)
Una vez seleccionada la cantidad se le dara la opcion de decidir si continuar comprando o si ir al carrito
![image](https://user-images.githubusercontent.com/62154295/180803527-dc3b45de-4440-4c2d-ba55-c70d8e1417a8.png)
Dependiendo de lo que hagamos podemos, seguir comprando y volver al carrito en el proximo producto como tambien clickeando en el Carrito del header que aparece ni bien tengamos algun producto en el carrito.
![image](https://user-images.githubusercontent.com/62154295/180804257-2c1db634-2ff3-4d52-9a3b-9d4db9d782e0.png)

Una vez en el carrito podremos ver una lista de todos los productos seleccionados, junto a el total y un formulario pidiendo los datos del comprador
![image](https://user-images.githubusercontent.com/62154295/180804481-c5184dcd-a3a3-48f9-abad-caeb8449f3e1.png)

Al llenar los datos y clickear en enviar se registrara la orden y se llevara al usuario a una pagina de agradecimiento, ofreciendole la opcion de volver al inicio o de ver el detalle de la orden 
![image](https://user-images.githubusercontent.com/62154295/180804755-abd71bac-f3d2-44e5-b61a-9d201f36d185.png)

Si el usuario quiere ver el detalle de orden al clickear se le listara cada item junto a los datos proporcionados para poder verificar todo
![image](https://user-images.githubusercontent.com/62154295/180806911-40b8e414-d926-4e79-b9a4-638a7f70029f.png)

Si por algun motivo el usuario encuentra el problema de navegar a una ruta desconocida encontrara una pagina de not found y se le guiara a volver al inicio.
![image](https://user-images.githubusercontent.com/62154295/180807191-2cdad4a0-4aac-40e2-a050-b148672ca18c.png)









