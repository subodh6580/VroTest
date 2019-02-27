/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "String": {
        "type": "string"
    },
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);
/**
 * Data storage
 */
Apperyio.storage = {};