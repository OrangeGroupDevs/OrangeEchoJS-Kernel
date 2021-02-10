# OrangeEchoJS-Kernel
The OrangeEchoJS Kernel is the kernel that's used for the current version of OrangeEcho and will be updated if the kernel has any updates.
Feel free to use this kernel for your upcoming discord.js bot so that you don't have to create a bot from scratch.
Please do credit me in the *aboutbot and *credits commands for creating the kernel.
Remember to state the changes you made since the license requires that.

Several commands would be included, like a built-in help command, aboutbot command and aboutserver command. The help command would be divided into sections so if you want to change their names, remember to change them in the help embed's code and the function names in the command handler for easier debugging.

Modules are kept in the modules folder. It's plug and play. Create your own module with your own code and add the following lines to the bot.js code in order for it to run:
```
//module name
const modulename = require('./modules/module file name.js')
modulename.execute(what, you, need)
```
And that's it! Your module would be now running!

An example *setup command would also be included, feel free to use and modify that as well. Essential if you're making a moderation bot and need an interactive setup command. Note that this requires a dependency called quick.db to store all the IDs inputted into the setup command so that the bot remembers them. To install quick.db, you might need to install Visual Studio Build Tools (npm i windows-build-tools) for Windows and Xcode Debugging Tools for macOS. Linux users don't need to do any additional setup to install quick.db.

To view bot manager commands, input *help bot manager. These set of commands are hidden.

Happy coding!