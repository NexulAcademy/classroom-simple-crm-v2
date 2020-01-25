FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY ["Classroom.SimpleCRM.WebApi/Classroom.SimpleCRM.WebApi.csproj", "Classroom.SimpleCRM.WebApi/"]
RUN dotnet restore "Classroom.SimpleCRM.WebApi/Classroom.SimpleCRM.WebApi.csproj"
COPY . .
WORKDIR "/src/Classroom.SimpleCRM.WebApi"
RUN dotnet build "Classroom.SimpleCRM.WebApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Classroom.SimpleCRM.WebApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Classroom.SimpleCRM.WebApi.dll"]