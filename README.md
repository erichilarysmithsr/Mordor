# Project Mordor

Mordor is a self-hosted NodeJS based RSS reader that we are writing. It is intended to be a proof-of-concept app for Project One-Ring. 

![Mordor](http://upload.wikimedia.org/wikipedia/en/3/3a/Sauron.jpg "One Ring to Rule Them All")

## The One Ring

> One Ring to rule them all, One Ring to find them,

> One Ring to bring them all and in the darkness bind them

> In the Land of Mordor where the Shadows lie.

The One Ring is an integral part of project Mordor. It's aim is to enable writing of code, that can run both on the browser as well as on a NodeJS server. The One Ring gives the user the power to thus, control most of the application code from one point. Developing the One Ring will be a major part of Project Mordor. 

The idea behind the One Ring is to provide a platform, that is agnostic to the environment it is going to function in. It will also provide a loose MVC structure to the codebase. 

## The Forge

> The forges of Mount Doom are equipped with the latest tools to help forge the One Ring. 

While developing the project, we intend to use a very modern workflow and tools, that will enable us to code better and faster. We will not hesitate to experiment. For us, the process of writing and the learnings from it are just as important as the final product that comes out from our work. 

## Why should you join Project Mordor?

1. You get to work on a real product that you and many others might use. As you have probably heard, Google Reader is shutting down on July 1. 
2. Mordor is an open-source project. Your contributions can reach and be built upon by so many more people. 
3. The project has a better cutting edge than the best blades in the Middle Earth. In other words, this is really new technology that we are working on, and has hardly been ventured into in the past. 

## The technical stuff

Though we are open to changes, the proposed stack at this point of time looks like

1. NodeJS with Express on the Backend
2. Redis for caching, as well as the primary datastore. 
3. Client-side and Server-side layers from the One Ring. This will serve as the MVC on both the client as well as the server. 
4. A custom unified router for handling URL routing and hashbangs. (I am going to call it the Nazgul :) )
5. Jasmine for tests. 
6. jQuery and Underscore for general utilities. 
7. Handlebars for templating
8. Bootstrap as the primary CSS framework. 
9. RequireJS for modules on both client and the server. 
10. Bower and Npm for package management
11. A Grunt based workflow for development