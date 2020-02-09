# Development Thoughts

Originally I was going to use material UI or some other form of component library for this. Instead this being a smaller
app I figured I would build my own. I feel that it will give me the chance to accomplish a few of the required tasks 
efficiently by using functional components to be passed to the class components and to pass props back down.

I realize that I am building all of this on master. I would normally create a branch for develop, a testing branch, and then a branch for each page and feature.

I spent most of my time building the event page because it has a majority of the data. I could have easily added the rsvp stats to the event page but instead I wanted to take the time to showcase the use of routes with URL params.

searched High and Low to resolve the CORS issue and found a workaround using cors-anywhere.herokuapp.com to preppend my axios call.

I probably could have done more like displaying user images and names for going and waitlist. but I chose to make the site mobile responsive instead. I realize I had a week for this but I don't have a lot of personal time from my current job which is a reason I am looking else where among other reasons. 

all in all this took me about 13 hours from thought, design to troubleshooting and debugging. The biggest issue was a CORS issue I was getting from the API. Reading the docs I thought I was going to have to sign up for a pro account and set up some OAuth login. However I was able to bypass that. This was a fun little assessment. 