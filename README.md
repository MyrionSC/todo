The Server for marand todolist app

endpoints:

GET api/list: {personal: string[], professional: string[]}
GET api/personal: string[]
GET api/professional: string[]

POST api/personal(string)
POST api/professional(string)

DELETE api/personal(number)
DELETE api/professional(number)
