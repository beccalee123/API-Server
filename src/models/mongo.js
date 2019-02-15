'use strict';

/** Class representing a generic mongo model. */
class Model {

  /**
   * Model Constructor
   * @param schema {object} - mongo schema
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Retrieves one or more records
   * @param _id {string} optional mongo record id
   * @returns {*}
   */
  get(_id) {
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }

  /**
   * Create a new record
   * @param record {object} matches the format of the schema
   * @returns {*}
   */
  post(record) {
    let newRecord = new this.schema(record);
    
    return newRecord.save()
      .then(savedRecord => {
        Q.publish('database', 'create', {action:'create', collection: this.schema.modelName, _id:newRecord.id});
        return savedRecord;
      });
  }

  /**
   * Replaces a record in the database
   * @param _id {string} Mongo Record ID
   * @param record {object} The record data to replace. ID is a required field
   * @returns {*}
   */
  put(_id, record) {
    Q.publish('database', 'update', {action:'update', collection: this.schema.modelName, id:_id});
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }

  /**
   * Deletes a recod in the model
   * @param _id {string} Mongo Record ID
   * @returns {*}
   */
  delete(_id) {
    Q.publish('database', 'delete', {action:'delete', collection: this.schema.modelName, id:_id});
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = Model;
