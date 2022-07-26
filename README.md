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


# Dependencies 

- [React Dom Router](https://v5.reactrouter.com/web/guides/quick-start)
  used for all the route managment of the proyect
- [FormSubmit](https://formsubmit.co)
  used for managing the back-end part of the form for email contacts.
- [SweetAlerts 2](https://sweetalert2.github.io/recipe-gallery/sweetalert2-react.html)
  The website uses SweetAlerts for giving confirmation on the order process and giving some information on plain sight.
   Sweet alerts allows the use of alerts while being user friendly and mantaining the user experiene enjoyable.
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

In the header can be found the different routes to navigate trought the webapp, filtering by categories and if the user clicks on the name of the website can go back to unfiltered resulst; also on the header it can be found the Nosotros section, where you can lear about the company and the standars and values and theres also a contact form to comunicate with the brand.
At the end of the header you can also find a dark mode switch to enable or disable dark mode.

![image](https://user-images.githubusercontent.com/62154295/180803211-0f5617ec-d406-43f7-8975-55980a5a2ad9.png)



The user when entering the website will see the main view, where you can find a display of all the products of the brand, with easy access and visualization.

![image](https://user-images.githubusercontent.com/62154295/180802554-0954f9ce-953a-41ed-8917-ff36b70e8e6a.png)



When clicking on the item that we want to see, it will take us to a detail view, where it displays more information about the item, a brief description and a menu for chossing the ammount that we desire of that item.

![image](https://user-images.githubusercontent.com/62154295/180802783-2d1aa6e8-d7e6-4812-84ee-f37344f31af9.png)




Once selected the ammount that the user wants, it can click on the continue buying button or go to cart.

![image](https://user-images.githubusercontent.com/62154295/180803527-dc3b45de-4440-4c2d-ba55-c70d8e1417a8.png)



Depending on the action, we can continue buying on the store, or if we click continue buying and we want to go back to cart, we can click on the car that apears on the header once we add something to the cart

![image](https://user-images.githubusercontent.com/62154295/180804257-2c1db634-2ff3-4d52-9a3b-9d4db9d782e0.png)



Once in the cart we can see a list of the products that we added to the cart, followed by the total price and a form to fill with the users data.
![image](https://user-images.githubusercontent.com/62154295/180804481-c5184dcd-a3a3-48f9-abad-caeb8449f3e1.png)



After finishing filling the data and clicking on send, it will register the order and take the user to a view where the user can see a thanks for the buy and also the order id to be able to track it, talk with support and be sure that the order was approved.

![image](https://user-images.githubusercontent.com/62154295/180804755-abd71bac-f3d2-44e5-b61a-9d201f36d185.png)



If the user wants to see the detail of the order, it can click on the button an it will see a display of all the items , ammount and price, followed by the users data given on the form and a go back button.

![image](https://user-images.githubusercontent.com/62154295/180806911-40b8e414-d926-4e79-b9a4-638a7f70029f.png)



If for any reason the user goes to a unknown route if will find a notFound route where it will guide the user to go back to a know route

![image](https://user-images.githubusercontent.com/62154295/180807191-2cdad4a0-4aac-40e2-a050-b148672ca18c.png)


## Video Showing the website 

https://user-images.githubusercontent.com/62154295/180832007-15555c0a-f142-487d-ad73-f6691c40c153.mp4







