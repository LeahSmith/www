<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style1.css">
</head>
<body>

<h3>Section One: Introduction to Java</h3><br>

<p1>What is Java?</p1>
<ul2>
<li>Java is a programming language</li>
<li>Java can be used to write:<br>
	&nbsp&nbsp&nbsp&nbsp-Applications<br>
	&nbsp&nbsp&nbsp&nbsp-Applets</li>
<li>It is a relatively simple language to understand</li>
<li>It is an object-orientated language</li>
<li>Platform-independent because of the JVM<br>
 “write once, run anywhere”</li>
</ul2>
<div id="wrapper">
        <h1><a href="Intro.php">Try it here</a></h1>
        <form id="code" action="#" method="post">
            <div>
                <label for="lang">Language:</label>
                <select name="lang" id="lang >                   
		        
				<option value="2">C++(gcc-4.5.1)</option>
				<option value="1" selected="selected">Java</option>
				<<option value="3">C++0x (gcc-4.5.1)</option>
                                    </select>
            </div>
            
            <div>
                <label for="source">Source Code:</label>
                <textarea cols="35" rows="10" name="source" id="source"></textarea>
            </div>
            
            <div>
                <label for="input">Input: <span class="description">(Data that will be given to the program on the stdin.)</span></label>
                <textarea cols="35" rows="3" name="input" id="input"></textarea>
            </div>

            <div>
                <input type="submit" name="submit" value="Submit" />
            </div>
        </form>
        
        <div id="response">
            <div class="meta"></div>
            <div class="output"></div>
        </div>
        

<div id="container">
 <div id="content"></div>
</div>
<div id="footer">Home</div>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
<script src="script.js"></script>
<!-- <script src="../jquery/jquery-1.4.1.min.js"></script> -->
</body>

</html>
