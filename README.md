# Project Overview

## Project Links

- [Github Repo](https://github.com/taylorhughes291/bullet-journal-frontend)
- [Deployment Link](https://bullet-journal-frontend.vercel.app/)

## Project Description

Users of this app are people who want to incorporate lifestyle changes in the form of staying organized and on top of their lives. This app will utilize the bullet journal system in a digital way. The user will be able to: 
* See, add, update, and delete tasks and events for the current day; 
* See, add, update, and delete tasks and events for the current week; 
* See, add, update, and delete tasks and events for the current month in a calendar view;
* See, add, update, and delete tasks and events in buckets divided up by month for the next year
* See, add, update, and delete miscellaneous notepages
* See a table of contents page of all pages

The scope of this project will be limited to desktop view, and will be extended to mobile if time permits.

Post-MVP will be
* Search capability on table of contents
* JWT legit authentication
* Pre-packaged task list (for trips, any kind of activity)
* Drawing or photo capability
* Ability to favorite pages for quick reference from home page
* Progressive Web Application for download to mobile devices

## API

There will not be any API drawn from for this project.

## Backend data

This will be updated upon completion and further thought

## React Architecture


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

#### MVP Documents
- [Mobile Wireframes](https://imgur.com/a/CK1qOwD)
- [Tablet Wireframes](https://imgur.com/a/WNlr4QJ)
- [Desktop Wireframes](https://imgur.com/a/wuxvK07)
- [React Architecture](https://imgur.com/a/ytuYQIR)

#### Post-MVP Documents
- [Mobile Wireframes](https://imgur.com/a/KW0jaar)
- [React Architecture](https://imgur.com/a/luGiHaS)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  I have carefully decided what is placed into your MVP and what can be implemented after.

#### MVP
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
- Allow user to use app for only 1 person
- Send API to rainforest for each keyword, and combined keywords (total 6). API will also take budget pricing into account
- onChange controlled inputs will be used, allowing keyword and product carousel to appear only once Person and Budget fields have content.
- Suggest low cost items to fill budget once user has selected item(s)
- Build ranking algorithm to suggest the most relevant products to the user
- Show cart subtotal to user once Cart has been finalized
- Serve product links to the user for easy purchase

#### PostMVP

- Create new page for initializing a list
- Enable user to select if the recipients are Small, Medium, or Large gifts and calculate budget per person based on that
- Enable multiple "Recipient" cards on Keyword Builder page
- Allow user to edit Person Name, Person Budget, Total Budget, List Name, Person Gift Size and update all state accordingly
- Allow user to edit Recipient Profiles in Final Cart
- Introduce total costs to Keyword Builder and Final Cart

## Time/Priority Matrix

[Please see Time Priority Matrix at this link](https://imgur.com/a/85XeFGj)

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

### MVP
| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Nav | This will allwo the user to see the logo and select from the menu |
| Keyword Builder | This will be the homepage - it will allow the user to input the meaty data about the recipient. This will be a routed page. | 
| Product Carousel | This will contain all the Product cards, selection buttons, and removal buttons |
| Product | This will contain the specific product image, name, and price |
| Final Cart | This is a routed page that will show all of the selected items, the subtotal, and the links to the Products for easy purchase. |
| Selected Product | This will show the product profile in the Final Cart, including image, price, and name. | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Nav, Keyword, Cart pages | H | 1hr | 0.5hr | 0.5hr |
| Initialize Router and create Switch statements | H | 1hr | 0.5hr | 0.5hr |
| Build Nav | H | 1hr | 0.5hr | 0.5hr |
| Build Keyword Page | H | 1hr | 0.5hr | 0.5hr |
| Build Cart Page | M | 1hr | 0.5hr | 0.5hr |
| Add and test linking between router pages | H | 1hr | 0.5hr | 0.5hr |
| Add display functionality to Name and Budget fields | L | 2hr | 2hr | 2hr |
| Initialize State for saving Recipient data | H | 0.5hr | 0.5hr | 0.5hr |
| Initialize State for Product Information | H | 0.5hr | 1hr | 1hr |
| Create onChange and OnClick Events to manipulate Recipient State | H | 3hr | 2hr | 2hr |
| Create Dummy data for development purposes | H | 2hr | 1hr | 1hr |
| Implement Product Ranking Algorithm | M | 3hr | 5hr | 5hr |
| Build Product Carousel Component | H | 2.5hr | 1hr | 1hr |
| Build Product Component | H | 2hr | 2hr | 2hr |
| Send Product Info to Product Component | H | 1.5hr | 1hr | 1hr |
| Implement Selection information lift to Recipient Profile | H | 1hr | 2hr | 2hr |
| Style Carousel | H | 2hr | 1hr | 1hr |
| Style selected Products | H | 2hr | 2hr | 2hr |
| Send recipient profile to cart | H | 1hr | 2hr | 2hr |
| Render Cart | M | 1hr | 1hr | 1hr |
| Render Product Links | H | 2.5hr | 2hr | 2hr |
| Layout for Mobile | H | 3hr | 3hr | 3hr |
| Styling for Tablet | H | 3hr | 1hr | 1hr |
| Styling for Desktop | H | 3hr | 1hr | 1hr |
| Nav/New List reset state functionality | L | 1hr |  |  |
| Final Styling Tweaks | H | 3hr |  |  |
| Total | H | 46hrs| 5hrs | 5hrs |

## Additional Libraries
This project will leverage React-Bootstrap as well as SASS for styling purposes.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```