migrate((db) => {
  const collection = new Collection({
    "id": "16fs1g64xu70coi",
    "created": "2023-06-26 13:08:08.898Z",
    "updated": "2023-06-26 13:08:08.898Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4ntldv0u",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("16fs1g64xu70coi");

  return dao.deleteCollection(collection);
})
