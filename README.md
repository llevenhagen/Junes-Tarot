sources:

instafeed / magnific popup :
https://www.youtube.com/watch?v=wwXrP-RvoSM

## About June's Tarot
<p>
  This is a freelance project I took on to create a site for June's Tarot business. She wanted it to include all information regarding policies and rates as well as a way to contact her. She requested that I use Jekyll to build the site, and that I put special care into accessibility. 
</p>

## Wireframes
<div align="center">
  <kbd><img margin-right="10" src="https://user-images.githubusercontent.com/42528266/50569456-8f89e300-0d1a-11e9-8a5b-b85b550dbb0f.png" width="280"/></kbd><kbd><img src="https://user-images.githubusercontent.com/42528266/50569461-a2041c80-0d1a-11e9-8219-1b2cbc8ed87a.png" width="280"/></kbd><kbd><img src="https://user-images.githubusercontent.com/42528266/50569471-c7912600-0d1a-11e9-967b-bc516e459a3c.png" width="280"/></kbd>
</div>

## Technologies
- Jekyll 
- Bootstrap
- Instafeed JS plugin 
- HTML
- CSS
- Javascript / jQuery

## Approach Taken / New Techniques Learned 

### Jekyll
<p>
  June requested that I use Jekyll to build her site, and I was more than happy to learn and enact a new framework. It took some time trying to edit the default theme, 'minima' and having it completely rewrite any changes I made, before I realized that I could start a Jekyll project using a blank scaffold with the 'jekyll new --blank' command. After that, everything went a lot quicker. 
</p>

### Navigation
<p>
I thought about using jQuery for the dropdown navigation, but while doing some research I realized that I could make a purely CSS dropdown, and it was super simple and effective so I stuck with that. I did use jQuery to make the smooth scroll effect when you click on any of the dropdown links. The source code for that particular code block can be found here: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
  
</p>

### Instafeed / attempted Magnific code
<p>
June and I agreed that we wanted something engaging on the main page, so I did some research to see if we could get her instagram photos to load and change dynamically when she added photos to her account. Instafeed JS was just what I needed, and I used this tutorial video to make it happen: https://www.youtube.com/watch?v=wwXrP-RvoSM .
Instagram has implemented some changes to their API recently and the video isn't up to date, so I ended up having to do quite a bit of research to get it working. Unfortunately, I could not get the Magnific gallery code to work, but I left it in the project so that I can figure it out in the coming weeks or later when I have more knowledge. 
</p>

### Bootstrap 
<p> I used Bootstrap for the form on the 'Book a Reading' page, just to make the CSS easier. It worked like a charm. I realized after making the sticky bottom navigation for mobile that I could have used Bootstrap for that as well, since I already had the script embedded, but I'd already done it so oh well!
## Design decisions

#### 'Baby Powder' white with pops of color 
<p>
  White backgrounds are all the rage these days, but I like to use color to break up the sections, and one of June's notes was that she liked things pretty minimal but she had interest in possibly using some pastels. I started with all white sections and simple grey <hr> lines to separate them, but all that white space made things look too chaotic to me, so I used pastels to break the sections up, and we were both a lot happier with that. 
 </p>
 
#### 'Almost Black' is better than black
<p>
I recently read an article on linkedIn about how using 'almost black' ( rgb(51, 51, 51) ) is better than using black with a white background, because it is less jarring to the eyes. It's a small, simple change, but I find it helped. 
</p>

### Sticky bottom navigation for mobile
<p>I read another article about designing for mobile that pointed out how all good phone apps have their navigation at the bottom, because of the way people hold and use their phones. This was an epiphany to me and I felt like I should have realized that on my own! I will be implementing that strategy from now on. 
  
## Improvements for the Future

### Jekyll
<p>
To keep things 'simple', I used the same page layout for all the pages of the site. Unfortunately, this caused issues since in the _site folder, the main page's index.html wasn't inside a folder, while all the rest of the pages were inside folders of their own. This caused a problem each time I tried to pull information using a relative path, and in order to fix this, I ended up putting the pathways into the page's frontmatter. Looking back, I should have made the homepage separate and not used the same layout. When I have time, I will go back and make these changes.
 </p>
 
### Float issues
<p>
  Using the 'float' CSS technique has always been so easy in the past, but I had issues with the text not wrapping around the images I was floating, and I must have been on a roll or something because I didn't even think about looking into why, I just started adding <br>s into the text to make it wrap properly. I see now that that will cause inconvenience for anyone coding the site in the future, so I am planning on doing some research into this and hopefully fixing it before anyone else gets their hands on the code. 
  
### White space on right side of page 
<p>
 I had an issue pretty immediately where the site had a half inch white space on the right side, and I did a lot of research trying to figure this out. I added width of 100vw to the html and body, but the space remained. In the end, I wrapped the content in a div with id 'overflow-div' and gave it the attribute 'overflow: hidden'. This of course caused the page to be a bit off-center, and to fix this, I gave the entire page a negative margin (* {margin-left: -.4vw;} ) . I am 100% certain this was not the best technique to use, and hope to fix it later once I have learned more.
  
### Header paragraph tag, negative margin issues
<p>
 Somewhere along the way, the 'p' tag in the header started to appear much further down than it should have, so I ended up giving it a negative margin top to move it back up into the proper place. It looks great in Google chrome, Foxfire, and mobile, but unfortunately on Safari the negative margin makes it look way too high up. I am going to work on fixing that in the next few days.
 </p>
## Link
Join Speculook [here](https://github.com/emfoxily/speculook)
