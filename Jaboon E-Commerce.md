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

## Tech

Dillinger uses a number of open source projects to work properly:


- [Ace Editor] - awesome web-based text editor
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system
- [Breakdance](https://breakdance.github.io/breakdance/) - HTML
to Markdown converter
- [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

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




## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


