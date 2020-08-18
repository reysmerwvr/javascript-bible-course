# Mongo

Documents in the database are stored in the BSON format

Extended JSON is used to represent BSON data types

## Insert documents

```js
const post = {
  title: "What is the best way to learn JavaScript from the ground up?",
  postId: NumberInt(3511),
  comments: 10,
  shared: true,
  tags: ["JavaScript", "programming"],
  author: {
    name: "Mike Forester",
    nickname: "mikef",
  },
};

const posts = [
  {
    title: "My thoughts about 12-factor App Methodology",
    postId: NumberInt(2618),
    comments: 0,
    shared: false,
    tags: [],
    author: {
      name: "Emily Watson",
      nickname: "emily23",
    },
  },
  {
    title: "Who can suggest best computer coding book for beginners?",
    postId: NumberInt(8451),
    comments: 2,
    shared: false,
    tags: ["programming", "coding"],
    author: {
      name: "Emily Watson",
      nickname: "emily23",
    },
  },
];
db.getCollection("posts").insertOne(post);
db.getCollection("posts").insertMany(posts);
```

## Find documents

```js
db.getCollection("posts").find({ tags: "programming" });
db.getCollection("posts").find({ "author.name": "Emily Watson" });
```

## Query Operators

```js
$or;
$eq;
$lt;
$and;
$ne;
$gt;
$in;
$nin;
$regex;

db.getCollection("posts").find({ comments: { $gt: 0 } });
db.getCollection("posts").find({ comments: { $lt: 5 } });
db.getCollection("posts").find({
  $and: [{ comments: { $lt: 5 } }, { comments: { $gt: 0 } }],
});
db.getCollection("posts").find({
  $or: [{ shared: true }, { tags: "programming" }],
});
db.getCollection("posts").find({
  tags: { $in: ["programming", "coding"] },
});
```

## Sort, Limit, Skip

```js
db.getCollection("posts").find({}).limit(1);
db.getCollection("posts").find({}).skip(2);
db.getCollection("posts").find({}).sort({ comments: 1 });
db.getCollection("posts").find({}).sort({ comments: -1 });
db.getCollection("posts").find({}).sort({ title: 1 });
db.getCollection("posts").find({}).skip(2).sort({ shared: 1 });
```

## Update

Update operators

```js
$set;
$uset;
$inc;
$rename;
$currentDate;
$addToSet;

db.getCollection("posts").updateOne(
  { postId: 2618 },
  { $set: { shared: true } }
);
db.getCollection("posts").updateOne(
  { postId: 1151 },
  {
    $set: {
      title: "What is the average salary of the senior frontend developer?",
    },
  }
);
db.getCollection("posts").updateMany({ tags: [] }, { $unset: { tags: 1 } });
db.getCollection("posts").updateOne(
  { postId: 8451 },
  { $inc: { comments: 1 } }
);
```

## Delete

```js
db.getCollection("posts").deleteOne({ postId: 1111 });
db.getCollection("posts").deleteMany({ title: { $exists: false } });
```

## Agregation Framework

```js
db.posts.aggregate([{ $group: { _id: "$author.name" } }]);
db.posts.aggregate([{ $group: { _id: "$author.nickname" } }]);
db.posts.aggregate([{ $group: { _id: "$comments" } }]);
```

## MongoDB Utilities

- mongoexport
- mongoimport
- mongodump
- mongorestore
