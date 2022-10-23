# Assignment 3 One Page Site
## Julian Morrison - u3201251
### Project Description
Hello! My name is Julian Morrison and I'm a student enrolled in the Programming for Design (11055), Semester 2 2022 course at the **University of Canberra**. The final Assignment tasked us with creating a one page website using HTML, CSS and JAVA skills and techniques that we learnt throughout the semester. This project includes an _index.html_ file, _index.css_ file, _index.js_ file and an _assests_ folder filled with the different images and other assests that were used.

### Approach
I decided to do the topic of the Australian Gaming Industry and built a website outlining relevant information about where the industry is located throuhgout the country, jobs that are involved in the industry, games that were made in Australia and upcoming events within the industry. I used the webpage provided in the example as well as some independentally researched websites which I will provide sources for at the end of my _readme_.

### Website Layout
I want to implement the scroll as the main function that takes the user around the website. A simple scroll down or scroll up to take the user to each of the pages. My layout will follow something like this:
1. _Introduction Page_
    - Homebar
    - Logo/Title of page
    - Brief blurb on contents of website
    - Page counter/circles on left to indicate to user where they are
    - Scroll sign to show user how to get around
2. _Where the gaming industry is throughout Australia_
    - Interactive image that hihglights the major cities
3. _Jobs that are involved in the industry_
    - An array of job icons that when hovered over change colour/highlight with an information window appearing
4. _Games that are made in Australia_
    - Carousel of images that show the different games
    - User can click through each image
5. _Upcoming Events_
    - A mini calendar showing the next few events for the year
    - An email signup button

### Process
I created a layout of my website in an online diagram generator with the goal being a scroll based website that would take the user through five different pages. I would start the user on the home page and finish on the upcoming events page. 

I did research into the topic that would fill out the pages on my website. Quick flashy stats and short blurbs was what I was looking for in terms of content as I didn't want to bog myself down and wanted to get started on my coding as soon as possible.

#### Coding
I first started out by creating each of the indexes I'll be using **HTML**, **CSS**, **JAVA**. 

I set up my HTML file first by declaring _DOCTYPE_ and the language. I then created my header title and linked my **CSS** folder at the begining of my document and linked my **JAVA** folder one line before my /body close so everything else loads before my **JAVA** does. I also added a noscript function to let the user know they need **JAVA** enabled to operate my website.

I decided the first thing I wanted to tackle was my navigation bar that would let the user know which pages they could visit and add an extra mode of transport throughout the website. I did some reasearch into the basic setup of a top navigation bar and used a NAV element and created hyperlink anchors inside that would link to the sections on my site. I intially had all my sections seperated out using a _div_ element as the parent but was running into the issue of my navigation bar refusing to go those sections. Upon further research I was clearly using the wrong element and switched to _section_ element as my parent element to my subsequent child elements _h1_ and _p1_. The Navigation bar was definetly the hardest thing to grasp within my code and took me a few hours to figure out because I was stubborn in wanting to keep my _div_ element. The Java function to actually activate the click was also something I had to research and learn, unbeknownst to me at the time I was reading functions that were using JQuert which is something I didn't add to my project. The extra '$' signs and other weird symbols was really confusing at first and clearly unable to work in my code no matter how many times I tried over until I realised my intial mistake. I chose to fix the navigation bar in place at the top of the screen so the user can jump between pages easier instead of contiually scrolling back to the top to move around.

I wanted the Navigation bar to be my "heavy hitter" feature that most of my time would be spent on. 

I setup basic **CSS** styling guides to create my skeleton pages and to test the navigation bar to my anchor points. To cutdown my code I set up pages 1&3 to share the same properties and 2&4 to share the same properties. The only difference between the two pairs is the background colour. Also because I had to change to _section_ elements I had to change the **CSS** code to be _#industryLocation_ instead of _.industryLocation_ to match the _href_ code in my **HTML** file.

