# translators_crud

* In order to run this tool you should create a PostgreSQL database named "translators". Check application.properties to make sure your database configurations are in match (username, password, address).
* If all your database configurations are ok, just run "./gradlew clean && ./gradlew build" in the root directory to build the jar file. 
* After the build process has ended, look for the jar file under "/build/libs". Inside "build/libs" run "java -jar translator-0.0.1-SNAPSHOT.jar"
* Open "localhost:8080/index.html" to use the tool
