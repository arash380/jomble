# .Net WebApi

## Available Scripts

In the project directory, you can run:

### `dotnet watch run`

Runs the app in the development mode.\
Open [https://localhost:7199/swagger/index.html](https://localhost:7199/swagger/index.html) to view it in your browser.

### `dotnet ef migrations add {migName}`
### `dotnet ef database update`

Will create a new migration and apply it to the database. This is useful after adding or modifying models.

### `dotnet aspnet-codegenerator controller -name {controllerName} -async -api -m {modelName} -dc {contextName} -outDir Controllers -sqlite`

Creates a new controller based on the model.

https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-7.0&tabs=visual-studio-code