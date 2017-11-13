<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Submitted Page</title>
    </head>
    <body>
        <% out.print("You clicked "+request.getParameter("name")+" !"); %>  
    </body>
</html>
