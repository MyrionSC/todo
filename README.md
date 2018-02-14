The backend for marand todolist app

This frontend is designed to be able to be served through an apache reverse proxy, so things like absolute paths to resources are an absolute no-no


rest endpoints:

GET api/list: {personal: string[], professional: string[]}

GET api/personal: string[]

GET api/professional: string[]

POST api/personal(string)

POST api/professional(string)

DELETE api/personal(number)

DELETE api/professional(number)




