/**
 * MainController
 *
 * @description :: Server-side logic for managing Mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	gitDeploy: function (req, res) {
  if(req.param('pw')=="< yourSecretPassword >") {
     var sys = require('sys')
     var exec = require('child_process').exec;
     function puts(error, stdout, stderr) {
         sys.puts(stdout) 
     }
     exec("git reset --hard HEAD && git pull origin master && forever restart 0", puts);
   }
 },
	
};

