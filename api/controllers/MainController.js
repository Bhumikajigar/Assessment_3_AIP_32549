     var exec = require('child_process').exec;
     function puts(error, stdout, stderr) {
         sys.puts(stdout) 
     }
     exec("git reset --hard HEAD && git pull origin master && forever restart 0", puts);
   }
 },
	
};

