# New York Times Clone


![HTML](https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NODEJS](https://img.shields.io/badge/NODE_JS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![REACT](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)



Link to the project https://nytclonereactvite.netlify.app/

## About the Project

The project is a clone of the New York Times homepage created to learn more about React and APIs.

The homepage contains news fetched using their public API's. 

On top of the page, there is also a Weather Box, created using https://www.weatherapi.com/

There are 3 sections of news:

- Main News are fetched from their homepage API and grouped if they share at least 2 or more topics.

- Secondary News are instead fetched from specific topics, like science and sports.

- Side News are fetched like secondary news, but located into the sidebar. These include opinion and real-estate news.



### Requirements

- NodeJs

### <img src="https://github.com/Nicolas-Tietz/JavascriptAdvancedProject/assets/120263952/e639caa0-e35e-49ea-b5ae-ca2d189c87f7" width="25"> Libraries

- Axios
- Dotenv




## How to Clone and Use




Clone the Repository

```
git clone https://github.com/Nicolas-Tietz/NewYorkTimesClone.git
```

Install npm in the project folder 

```
npm install
```

Once done, to run the project use

```
npm run dev
```

You also need to add your .env file.

It should contain this informations:

- VITE_API_KEY = 'key' (NewYorkTimes API Key)

- VITE_API_SECRET = 'secret' (NewYorkTimes API Secret)

- VITE_API_WEATHER_KEY = 'key' (Weather API key from https://www.weatherapi.com/)

The Weather Key is contained into the app.jsx for the project correction if needed.

As you can see in the screenshots below, the page layout changes based on the device used.

## Screenshots

### Desktop view

<img src="https://github.com/Nicolas-Tietz/NewYorkTimesClone/assets/120263952/5d31fe6b-0d10-4fc0-8141-ce8e31e3926c" width='60%'>

### Tablet view

<img src="https://github.com/Nicolas-Tietz/NewYorkTimesClone/assets/120263952/f8df9c42-3404-45ae-a5e7-e471ce159612" width='60%'>

### Mobile view

<img src="https://github.com/Nicolas-Tietz/NewYorkTimesClone/assets/120263952/233792ef-e336-4a64-b0ca-0f4dc24dbd42" width='40%'>





## <img src="https://github.com/Nicolas-Tietz/JavascriptAdvancedProject/assets/120263952/1a97ff89-6048-4f5c-85ac-df77f18c8578" width='25px'> Contact

From <a href="https://nicolas-tietz.github.io/contact-me/">Portfolio Website</a>

or Email : nicolastietz48@gmail.com