I then moved onto setting up my background image that would replace my previous **CSS** code for my homepage. I deleted the _background-color_ information and replaced it with the _background-image_ information that would seek out the _URL_ from the same file location to display the image. A few extra _background_ parameters were added to perfect the background.

Moving onto my _Locations around Australia_ page, I researched into how to make an interactive map that would have marker points of each of the major cities and would pop up information when hovered over. I didn't realise how difficult of a process that would be and couldn't understand how to make the map work without copying and pasting code. Because I couldn't fully figure out every section of code I decided to scrap the idea and opted just for an _background-image_ input with an already made inforgraphic from IGEA's snapshot into the Australian Gaming Industry. I created another _#industryLocation_ as to not disturb the previous established **CSS** styling. This section was purely filled with styling towards the _background-image_ which would be placed over the background created in the shared _#industryLocation_, _#australianGames_ styling.

The jobs page I originally planned to create a sort of hover overlay effect that would highlight whichever image the mouse was over and display the job title. I wanted it to be a fade in box that would print for example _Game Enginner_ within the center of the image. I went through several iterations of code with no luck on achieving what I wanted due to a lack of knowledge/understanding of what the tutorial I was looking at was asking me to do. I still wanted to make a sort of hover effect and opted to try a image hover that would create a shadow to achieve a sense of depth. So I grouped my image _.column_ and _.textBoxJOB_ together by increasing the _margin-bottom_ of my _.column_ by 20px so my text would have somewhere to be visible/centered on. I created some margin paramters to give each of my column's/images some seperation. Adding in the hover shadow effect was fairly straightforward once I fugred out I'm meant to keep it in my _.column_ **CSS** area. I was orginally coming up with extra variables that weren't working and were taking up unneccesary space. I shrunk the image width down until all four of my images fit onto the screen and manipulated the _margin-right_ variable to 20px to further add some space for my hover effect to appear in. I wanted more of the shadow to be prominent out the bottom of my columns so i offset-y and left the offset-x to 0px. A sharp increase in _blur-radius_ from _.column_ to _.column:hover_ is where most of the illusion comes from. Trying to format the images to all be one size has proven to be to much of a challenge for me unless I went to a third-party software to generate my images in all of the same size. 

Moving onto my _Games made in Australia_ page, I wanted to implement a image slideshow that the user could flick through using side arrows on the left and right of the image or skip ahead/back using circles below the image. The image would also have a caption on each slide outlining what the game was called and where in Australia it was made. I followed a guide on **_w3schools_** to learn how to build the slideshow. I started out writing out some **HTML** to input my images onto the screen, creating a slide counter, creating the circles/arrows _onClick_ function. This mainly just involved a lot of copying/pasting once I came up with my original input so everything matched up. I then moved onto the **CSS** portion starting with _.slideshow_ parameters and then my _.prev, .next_ display buttons. The _.next_ button got an extra styling ontop to put it on the right side of the image oppposite the _.prev_ button. Slidecounter and the circles were the last things needed to be styled before I began working on the JAVA code. This is the portion that was the trickiest for me and ultimately what I believe broke my code. I could understand most of the functions and their role in my code up until the _showSlides(n)_ function. I think my fault lied either in this function or in my variable names possibly. I switched the names of the variables from the example given so I could understand them easier. I've left the dead code at the bottom of each of my _index_ files. I've decided I'll just try to do the same shadow highlight effect for my games as I did on the _Jobs_ page. I changed my mind from doing a shadow highlight to try and attempt doing an overlay ontop of the image displaying info like the title of the game and where the game was made. I can only get it to work when one image is being displayed. I cannot figure out how to implement it using four different images without all of the overlay being shoved into one corner overlapping eachother. Only successful output is having one image which is Hollow Knight and its information. I know it has something to do with the image position being Relative. I cannot organise my images into four seperate quadrents unless I get rid of the relative position which breaks the overlay feature. I give up. 


My website is strong in its NAV bar feature and its css aspects in some features. I don't have enough Javascript though. The css Hover feature is just easier to set up than creating a mousex mousey location for javascript to trigger the event. 
