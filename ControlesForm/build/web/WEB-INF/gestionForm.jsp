<%
    response.setContentType("UTF-8");
    request.setCharacterEncoding("UTF-8");
    response.setCharacterEncoding("UTF-8");
    
    String user = request.getParameter("user");
    String pwd = request.getParameter("pwd");
    String[] depart = request.getParameterValues("dpto");
    String obsv = request.getParameter("obsv");
%>
<%! boolean credencialesCorrectas(String user, String pwd){
    return user.equals("pim") && pwd.equals("pam");
}
%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <% if(credencialesCorrectas(user, pwd)){ %>
        <h1> You're Welcome!</h1>
        <h2>Perteneces al departamento de
        <%for (String d: depart) out.println("<br> + d");%></h2>
        <h2>Tus observaciones <%=obsv%></h2>
        <%}else{%>
        <h1>denegated Access</h1>  
        <%}%>
    </body>
</html>
