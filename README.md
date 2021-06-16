# Project Overview

## Project Links

- [Github Repo](https://github.com/taylorhughes291/bullet-journal-frontend)
- [Deployment Link](https://bullet-journal-frontend.vercel.app/)
- [React Architecture](https://docs.google.com/drawings/d/1_tKvlm89imjumXmPfb26RxcIoKRrw1B1YhuqrC_C6e0/edit?usp=sharing)

## Project Description

Users of this app are people who want to incorporate lifestyle changes in the form of staying organized and on top of their lives. This app will utilize the bullet journal system in a digital way. The user will be able to: 
* See, add, update, and delete tasks and events for the current day; 
* See, add, update, and delete tasks and events for the current week; 
* See, add, update, and delete tasks and events for the current month in a calendar view;
* See, add, update, and delete tasks and events in buckets divided up by month for the next year


The scope of this project will be limited to desktop view, and will be extended to mobile if time permits.

Post-MVP will be
* See, add, update, and delete miscellaneous notepages
* See a table of contents page of all pages
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
- [Mobile Wireframes](https://imgur.com/a/Ps2wUt7)
- [React Architecture](https://docs.google.com/drawings/d/1_tKvlm89imjumXmPfb26RxcIoKRrw1B1YhuqrC_C6e0/edit?usp=sharing)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  I have carefully decided what is placed into your MVP and what can be implemented after.

#### MVP
* Basic calendaring broken down by day, week, month, and year.
* Basic tasking that can be set to calendar items

#### PostMVP

* Conditional formatting for dealing with late tasks
* Enable app to be a Progressive Web App for mobile use
* Enable note pages to be taken on app
* Enable a notes section for each calendar item
* Enable a table of contents for all note pages and calendar pages sorted by date created
* Enable a search function to search for notes and clanedar items
* Enable a favorite option to favorite and quick reference note pages
* JWT authentication
* Enable an ability to draw or take pictures on pages

## Time/Priority Matrix

[Please see Time Priority Matrix at this link](https://imgur.com/a/85XeFGj)

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

### MVP
| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| /Login | This will be the first page the user sees and will allow them to login. |
| /CreateAccount | This will allow the user to create an account. | 
| /Home | This will display a summary view of the current day and current week. It will provide a snapshot of what's important to the user that day. |
| HomeToday | Small widget located on the homepage that will display the first 2 or 3 tasks and events for the user. |
| HomeTodayTasks | Included in HomeToday, shows today's tasks. |
| HomeTodayEvents | Included in HomeToday, shows today's events | 
| HomeWeek | Small widget on the homepage that display the week's tasks in a preview |
| Nav | Static nav that allows the user to quickly navigate to the different calendar modes |
| /Day/:year/:month/:day | Page that will display all of the day's events and all of the tasks needed to be done that day |
| DayEvents | renders all events for that day |
| DayTasks | renders all of the tasks for that day |
| DayWeekTasks | renders tasks needed to be done that week so that the user may decide to include them for the day |
| /Week/:year/:month/:w-startday/:day | page that shows the calendar view of the week |
| WeekMonthTasks | renders the tasks slottedfor the month so that user can decide to incorporate them into the week if wanted |
| /Month/:year/:month | renders calendar view of the whole month |
| MonthCalendar | renders calendar of month |
| MonthTasks | renders all tasks needing completion that month |
| /Year/:year/:y-current-month | Renders the next 6 months at a igh level view |
| YearMonth | renders all the events and tasks of that month |
| /Add | allows you to add an event or task and attach it to a calendar item |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Learn Python/Django | H | 3hr | 0.5hr | 0.5hr |
| Build out basic backend routes | H | 2hr | 0.5hr | 0.5hr |
| Create database update logic for when user logs in again/time events | H | 4hr | 0.5hr | 0.5hr |
| Test routes using Postman | H | 1hr | 0.5hr | 0.5hr |
| Complete deployment | H | 2hr | 0.5hr | 0.5hr |
| Create component pages | H | 1hr | 0.5hr | 0.5hr |
| Initialize Router and create Switch statements | H | 1hr | 0.5hr | 0.5hr |
| Build Nav | H | 1hr | 0.5hr | 0.5hr |
| Build Login Page | H | 1hr | 0.5hr | 0.5hr |
| Build Home Page | M | 1hr | 0.5hr | 0.5hr |
| Build Day Page | M | 2hr | 0.5hr | 0.5hr |
| Build Week Page | M | 2hr | 0.5hr | 0.5hr |
| Build Month Page | M | 1hr | 0.5hr | 0.5hr |
| Build Year Page | M | 1hr | 0.5hr | 0.5hr |
| Build Add Page | M | 3hr | 0.5hr | 0.5hr |
| Add and test linking between router pages | H | 1hr | 0.5hr | 0.5hr |
| Implement getEffects for all pages | H | 1hr | 1hr | 1hr |
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