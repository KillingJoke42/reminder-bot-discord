# reminder-bot-discord: A #reports channel reminder sender built for SINS development team

Welcome to source for the annoying-bot-discord! It is an attempt to create more engagement in the #reports channel setup on the discord server used by the SINS development team.

# Contribute

One can start by cloning the repository and create a local copy:
```
git clone https://github.com/KillingJoke42/reminder-bot-discord.git
cd reminder-bot-discord
```

Request administrative privilages and heroku collaboration to KillingJoke42: https://github.com/KillingJoke42 <br>
Before pushing to repository, please generate a pull-request with KillingJoke42 as reviewer to ensure continutity

# File Structure

Repository consists of:

<ul>
  <li> node_modules: Handles all dependancies that fuel bot.js, running the node.js framework
  <li> auth.json: Possesses the token for discord BOT. DO NOT MAKE REPO PUBLIC UNITL THIS IS SENT TO A .gitignore
  <li> bot.js: Code for the BOT itself. 
  <li> package.json: Version info and dependencies-pointer for node.js
  <li> package-lock.json: lockfile after npm install
  <li> Procfile: worker directives for Heroku support
</ul>

# Add bot to your server

<b>Step 1</b>: Use the following link: https://discordapp.com/oauth2/authorize?&client_id=CLIENTID&scope=bot&permissions=8<br>
<b>Step 2</b>: For CLIENTID kindly request KillingJoke42<br>
<b>Step 3</b>: Link will prompt login details and server to integrate to. Select your server and solve CAPTCHA<br>
<b>Step 4</b>: Enjoy :-D

# Use bot

To use bot first ensure:
<ul>
  <li> BOT is online. First method is to check BOT status in Discord. Second is to "check logs" in Heroku Activity window for the following lines:
  
```
2020-07-07T21:34:26.718855+00:00 app[web.1]: {"message":"Connected","level":"info"}
2020-07-07T21:34:26.719433+00:00 app[web.1]: {"message":"Logged in as: ","level":"info"}
2020-07-07T21:34:26.719550+00:00 app[web.1]: {"message":"annoying-reminder-bot - (729728947809550437)","level":"info"}
```

  <li> Multiple instances of the heroku session do not exist. BOT may reply multiple times in such a scenario
</ul>

Once these are pointers are confirmed, one may use `!remind` to generate reminder message! Change the message in bot.js by editing the following line (Line 33):<br>
```
bot.sendMessage({to: channelID, message: 'YOUR_MESSAGE_HERE'});
```
