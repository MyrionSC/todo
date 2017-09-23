The Server for marand todolist app

endpoints:

GET api/list: {short: string[], long: string[]}
GET api/short: string[]
GET api/long: string[]

POST api/short(string)
POST api/long(string)

DELETE api/short(number)
DELETE api/long(number)
