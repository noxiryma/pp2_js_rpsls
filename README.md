# Project Portfolio 2 - Rock Paper Scissors Lizard Spock
## An interactive game based off the variation from the Big Bang Theory 
### PP2 - Amy Rixon - 28/05/2024

![I am responsive screenshot](assets/images/readme_images/air_rpsls.webp)



## **[Live Site](https://noxiryma.github.io/pp2_js_rpsls/)**
## **[Repository](https://github.com/noxiryma/pp2_js_rpsls)**


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

This website is part of my second portfolio project for the Code Institute's Full Stack Software Developer Diploma. The required main
technologies for this project were:

HTML
CSS 
and Javascript. 

I chose to create a site using the Project Portfolio example 1 in which the brief was to build a Rock, Paper, Scissors, Lizard, Spock
game. The game was to involve a game of chance by the user being put up against a computer. Having been forced to watch Star Trek as 
a child I thought it best to make a project my Mum would be proud of as a trekky.

The design of the website was one that I wanted to kept quite simple so it was easy for the user to navigate. I also wanted to pay homage to The Big Bang Theory by creating a comic book style presentation a reference to the t-shirts that Sheldon was famous for wearing. I also looked to old style arcade games such as Space Invaders and Pac Man as influence on the styles of font used. 


### Colour Scheme 

![Color wheel screenshot](assets/images/readme_images/colour_scheme.webp)

The colour scheme I decided to focus on was a minimalist approach to the colours found in a majority of the images selected for this 
website. I focussed on the blue tone of Spock's smock to build the base of colour choice for this project rather than using clashing
colours. 


### Font 

The font family used for this site is 

"Montserrat Alternates", sans-serif; 

![Montserrat Alternates 400 screenshot](assets/images/readme-images/montserrat-400.jpg)

with a weight of 400 for the main content and a weight of 700 for the title header. Used to imply a logo for the site and give a clear heading.

![Montserrat Alternates 700 screenshot](assets/images/readme-images/montserrat-700.jpg)


The font was chosen for it’s accessibility as well as it’s design. The text is clear to read and has a more rounded style creating a smooth and relaxing experience for the user whilst they read and learn new information on the subject of meditation. 

<a name="features"></a>
## FEATURES

### Home Page
The website has 4 different pages presented to the user. 

The first being the home page. This is the landing page for the site and displays the title of the game and the site at the top in clear bold writing. There are then 3 buttons displayed for the user to navigate. Home, The Rules and Start Game. 

![Home page](assets/images/readme_images/home_page.webp)

### Navigation Buttons
As the user hovers over the buttons with a mouse they change colour to highlight this is the one they are about to select. I styled the buttons in CSS and added rounded corners to them to create a pleasant and modern appearance rather than a harsh box. 

![Navigation buttons]()

I placed the navigation buttons in order from left to right as to how the user should navigate through them. First clicking on the rules button to learn the rules of the game. Then clicking on the start game function to start the game. 

### The Rules 

Upon clicking on the rules button a modal appears on the webpage with an embedded video of Sheldon explaining the rules of the game to the user. I also included a text transcript of the rules underneath the video in case there are any hard of hearing users for the game you would not be able to read the subtitles of the video due to it's size on smaller screens. I added a start from and end video so that the rest of the content in the video which is not relevant to the game distracts from the object of learning the rules only. 

![Modal](assets/images/readme_images/modal.webp)

On smaller screens the video is adapted in size to fit the width and height of the modal using styling in CSS. 

### Start Game 

The start game button then loads the game underneath the main box on the home page of the You vs Computer images. This was created using an onclick function in Javascript getting the elements of the home and game area by their ID and using the display function. The user can navigate away from the game page by clicking the home button again.

![Start game](assets/images/readme_images/start_game.webp)

I decided to include this function after initially creating the game page as an external game.html file and looking other example game websites I realised it was cleaner and would allow me to use more Javascript features to have everything on one page. I also wanted the home page to look clean and not messy with the game underneath. 

### Rounds 

