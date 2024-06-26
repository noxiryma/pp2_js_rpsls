# Project Portfolio 2 - Rock Paper Scissors Lizard Spock
## An interactive game based off the variation from the Big Bang Theory 
### PP2 - Amy Rixon - 30/05/2024

![I am responsive screenshot](assets/images/readme_images/air_rpsls.webp)



## **[Live Site](https://noxiryma.github.io/pp2_js_rpsls/)**
## **[Repository](https://github.com/noxiryma/pp2_js_rpsls)**

<a name="table-of-contents"></a>
## Table of contents

1. [ About ](#about)
2. [ Features ](#features)  
3. [ Features Left to Implement ](#left)  
4. [ Technology used ](#tech) 
5. [ Testing ](#testing)  
6. [ Deployment ](#deployment)
7. [ Bugs ](#bugs)  
8. [ Credits, Content and Resources](#credits)
9. [ Acknowledgements](#acknowledgements)  


<a name="about"></a>
## About 

This website is part of my second portfolio project for the Code Institute's Full Stack Software Development Diploma. The required main
technologies for this project were:

- HTML
- CSS
- Javascript

I chose to create a site using the Project Portfolio example 1 in which the brief was to build a Rock, Paper, Scissors, Lizard, Spock
game. The game was to involve a game of chance by the user being put up against a computer. 

The project requirements were to include: 

- Pattern matching functionality
- A limited number of tries before the game is over
- A score tracking system
- The ability to play against the computer


The design of the website was one that I wanted to kept quite simple so it was easy for the user to navigate. I also wanted to pay homage to The Big Bang Theory by creating a comic book style visual theme, a reference to the t-shirts that Sheldon was famous for wearing. I also looked to old style arcade games such as Space Invaders and Pac Man as influence on the styles of font used. 


### Colour Scheme 

![Color wheel screenshot](assets/images/readme_images/colour_scheme.webp)

The colour scheme I decided to focus on was a minimalist approach to the colours found in a majority of the images selected for this 
website. I focussed on the blue tone of Spock's smock to build the base of colour choice for this project rather than using clashing
colours. As this blue is an iconic colour that can't be changed but all the other colours can be chosen to compliment it. 


### Font 

The font family used for this site is 

### "Bungee", sans-serif 

![Bungee screenshot](assets/images/readme_images/bungee_font.webp)

with a weight of 400 the font is easy to read and prints the text on the page in all capital letters. Much like the old arcade games I was referencing for style inspiration but with this font it creates a smoother and modern appearance for the site.  

For the rest of the content outside of h1 to h6 and the buttons. I used a different font called 

### "Teko", sans-serif;

![Teko screenshot](assets/images/readme_images/teko_font.webp)

The font was chosen for it’s accessibility as well as it’s design. The text is clear to read with lowercase and uppercase whilst also sitting with a similar style to Bungee. This meant the rules of the game and the user and computer score are easier to read in a lighter font compared to Bungee. 

[ Return to table of contents ](#table-of-contents)


<a name="features"></a>
## FEATURES

### Home Page
The website has 4 different sections of the website presented to the user. Only the first 3 are visible as options upon landing on the home page. 

The first being the home page. This is the landing page for the site and displays the title of the game and the site at the top in clear bold writing. There are then 3 buttons displayed for the user to navigate. Home, The Rules and Start Game. 

![Home page](assets/images/readme_images/home_page.webp)

### Navigation Buttons
As the user hovers over the buttons with a mouse they change colour to highlight this is the one they are about to select. I styled the buttons in CSS and added rounded corners to them to create a pleasant and modern appearance rather than a harsh box. 

![Navigation buttons](assets/images/readme_images/hover_feature.webp)

I placed the navigation buttons in order from left to right as to how the user should navigate through them. First clicking on the rules button to learn the rules of the game. Then clicking on the start game button to start the game. 

On smaller screens with a min-width from 320px up to 1024px the navigation buttons flex direction were changed from row to column. 

![Navigation buttons mobile 320px](assets/images/readme_images/320px_home.webp)

For mobile phones from 320px to 480px I did consider adding in a burger menu but wanted to reduce the number of clicks on the website for the user to start playing the game. I felt that centering, increasing the width and adding a margin in between the buttons would still make the navigation menu easy for the user to use whilst keeping a neat and smooth appearance. 

![Navigation buttons mobile 480px](assets/images/readme_images/480px_home.webp)

The navigation buttons on a 480px screen up to 1024px still take up a large width of the screen but it has been reduced with the width value changed using CSS so that the buttons sit just within the you vs computer box underneath. This I also felt kept in with the style of a button clicking game. 


### The Rules 

Upon clicking on the rules button a modal appears on the webpage with an embedded video of Sheldon explaining the rules of the game to the user. I also included a text transcript of the rules underneath the video in case there are any hard of hearing users for the game as they would not be able to read the subtitles of the video due to it's size on smaller screens. I added a start from and end video so that the rest of the content in the video which is not relevant to the game distracts from the object of learning the rules only. 

![Modal](assets/images/readme_images/modal.webp)

On smaller screens the video is adapted in size to fit the width and height of the modal using styling in CSS. The modal also takes up most of the screen so it is easier for the user to read. 

![320px Modal](assets/images/readme_images/320px_modal.webp)

### Start Game 

The start game button then loads the game underneath the main box on the home page of the You vs Computer images. This was created using an onclick function in Javascript getting the elements of the home and game area by their ID and using style display. The user can navigate away from the game page by clicking the home button again.

![Start game](assets/images/readme_images/start_game.webp)

I decided to include this function after initially creating the game page as an external game.html file and looking at other example game websites I realised it was cleaner and would allow me to use more Javascript features to have everything on one page. I also wanted the home page to look clean and encourage the user to click the rules button before getting distracted and playing the game straight away. 

### Rounds 

When the game first loads the round number is set to 0 and the user is informed that best of 5 games wins. As the user plays the round numbers increase with a result text declaring if the user has won, lost or drawn with the computer. The user score and the computer score is also updated as the rounds are played. Both of these features were written in Javascript using the increment and identifying the start numbers as zero. 

![Rounds](assets/images/readme_images/round_result.webp)


### Game Buttons 

The game buttons are styled to match the You vs Computer images using CSS and are written as buttons in HTML. Event listeneres were added for each button with an onclick event being to start the game with the runGame function in Javascript. Each button also has a hover feature where the cursor changes to a pointer and the border changes from black to white. This was styled in CSS. 

![Game button hover feature](assets/images/readme_images/game_hover_feature.webp)

### End Game 

The game runs for a number of 5 rounds. The winner is declared using a result variable in Javascript which displays to the user one of three statements based on the result of the scores of the 5 rounds. To prevent the user from being able to play the game any further than 5 rounds, I used display and getElementById in Javascript in the endGame function. This removes the game buttons from the page. This also makes the game result and reset game button display clearly to the user encouraging them to reset the game and play again. 

![End Game Function](assets/images/readme_images/endGame_function.webp)

### Reset Game 

The reset game button sets all the values back to 0 on the screen and brings the game buttons back onto the page. It also resets the You vs Computer images back to their original, not letting the user get confused as if they have already selected an option. 

![Reset game](assets/images/readme_images/start_game.webp)

### User vs Computer images 

The You vs Computer section starts with an identifying image of each player. The You being a comic book style speech bubble and the Computer being the image of a vintage computer. The images were given the same styling of the buttons that the player selects below this section. 

The images display what each player has selected for each round. This is done in Javascript using playerImage.src and computerImage.src  in the runGame function. The images then reset back to the You and Computer images when the user hits the reset button.


### Mobile & Smaller Screen styling 

For the mobile styling the display of the buttons was organised in CSS using flex and margin to place the buttons in my desired layout. Giving the user enough space to not accidentally click the wrong button for their turn and to still have them readable for their images. Whilst I am happy with the design I do worry about how clearly it is to identify the selection because of how small the buttons are on the screen on 320px to 768px screens. 

![Mobile game styling 320px](assets/images/readme_images/320px_game.webp)

![Mobile game styling 768px](assets/images/readme_images/768px_game.webp)

[ Return to table of contents ](#table-of-contents)

<a name="left"></a>
## Features left to implement

- A hover over feature for the button selection with the title of the choice the user is about to make. This would be the word description of the choice eg. "rock" 
- A best of 3 games result so the user is encouraged to stay on the page longer
- For the video to end when clicked out of the modal rather than for it to keep playing in the background 
- For more than one player to be able to compete.

[ Return to table of contents ](#table-of-contents)

<a name="tech"></a>
### Technology used  

### HTML

Used to build the structure of the web page. 

### CSS 

To style the website across multiple media screens

### Javascript 

- Used to create functions to run the game, end the game and reset the game. 
- Onclick events used to display content of the page. 
- Event listeners used for user activity. 
- Incrementation used for increasing the user, computer and number of rounds played. 
- Random number and case used for computer selection. 
- Text content used to display the result, user, computer and round number. 


### [Googlefonts](https://fonts.google.com/)

For the selection and use of a font style for the website. 

### [Pixelied](https://pixelied.com/convert) 

Used to convert png files to webp files for images used. 

### [Leonardo.ai](https://leonardo.ai/) 

An AI image generation website 

### [JS Hint](https://jshint.com/) 

Used for validating Javascript. 

### W3 Validator 

Used for validating [HTML](https://validator.w3.org/#validate_by_input) and [CSS](https://jigsaw.w3.org/css-validator/)

[ Return to table of contents ](#table-of-contents)

<a name="testing"></a>
## Testing 

**Testing for links and form** 

| Test | Outcome |
|--|--|
| All navigation buttons are correct | Yes |
| All game buttons select correct user choice | Yes |
| All scores are recorded correctly (win = user + 1, lose = computer +1, draw = 0)| Yes |
| Rounds increment correctly and to correct total | Yes|
| Modal opens on button click and user has to play video | Yes |
| Modal closes when clicked on 'x' or anywhere on screen | Yes |
| Reset game button sets all values to 0 and correct images in You vs Computer section | Yes | 

**Testing for responsiveness**
| Test | Outcome |
|--|--|
|Home, The Rules and Start Game pages all display correctly on screens smaller than 768px | Yes |
|Home, The Rules and Start Game pages all display correctly on screens bigger than 768px | Yes |

## HTML Validation Testing 

No errors were presented upon final testing in [HTML validator](https://validator.w3.org/). 

![HTML validator](assets/images/readme_images/html_checker_good.webp)


## CSS Validation Testing 

No errors were presented upon final testing in [CSS Validator](https://jigsaw.w3.org/css-validator/)

![CSS validator](assets/images/readme_images/css_validator_good.webp)

## Javascript Validation Testing 

JS Validator display two unused variables but these are used in html only. 
![JS unused variables](assets/images/readme_images/jsvalidator2.webp)

Otherwise no errors were presented upon final testing.
![Javascript validator](assets/images/readme_images/jsvalidation.webp)


## Google Lighthouse Testing 

### The results of Google Lighthouse Test on Mobile

![Google LightHouse Mobile](assets/images/readme_images/lighthousetesting_mobile.webp)

### The results of Google Lighthouse Test on Desktop 

![Google Lighthouse Desktop](assets/images/readme_images/lighthousetesting_desktop.webp)

[ Return to table of contents ](#table-of-contents)

<a name="deployment"></a>
## Deployment 

I deployed the project to GitHub pages using the following steps:

+ In the GitHub repository, navigate to the Settings tab
+ From the source section drop-down menu, select the Master Branch
+ Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here: [Live Site](https://noxiryma.github.io/pp2_js_rpsls/)

[ Return to table of contents ](#table-of-contents)

<a name="bugs"></a>
## Bugs  

| Bug | Fixed |
|--|--|
| On clicking the rock button round incremented by two. Removed onclick in html.| Yes |
| Rounds do not total to 5. Changed total rounds value to 6 in JS | Yes |
| Rounds continue to increment past 5. Removed game button area in endGame function to prevent user from conitnuing to play | Yes |
| You vs Computer images did not reset to original on resetGame function | Yes |
| Upon HTML validation, error for frame border on iframe being obsolete | Yes |
| Upon CSS validation, error for font-optical-sizing doesn't exist | Yes |
| When inspecting using debugger webmanifest was not being retrieved but not needed so removed from index.html | Yes |

[ Return to table of contents ](#table-of-contents)

<a name="credits"></a>
## Credits, Content & Resources 

### [w3 schools](https://www.w3schools.com/)

Used for general tips and instructions on writing HTML, CSS and Javascript. 

### [W3 Schools Modal](https://www.w3schools.com/howto/howto_css_modals.asp)

The code in the above link was used to create the modal for the website. 

### [Code Institute](https://codeinstitute.net/full-stack-software-development-diploma/?utm_term=code%20institute&utm_campaign=CI%2B-%2BUK%2B-%2BSearch%2B-%2BBrand&utm_source=adwords&utm_medium=ppc&hsa_acc=8983321581&hsa_cam=1578649861&hsa_grp=62188641240&hsa_ad=635720257674&hsa_src=g&hsa_tgt=kwd-319867646331&hsa_kw=code%20institute&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=EAIaIQobChMIysPPieLJhQMVl5VQBh2ZVQSEEAAYASAAEgJOn_D_BwE&nab=1&utm_referrer=https%3A%2F%2Fwww.google.com%2F) 

Project created through education for Project Portfolio 2 of the Full Stack Software Developer Diploma

### [Favicon](https://favicon.io/favicon-converter/)

The converter was used to create the icon for the website. 

### [Google Fonts](https://fonts.google.com/specimen/Bungee?query=bungee)

Font selected for website was taken from Google Fonts website. 

### [Build Javascript Rock Paper Scissors in 18 minutes by Bro Code](https://youtu.be/3uKdQx-SZ5A?si=7H8yBzYwciv1WEWB)

This video helped me in understanding and using different features in Javascript to create the game for this website. 

### [3 Ways to Code Rock Paper Scissors in Javascript by Code with Ania Kubow](https://youtu.be/RwFeg0cEZvQ?si=7CusF8M80FisVWvv)

This video helped me in understanding and using different features in Javascript to create the game for this website.

### [How to Build Rock Paper Scissors in Javascript by Robert Johns](https://hackr.io/blog/how-to-build-rock-paper-scissors-in-javascript)

This article was the main inspiration for the creation of the code for this game. 


## Images

All images apart from the icon were generated on Leaonardo.ai website.

[Rock](https://cdn.leonardo.ai/users/2eb0786a-5885-457c-b99c-c3bbc5a3b1a1/generations/a9f90f90-fd8a-4555-8564-479388dea542/Default_rock_illustration_0.jpg)

[Paper](https://cdn.leonardo.ai/users/2eb0786a-5885-457c-b99c-c3bbc5a3b1a1/generations/3dded6c8-8910-4f6c-936a-a66f8b2e1b87/Default_origami_bird_illustration_2.jpg)

[Scissors](https://cdn.leonardo.ai/users/2eb0786a-5885-457c-b99c-c3bbc5a3b1a1/generations/29452663-eb0b-4b30-9223-f51729b1fdb5/Default_scissors_illustration_3.jpg)

[Lizard](https://cdn.leonardo.ai/users/2eb0786a-5885-457c-b99c-c3bbc5a3b1a1/generations/c71c9ecb-96c4-403d-9ec4-3d1770b44d8e/Default_lizard_illustration_1.jpg)

[Spock](https://cdn.leonardo.ai/users/2eb0786a-5885-457c-b99c-c3bbc5a3b1a1/generations/bb25e000-d5ff-451e-951e-93e298a650db/Default_spock_illustration_0.jpg)

[Computer](https://cdn.leonardo.ai/users/2eb0786a-5885-457c-b99c-c3bbc5a3b1a1/generations/d07e31c2-a993-4ea4-a795-867ba1fbf946/Default_computer_comic_book_1.jpg)

[You](https://cdn.leonardo.ai/users/2eb0786a-5885-457c-b99c-c3bbc5a3b1a1/generations/921bbcdd-f087-4a58-a389-d9d76b1119ef/Default_you_comic_book_speech_bubble_0.jpg)

## Icon 

[Favicon](https://favicon.io/favicon-converter/) converter was used to transform the below icon into a usable icon for the website. 

[Hand Icon](https://www.flaticon.com/free-icon/scissors_9534501?term=rock+paper+scissors&page=1&position=2&origin=search&related_id=9534501)


[ Return to table of contents ](#table-of-contents)

<a name="acknowledgements"></a>
## Acknowledgements 

### Alan Bushell 

Appointed as my mentor for my diploma. Alan gave me valuable feedback and answered every question that I had whilst giving encouragement and introduced me to a number of resources that I will use throughout my software career.