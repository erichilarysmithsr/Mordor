# Overall Flow
1. Detect Route using regex matching. Load the corresponding controller code
2. Load the model data from the Storage recursively
3. [ ] If there is an override, look to load only the data that is needed; this needs to be explored
4. Write in the updated data depending on the route. 
5. Store the updated data to the Storage and kill the Model. 
6. Remove all listeners from the View to be killed if Client.
7. Render View. Add new event listeners if Client. 
8.  [ ] If there is an override, update the View for only where needed. 
9.  Update DOM / Send the View data.