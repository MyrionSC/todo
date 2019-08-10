**marand todolist app**

Now lives at heroku

*rest endpoints*

* GET api/list: {personal: string[], professional: string[]}
* GET api/personal: string[]
* GET api/professional: string[]
* GET api/shopping: string[]
* POST api/personal(string)
* POST api/professional(string)
* POST api/shopping(string)
* DELETE api/personal(number)
* DELETE api/professional(number)
* DELETE api/shopping(number)


*Deploy to heroku*

needs heroku cli and logged in.

1 - build frontend in todo-frontend: nr build-prod
2 - cp built frontend in ROOT/todo-frontend/dist to ROOT/build/frontend
3 - commit to git
4 - push to heroku: git push heroku master

if there are problems: "heroku logs --tail" to see logs