When the game first loads the round number is set to 0 and the user is informed that best of 5 games wins. As the user plays the round numbers increase with a result text declaring if the user has won, lost or drawn with the computer. The user score and the computer score is also updated as the rounds are played. Both of these features were written in Javascript using the increment and identifying the start numbers as zero. 

![Rounds](assets/images/readme_images/round_result.webp)

### User vs Computer images 






## Flex 


<a name="left"></a>
## Features left to implement


<a name="tech"></a>
### Technology used  

### HTML

Used to build the structure of the web pages 

### CSS 

To style the website 

### Fontawesome 

For the social media icons for the footer 

### Googlefonts

For the selection and use of a font style for the website 



<a name="testing"></a>
## Testing 

**Testing for links and form** 

| Test | Outcome |
|--|--|
| All internal links lead to the correct page | Yes |

**Testing for responsiveness**
| Test | Outcome |
|--|--|
|Home and Start Game pages all display correctly on screens smaller than 768px | Yes |
|Home and Start Game pages all display correctly on screens bigger than 768px | Yes |

## HTML Validation Testing 

No errors were presented upon final testing in [HTML validator](https://validator.w3.org/). 


## CSS Validation Testing 

No errors were presented upon final testing in [CSS Validator](https://jigsaw.w3.org/css-validator/)


## Google Lighthouse Testing 



<a name="deployment"></a>
## Deployment 

I deployed the project to GitHub pages using the following steps:

+ In the GitHub repository, navigate to the Settings tab
+ From the source section drop-down menu, select the Master Branch
+ Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here: 

<a name="bugs"></a>
## Bugs  


<a name="credits"></a>
## Credits, Content & Resources 

### [w3 schools](https://www.w3schools.com/)

Used for general tips and instructions on writing HTML, CSS and Javascript

### [Code Institute](https://codeinstitute.net/full-stack-software-development-diploma/?utm_term=code%20institute&utm_campaign=CI%2B-%2BUK%2B-%2BSearch%2B-%2BBrand&utm_source=adwords&utm_medium=ppc&hsa_acc=8983321581&hsa_cam=1578649861&hsa_grp=62188641240&hsa_ad=635720257674&hsa_src=g&hsa_tgt=kwd-319867646331&hsa_kw=code%20institute&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=EAIaIQobChMIysPPieLJhQMVl5VQBh2ZVQSEEAAYASAAEgJOn_D_BwE&nab=1&utm_referrer=https%3A%2F%2Fwww.google.com%2F) 

### [Font Awesome](https://fontawesome.com/)

Icons for the footer were taken from the Font Awesome website 

### [Google Fonts](https://fonts.google.com/specimen/Quicksand?preview.text=So%20Hum)

Font selected for website was taken from Google Fonts website 


## Images

![Rock]
(https://app.leonardo.ai/5f38768f-0369-4894-bb0e-0c9f91caa92a)

![Paper]
(https://app.leonardo.ai/4252eae4-2a3b-4c7c-9dea-582b816a83b3)

![Scissors]
(https://app.leonardo.ai/4b8b6055-9eb1-4ad4-9b75-fa170f9b9009)

![Lizard]
(https://app.leonardo.ai/9f82b425-a36a-40e1-839b-fe74a4a74c47)

![Spock] 
(https://app.leonardo.ai/f9e61247-c030-4924-9bcd-9ada06b23cfa)

![Computer]
(https://app.leonardo.ai/781d65f6-20a9-4da1-aa39-c1f2ee0e50ad)

![You]
(https://app.leonardo.ai/9bfbcd02-8e29-4079-a0a9-e9fa761ab4c0)

## Icon 

![Favicon](https://favicon.io/favicon-converter/) converter was used to transform the below icon into a usable icon for the website. 

![Hand Icon](https://www.flaticon.com/free-icon/scissors_9534501?term=rock+paper+scissors&page=1&position=2&origin=search&related_id=9534501)

<a name="acknowledgements"></a>
## Acknowledgements 

### Alan Bushell 

