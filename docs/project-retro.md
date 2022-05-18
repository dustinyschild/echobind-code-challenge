## Rick and Morty API App

### What I focused on:
I really wanted to focus on setting up a full CI/CD pipeline, considering this position would potentially be a lot of greenfield projects I wanted to showcase my ability to stand up new apps from scratch.
Next.js: Since my primary experience is with React this was a good framework to choose. Since most of this data is just being read from an api, leveraging Next.js SSR seemed like a no brainer.


## Given more time I would focus on:
- Better work breakdown & some spikes/reading documentation
  - There were several points where I realized, "this isn't going to work the way I want it to." Case and point, jsonplaceholder. I had to hack a last minute solution for storing descriptions.
  - Better CSS, the Card components could be more detailed, but I was going way over the time I had anticipated spending on this projet
  - Testing, testing, testing. I initially started doing TDD but my desired implementation started changing frequently so I dropped testing in the interest of time.
  - Implementing using an actual database. I initially ruled this out because I was going to use jsonplaceholder (see bullet 1)


## Blockers I ran into:
- Deployment: I normally use Heroku for deploying personal projects, however, they have disabled github integration due to compromised security
- CI: I normally use travis.ci with github integration, this does not work with private repos as far as I could tell
- Backend: I found out very late in the project that json placeholder does not function the way I expected, pivoted to read/write file to local directory
- Backend Part 2: I deployed the final version of my project and found out that my data file implementation does not work in the deployment environment the way it does locally

## Things I would have done differently:
- I wish I would have focused more on fulfilling the requirements first. Instead I tried a "Style as I go approach". This didn't work well because I broke the styles everytime I modified the component structure
- Going along with bullet 1, I focused too much on trying to create reusable components to start with. Should have gotten working implementation then refactor pieces that could be reused

MVP: 
- Retrieve a list of locations
- Retreive a list of residets for a given location
- Detailed description of a charcter

Tech: 
- Deployment: Vercel
- Continuous Integration: CircleCI
- Framework: React(Next.js)
- Testing: Jest - Component integration testing
- CSS: Styled Components
- Native Node.js fs package for file read/writing
- Project Tracking: Trello board
- Version Control: Git/Github
