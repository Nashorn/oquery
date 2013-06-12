oquery
======
Lite-weight json object querying (oquery) interface. Specify deep json queries, joins and filtering at less than 1k.

# Introduction
Query deeply nested objects and joins across multiple array 
relationships using normal javascript syntax. 

- No string/token parsing algorithms
- No AST(Abstract Syntax Tree) Logic
- No custom language/DSL syntax to learn

# Features
- 100% pure Javascript query syntax
- Simple architecture, few parts
- High preformance*
- Extensible/overridable prototypal design
- Query deeply nested objects and arrays
- Join and filter across multiple arrays


# Installation
- Step 1, include a reference to 'sampledata.js' for testing only
- Step 2, include a reference to oquery.js

ex:
```xml
<html>
	<head>
		<script src="sampledata.js"></script>
		<script src="oquery.js"></script>
	</head>
	<body></body>
</html>
```

# Usage
- Where clause
<pre>
	<code>
	var result = profile.data.info.userInfo.ideaList
	    .where("$.ideaTitle.indexOf('with') >= 0")
	</code>
</pre>


- Joins
<pre>
	<code>
	var accounts = [
    	{userId:"Sandy007", accountType:"registered"}
	];
	
var result = profile.data.info.userInfo.ideaList
    .where("$.ideaTitle.indexOf('with') >= 0")
    .join(accounts).as("account", "$.userName == account.userId")
	</code>
</pre>


- Collection
<pre>
	<code>
	var accounts = [
    	{userId:"Sandy007", accountType:"registered"}
	];
	
var result = profile.data.info.userInfo.ideaList
    .where("$.ideaTitle.indexOf('with') >= 0")
    .join(accounts).as("account", "$.userName == account.userId")
	</code>
</pre>


- Sorting
<pre>
	<code>
	var accounts = [
    	{userId:"Sandy007", accountType:"registered"}
	];
	
var result = profile.data.info.userInfo.ideaList
    .where("$.ideaTitle.indexOf('with') >= 0")
    .join(accounts).as("account", "$.userName == account.userId")
    .sort()
	</code>
</pre>


