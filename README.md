<div align="center">
    <img src="https://github.com/PiotrSierant/portfolioWeb/blob/master/public/images/logo_darkblue.svg" alt="Logo" width="80" height="80">
    
<h3 align="center">JSONtoHTMLparser</h3>

</div>

## ABOUT THE EXERCISE

### My first CLI 
JSON is an HTML parser. The tool allows you to create a simple website from data that is stored in JSON files. Fetches data from a file and populates an HTML list/table with it.

### fileWatcher
fileWatcher (in the watch.js file), which listens for the change event and copies all HTML files generated by you to a temporary folder, when we close the watcher application, all files will be deleted.

## BUILT WITH

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)


## INSTALLATION

1. Clone the repo
   ```sh
   git clone https://github.com/PiotrSierant/JSONtoHTMLparser.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Scripts
   ```sh
    "table": "nodemon index.js table", -> node index.js table
    "ol-list": "nodemon index.js list -lt ol", -> node index.js ol-list
    "ul-list": "nodemon index.js list -lt ul" -> node index.js ul-list

    watch -> node watch.js
   ```