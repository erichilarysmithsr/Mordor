# A module to sync model data across Client and Server
!["MVC pattern here"](http://addyosmani.github.io/backbone-fundamentals/img/backbone_mvc.png)
The image shows an overall workflow. There are some specifics to be addressed here:

### Each model/view should be uniquely identifiable
We add a hash/UID for each model and the parent view. That will be used to store the data to the Storage on either localStorage or the server Storage. 

### Parent-child relationships
We add a reference to the type of each model/view. A map between this type and the path to the constructor is used to correctly instantiate the model. 
Each view keeps track of its children, and the children know their parent. 

### Any update call should be bound by the Socket syncing. 
We extend Backbone.Model and write a custom update method that looks like:
``` javascript
Backbone.Model.update = function(key, value) {
    sendDatatoSocket(key, value);
    this.set(key, value);
}
//This update method should only be used to set data when updates are received from the UI. Use Backbone.Model.set inside the event triggers.
```
#### Alternatively, we could add an extra option  to `Model.set`, `Model.remove` to trigger the event serverside. 
```javascript
model.set('key', value, {
        sync: true
    });
```

### Offline
If the connection is ever lost, then Server data is to be synced appropriately. Keep track of the last timestamp. 