
var AWS = require("aws-sdk");


/**
 * The DynamoDb Table Object
 * *
 * @param config {secretAccessKey, accessKeyId, region}
 * @param tableName String
 */

var ddb = function(config) {

  AWS.config.update({
    region: config.region,
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey
  });

  this.docClient = new AWS.DynamoDB.DocumentClient();

  /**
   * putItem - insert item into table (will overwrite existing key)
   *
   * @param  {String} tableName the table to insert into
   * @param  {Object} item      the item to insert
   * @param  {Function} cb
   */
  this.putItem = function(tableName, item, cb) {
    var params = {
      TableName : tableName,
      Item: item
    };
    docClient.put(params, function(err, data) {
      if (err) return cb(err);
      cb(null);
    });
  }

  /**
   * getItem - get item from table
   *
   * @param  {String} tableName description
   * @param  {Object} key       description
   * @param  {Function} cb        description
   */
  this.getItem = function(tableName, key, cb) {
    var params = {
      TableName : tableName,
      Key: key
    };
    this.docClient.get(params, function(err, data) {
      if (err) return cb(err, null);
      cb(null, data.Item);
    });
  }


  /**
   * updateItem - update existing object
   *
   * @param  {String} tableName                 description
   * @param  {Object} key                       description
   * @param  {Object} updateExpression          description
   * @param  {Object} expressionAttributeValues description
   */
  this.updateItem = function(tableName, key, updateExpression, expressionAttributeValues, cb) {
    var params = {
      TableName: tableName,
      Key: key,
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues:"UPDATED_NEW"
    }
    this.docClient.update(params, function(err, data) {
      if (err) return cb(err, null);
      cb(null, data);
    });
  }

  /**
   * removeItem - remove element from table
   *
   * @param  {String} tableName description
   * @param  {Object} key       the key object
   * @param  {Function} cb        description
   */
  this.removeItem = function(tableName, key, cb) {
    var params = {
        TableName : tableName,
        Key: key
    };
    this.docClient.delete(params, function(err, data) {
      if (err) return cb(err);
      cb(null);
    });
  }

  /**
   * getAll - get all items in a table
   *
   * @param  {type} tableName description
   * @param  {type} cb        description
   * @return {type}           description
   */
  this.getAllItems = function(tableName, cb) {
    var params = {
        TableName : tableName
    };
    this.docClient.scan(params, function(err, data) {
      if (err) return cb(err, null);
      cb(null, data.Items);
    });
  }

  return this;
}

module.exports = ddb;
