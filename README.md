# Backstock

Keep track of what you have on hand so you always know - even on the go! </br>
Backstock is a home inventory app for tracking the items you have, their location, ideal quantities, and expiration dates! 

<p align="center">
  <a href="http://backstock.app/" target="_blank">
    <img src="https://user-images.githubusercontent.com/52755177/192899177-55b7c039-5714-479c-94f5-b63f2f60234c.gif" alt="Backstock"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/katiehom/backstock5.2" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=REPO&color=1f1591&style=plastic&logo=github&logo-color=white"/>
  </a>  
  <a href="http://backstock.app/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=WEBSITE&color=c90c64&style=plastic&logo=netlify&logo-color=white"/>
  </a>
</p>


## How It's Made:

**Tech used:** <strong>Node.js, Express.js, EJS, Passport, Bootstrap & JavaScript</strong>

Backstock is a full stack web application following MVC architecture. It runs on Node.js and Express for the backend and EJS to render the views. Users can sign up using passport authentication and begin adding new backstock items to their inventory. The inventory list can be sorted by several columns and filtered through typing in the Search bar. Individual items can be edited if quantities or other information needs to be updated. Conditional rendering helps users know when items need to be restocked or when they are expired.

## Versions
Version 1 - MVP - Add items to a Backstock list which can be sorted, filtered, updated, and deleted.

Version 2 - Added shopping list functionality for users to add unique items to their shopping list or to import them directly from the Backstock list. When importing, the quantity may be reflective of the ideal quantity and the quantity already on hand. Users can delete items from the shopping list without affecting their Backstock list.

## Lessons Learned:

I learned a lot about working with Bootstrap classes and when this was advantageous, and when it was better to use my own styling. Sorting tables, specifically dates, proved to be more difficult than first anticipated. Date rendering also presented challenges, and I ended up using Day.js which is a suggested replacement for the ever-popular Moment.js, which is considered legacy.

When changing some client-side JavaScript functions to forms with method override, I learned about methods submit the same form using different methods using button attributes such as `formaction` and `formmethod`. 

## Optimizations
Future iterations might include notifying users when expiration dates are approaching, filtering items based on multiple categories, marking shopping list items as complete, and the ability to add (manually or automatically) all out-of-stock items to the shopping list.

This application would also be well-suited to use a JavaScript framework, such as React, where statefulness would be helpful. Also, writing in React Native.

It would be wonderful if the app could also use a UPC scanner and connect to an API for easier addition of items.

---

# TO-DO:

- [X] Refactor search filter code
- [ ] Ensure accessibility - check functionality with tabbing and screen readers
- [ ] In `edit.ejs` create select dropdown dynamically
- [ ] Treat each row as a card and style differently on mobile
- [ ] Create external server-side filter for sorting items
- [ ] Add delete confirmation on Restock page
- [ ] Format footer to stick to bottom of page
- [ ] Select more than one item at a time to update quantity
- [ ] Update quantity or delete backstock items on main screen instead of on edit page
- [ ] Refactor code for unit tests
- [ ] Implement unit tests

 ---
 



