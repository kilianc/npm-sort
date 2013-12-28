# npm-sort
Sort *~alphabetically* your dependecies

## Install
    $ npm install npm-sort -g

## Usage
    $ cd my_node_project
    $ npm-sort

## Example result

From

```js
"dependencies": {
  "koa": "~0.1.2",
  "koa-router": "~1.6.1",
  "co": "~3.0.1",
  "request": "~2.30.0",
  "colors": "~0.6.2",
  "async": "~0.2.9",
  "JSONStream": "~0.7.1",
  "qs": "~0.6.6",
  "event-stream": "~3.0.20",
  "json-array-stream": "~0.1.2",
  "koa-jsonp": "~0.0.3",
  "koa-mount": "~1.2.2",
  "koa-compress": "~1.0.0",
  "koa-favicon": "~1.0.1",
  "koa-response-time": "~1.0.1",
  "debug": "~0.7.4",
  "co-body": "0.0.1",
  "nano": "~4.2.1"
},
```

to

```js
"dependencies": {
  "async": "~0.2.9",
  "co": "~3.0.1",
  "colors": "~0.6.2",
  "co-body": "0.0.1",
  "debug": "~0.7.4",
  "json-array-stream": "~0.1.2",
  "JSONStream": "~0.7.1",
  "koa": "~0.1.2",
  "koa-jsonp": "~0.0.3",
  "koa-mount": "~1.2.2",
  "koa-router": "~1.6.1",
  "koa-favicon": "~1.0.1",
  "koa-compress": "~1.0.0",
  "koa-response-time": "~1.0.1",
  "nano": "~4.2.1",
  "request": "~2.30.0"
}
```