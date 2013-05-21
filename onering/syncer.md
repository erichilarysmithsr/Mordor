# A module to sync model data across Client and Server
!["MVC pattern here"](http://addyosmani.github.io/backbone-fundamentals/img/backbone_mvc.png)
The image shows an overall workflow. There are some specifics to be addressed here:
### Each model/view should be uniquely identifiable
Each model and the parent view should contain a hash, that will be used to store the data to the Storage on either localStorage or the server Storage. 
Each model/ view should also carry a reference to the model/view type. A map between this type and the path to the constructor will be present on the server in order to correctly instantiate the model. 
Each view should be able to keep track of its children, and the children should know their parent. The hash may be used. 