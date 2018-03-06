<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  
  </head>
  
  <body>
    <p id="p">ChatBot</p>
    <div id="container">
    <div id="display">
    </div>
    
    <div id="control">
 
        <textarea id="textarea" placeholder="Type your message here..."></textarea>
        <button id="submit">Send</button><br/>
        <input type="checkbox" id="checkbox"/>
        <label>Send by hitting Enter</label>
    </div>
    </div>
    <script src="mess.js" type="text/javascript"></script>
    <a href="portfolio/portfolio.html">portfolio</a>
  </body>
</html>
