# Mongoose Autopopulate Global Option

## Installation

Install using [npm](https://npmjs.org)

```
npm i mongoose-autopopulate-extend
```

### Plugin Options

```javascript
var mongoose_autopopulate_extend = require("mongoose-autopopulate-extend");

mongoose.plugin(autopopulateExtend, {
  match: { status: "ENABLED", deleted: false },
  maxDepth: 1
});
```
