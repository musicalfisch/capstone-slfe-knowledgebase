# SFLE Knowledgebase

This project is in collaboration with the ASU School of Sustainability and Leuphana University in Lueneburg, Germany. 

## Running the Project

**Get Started**

1. Clone or download this repository
2. `$ npm install` on the directory
3. `$ npm run client-install` on the directory

**Development Mode**

1. `$ npm run dev` || `MONGODB_URI=[mongodbURI] npm run server`
2. For testing on `localhost`, create a file named `.env` in the root directory and set the database credentials as below:
```
MONGODB_URI=[mongodbURI]
```
3. Browsersync can be accessed through `localhost:5000`

**Production Mode**
1. `git add .`
2. `git commit -am "new commit"`
3. `git push heroku master`

## License

The contents of this repository are covered under the [MIT License](https://github.com/panza8484/capstone-slfe-knowledgebase/blob/master/LICENSE).
