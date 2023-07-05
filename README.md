# NoteTaker

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Description

The NoteTaker application allows users to create notes by providing a title and content. The app also allows to to view a list of notes created saved using the JSON format. Notes can be posted, edited and deleted. Lastly, the app has been deployed to the cloud platform called Heroku which, under increased user and server traffic, should provide better performance. 

## Installation

First, search for repository on Github called NoteTaker. Then, on the top-right corner, click 'Code' and copy the link. Afterwards, go to VSCode and open the local terminal from the desired parent repostory where you desire to install the NoteTaker. Then, write 'git clone (paste link here)'. Finally, you'll notice the repository has been installed for your convenience. Before making any changes, make sure that the propper dependencies have been downloaded to prevent bugs or functionality issues. 

## Usage

First, right-click on the parent repository called NoteTaker and select "Open integrated terminal". Write 'node server.js' on the terminal. At this point, the port used is 3001. To test if data is being received by POST and GET, open Insomnia and hit the api from the desired port. When you hit POST, data should write and show on the GET hit.  Since the local porst will continue to be listened, go to the browser and type "localhost:3001", the app should deploy from the local host. Click "Get Started" and then the main board will open to post, edit and delete notes. Verify that the data sent from POST is saved as "Undefined". 

a. Go to the terminal and write "node server.js" to initialize application:
<br>![](./Images/Node%20server.png)<br>
b. You will be advised that the local host being listened to is the number 3001:
<br>![](./Images/Local%20host.png)<br>
c. On the Insomnia software, hit POST and and GET using the localhost's Port:
<br>![](./Images/Insomnia%20POST.png)<br>
<br>![](./Images/Insomnia%20GET.png)<br>
c. Click "Get Started":
<br>![](./Images/NoteTaker%20Get%20Started.png)<br>
d. Verify note has been added as "Undefined":
<br>![](./Images/Undefined%20note%20created.png)<br>

#### Repository Link: https://github.com/QuitoMusic/NoteTaker
#### Deployment Link: https://notestaker-ucf-f955702f5072.herokuapp.com/

## Contributing

If you would like to contribute as a developer, you can submit a pull request. Before starting any substantial work, it's recommended to open an issue to discuss your proposed changes with the lead developer.

## Resources

1. Express.js: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
2. JSON Introduction: https://www.w3schools.com/js/js_json_intro.asp
3. UUID: https://www.tutorialspoint.com/how-to-create-guid-uuid-in-javascript
4. Fetch API: https://www.w3schools.com/js/js_api_fetch.asp
5. Deploy Heroku: https://www.youtube.com/watch?v=DQk3zJlY-eE
6. NoteTaker App Explained: https://www.youtube.com/watch?v=wiFW3gQgfd8
7. POST: https://www.geeksforgeeks.org/how-to-post-json-data-to-server/
8. ANother Fetch API method: https://reqbin.com/code/javascript/wc3qbk0b/javascript-fetch-json-example 
9. Delete data JSON: https://stackoverflow.com/questions/29653430/how-to-send-delete-request-to-server-with-json-data-using-angularjs

## Tests

No tests were performed for this app.

## Questions

For any questions, please contact me:

- GitHub: [QuitoMusic](https://github.com/QuitoMusic)
- Email: f86gonzalez@outlook.com

## License

This project is licensed under the MIT License.
