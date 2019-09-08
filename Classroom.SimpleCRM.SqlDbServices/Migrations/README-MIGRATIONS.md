# Generate Migrations

...\Classroom.SimpleCRM.SqlDbServices>dotnet ef migrations add InitialCrm -c CrmDbContext

...\Classroom.SimpleCRM.SqlDbServices>dotnet ef migrations add InitialIdentity -c CrmIdentityDbContext


#Apply Migrations

...\Classroom.SimpleCRM.SqlDbServices>dotnet ef database update -c CrmDbContext

...\Classroom.SimpleCRM.SqlDbServices>dotnet ef database update -c CrmIdentityDbContext
