# Generate Migrations

...\Classroom.SimpleCRM.SqlDbServices>dotnet ef migrations add InitialCrm -c CrmDbContext

...\Classroom.SimpleCRM.SqlDbServices>dotnet ef migrations add InitialIdentity -c CrmIdentityDbContext


#Apply Migrations

...\Classroom.SimpleCRM.SqlDbServices>dotnet ef database update -c CrmDbContext
Applying migration '20190907170412_InitialCrm'.
Done.

...\Classroom.SimpleCRM.SqlDbServices>dotnet ef database update -c CrmIdentityDbContext
Applying migration '20190908222810_InitialIdentity'.
Done.
