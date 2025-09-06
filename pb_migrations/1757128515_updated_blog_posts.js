/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2248329634")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file2624913349",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/gif",
      "image/webp"
    ],
    "name": "featured_image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2248329634")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file2624913349",
    "maxSelect": 1,
    "maxSize": 10,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/gif",
      "image/webp"
    ],
    "name": "featured_image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
