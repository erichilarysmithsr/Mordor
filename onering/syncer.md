# A module to sync model data across Client and Server
!["MVC pattern here"](http://addyosmani.github.io/backbone-fundamentals/img/backbone_mvc.png)
The image shows an overall workflow. There are some specifics to be addressed here:

### Each model/view should be uniquely identifiable
We add a hash/UID for each model and the parent view. That will be used to store the data to the Storage on either localStorage or the server Storage. 

### Parent-child relationships
We add a reference to the type of each model/view. A map between this type and the path to the constructor is used to correctly instantiate the model. 
Each view keeps track of its children, and the children know their parent. 

The handlebars helper for views should have the custom code. Pass the parent view. Then, do
```javascript
parent.addChild(this);
this.parent = parent;
```

Similarly, on removal of a view, do 
```javascript
this.parent.removeChild(this);
```

### Good practice: Mixin the events to the Model/View instead of writing on the same function
This will provide for much better code separation. 

### View structure: 
The default View is extended to include the following: 
`parent`
This is a reference to the parent View function. 
`children`
This is an array with references of all Views, which are immediate children of this View (as in they are directly attached to some DOM Node which is a part of the View)
`id`
The id of the View container
`template`
The handlebars template. Could possibly be avoided
`render`
Standard render function
`initialize`
Initialize the model/collection of this View. More function calls to add children made here.
`events`
Events to be delegated on the DOM
`event Handlers`
These are functions that may:
1. Modify attributes of the DOM
2. Add children to the View

`$el`
Cached copy of the DOM element
`id`
String id of the View node
### Any update call should be bound by the Socket syncing. 
We extend Backbone.Model and write a custom update method that looks like:
``` javascript
Backbone.Model.update = function(key, value) {
    sendDatatoSocket(key, value);
    this.set(key, value);
}
//This update method should only be used to set data when updates are received from the UI. Use Backbone.Model.set inside the event triggers.
```
#### Alternatively, we could add an extra option  to `Model.set`, `Model.remove` and `Model()` to trigger the event serverside. 
```javascript
model.set('key', value, {
        sync: true
    });
```

### Offline
If the connection is ever lost, then Server data is to be synced appropriately. Keep track of the last timestamp. 