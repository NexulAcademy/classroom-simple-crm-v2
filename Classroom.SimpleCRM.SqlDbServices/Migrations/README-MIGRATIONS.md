# Generate Migrations

...\Classroom.SimpleCRM.SqlDbServices>dotnet ef migrations add InitialCrm -c CrmDbContext


#Apply Migrations

...\Classroom.SimpleCRM.SqlDbServices>dotnet ef database update -c CrmDbContext
