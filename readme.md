# Coderockr Technical Test

## Requirements

- node

## How to run it?

To install and run on your machine, please follow the commands below:

- `npm install`  and  `npm run dev`

Open `http://127.0.0.1:5173/` to view it in the browser.

## About it

- Home Page show articles cards with an infinite scroll: `http://127.0.0.1:5173/articles`
- Single Article Page, when you click on an article card on the home page, you will see more details about it: `http://127.0.0.1:5173/articles/:id`
- Contact Modal in the navigation bar, the modal opens no matter what page it is on 
- The entire application is responsive :)

I used `react-query` to create the infinite scroll, `Axis` to consume the API, `phosphor-react` to use the icons, `react-router-dom` to set the routes in the App file, and `radix-ui` for the modal, and I followed the `BEM` practice for application styling.
I choose to break into five components: ArticleDetail, Articles, ContactModal, Input, and NavBar following the "Thinking in React" practice: `https://reactjs.org/docs/thinking-in-react.html` and two screens: Home and SingleArticlePage. In each component folder is your style, and in the src/ is the global style file. Why I did do this way? Well, I think that's the best way to structure a project and makes it easier to read code from each part of the component

In the screenshot folder, outside of the src folder, you can see three screenshots of the application.

* p.s.: sorry if I took longer than necessary, I got covid and was very sick the last weeks.
