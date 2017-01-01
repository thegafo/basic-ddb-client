
# Basic DynamoDB Node client

Very basic, pared-down DynamoDB client.

## Usage

```javascript

var ddb =

var config = {
  region: "",
  accessKeyId: "",
  secretAccessKey: ""
};

var ddb = require('../lib/basic-ddb-client')(config);

```

### Put item

```javascript
ddb.putItem(tableName, {primaryKey: '', sortKey: ''}, function(err) {
  console.log(err);
});
```

### Get item

```javascript
ddb.getItem(tableName, {primaryKey: '', sortKey: ''}, function(err, item) {
  console.log(err, item);
});
```

### Remove item

```javascript
ddb.removeItem(tableName, {primaryKey: '', sortKey: ''}, function(err) {
  console.log(err);
});
```
