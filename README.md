# Landing Page Project

## Table of Contents

* [Page Features](#Features)
 * [Scroll to Top](#ScrollTop)
* [Popup](#Popup)
* [Scroll to CLicked Section](#ScrollTo)
* [Active Class](#ActiveClass)



## Features
 This page has got few special features made using Javascript. They are scroll to top, a popup, moving to sections when clicked on navbar, navbar active class.

## ScrollTop 
 A button is provided once a user scrolls down which once pressed takes you to the top. The functionality of button was made using 2 functions scrollFunction() and topFunction.

## Popup
 A message gets popped up once the heading of the the page is clicked. This is a simple function which is shown by using toggle().

## ScrollTo
There are 4 different sections which can be navigated directly from navbar on clicked. On clicking the section the id of it is taken and then the page gets scrolled to that particular function. This is done by addiong a event listener to the navbar.

## ActiveClass
 The section which is shown on screen that particular section is added to a active class which has got few different styling. This is done by using Intersection Observer which allows asynchronously observe the changes in the intersection of provided target element. Than next using a for each loop the needed section is added with active class and the previous one is removed.


 
 



