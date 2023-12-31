# Project Instructions

This repo is your starter code for the project. It is the same as the starter code we began with in lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
> concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
> process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

It would probably be good to first get your basic project setup and functioning. Follow the steps from the course up to Lesson 4 but don't add Service Workers just yet. We won't need the service workers during development and having extra caches floating around just means there's more potential for confusion. So, fork this repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:

- `npm install`
- to resolve dependency tree `npm config set legacy-peer-deps true` or `bash npm i --legacy-peer-dep` (As these versions are not the latest versions, make sure to install them with)

- install list dependency:

* install webpack-dev-server
  npm install webpack-dev-server --save-dev

* install express
  npm install express

* install webpack and extensions:
  npm install webpack webpack-cli --save-dev
  npm i -D @babel/core @babel/preset-env babel-loader
  npm i -D style-loader node-sass css-loader sass-loader
  npm i -D clean-webpack-plugin
  npm i -D html-webpack-plugin
  npm i -D mini-css-extract-plugin
  npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

* Tip for utils in js :
  npm install --save lodash

* set up Environment variables :
  npm install dotenv

* add library for AYLIEN's APIs
npm install aylien_textapi

