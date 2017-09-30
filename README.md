# Assessment_3_AIP_32549

a [Sails](http://sailsjs.org) application

Codeing Style guide For Assesment 3

1#Braces
Your opening braces go on the same line as the statement.

2#Variable and property names
Variables and properties should use lower camel case capitalization. They should also be descriptive. Single character variables and uncommon abbreviations should generally be avoided.

3#Constants
Constants should be declared as regular variables or static class properties, using all uppercase letters.

4#comments
 In form of pseudocode, Comments should explain the logic behind the code rather than the code itself.

5#Code dupilication 
Code duplication is bad style so for avoiding it is use a function and calling it, instead of copying its body.

6#indentation 
Indentation prefers braces placements or a block of code. It should be in correct manner and use of equal spacing. 

7#length of identifier 
shorter identifiers may be preferred as more expedient, because they are easier to type

8#Classes name
Classes	Class names should be nouns in UpperCamelCase So that it is easy to distinguish between classes and methods.

9#Variable name 
follow Sails JS Framework defined command line code to generate controller and models

10#URL
use req.url;

11#redirect
Sails allow as to redirect  the requesting user-agent to the given absolute or relative url by using 
return res.redirect(url);

12#use Blueprint API actions
find,findOne,create,update,destroy,populate,add,remove for operations

13#Use Blueprint routes
There are three types of blueprint routes in Sails: RESTful routes
