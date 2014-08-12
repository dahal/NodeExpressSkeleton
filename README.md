### Node TODO App
**Node App Skeleton**

#### Install Node, express and express generator
```
~> express NodeTodo && cd NodeTodo
~> npm uninstall jade -S
~> npm install ejs -S
~> npm install
```

#### Delete views and create
  > app/views

  > app/models

  > app/controller

#### Change the views location on app.js
```
// view engine setup
app.set('views', path.join(__dirname,'app', 'views'));
app.set('view engine', 'ejs');
```

#### Setup Mongo DB
```
~> npm install mongoose -S

// Setup Mongo DB on app.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NodeTodo');

// app/models/todo.js
var mongoose = require('mongoose');
module.export = mongoose.model('Todo', { name: String });

```