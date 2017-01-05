
# Basic DynamoDB Node client

Very basic, pared-down DynamoDB client.


## Installation

```bash
npm install basic-ddb-client
```

## Usage

```javascript

var config = {
  region: "",
  accessKeyId: "",
  secretAccessKey: ""
};

var ddb = require('basic-ddb-client')(config);

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

### Update item

```javascript
ddb.updateItem(tableName, {primaryKey: '', sortKey: ''}, "set whatever = :val", {":val": false}, function(err, item) {
  console.log(err,updateValues);
});
```

### Remove item

```javascript
ddb.removeItem(tableName, {primaryKey: '', sortKey: ''}, function(err) {
  console.log(err);
});
```
