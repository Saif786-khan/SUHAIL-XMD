upconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923235587941";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_50_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxODksXG4gICAgICAgIDQ4LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk3LFxuICAgICAgICA2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQyLFxuICAgICAgICA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA1LFxuICAgICAgICA2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDMsXG4gICAgICAgIDQ2LFxuICAgICAgICA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM5LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDcwLFxuICAgICAgICA1NyxcbiAgICAgICAgNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDU4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg2LFxuICAgICAgICA3MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib3Q4Q0hublJvWmswZ0xVVDgydmVTOEhvcDR3U2I5VlFURElrTlZ0bVozOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMC1uZHcwLWhUSGF0N095bFRaYmc5UVwiLFxuICBcInBob25lSWRcIjogXCJmYTk5NjM2ZC0zOTc2LTQ3MTgtOTkzOS1iODAzODA0ODU0YjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAxMzAsXG4gICAgICAxMjUsXG4gICAgICA3NSxcbiAgICAgIDE3MixcbiAgICAgIDIyMSxcbiAgICAgIDIxOCxcbiAgICAgIDE3OCxcbiAgICAgIDk0LFxuICAgICAgNTMsXG4gICAgICA1OSxcbiAgICAgIDIyOSxcbiAgICAgIDIzNCxcbiAgICAgIDMyLFxuICAgICAgMTA3LFxuICAgICAgMjA3LFxuICAgICAgMTU4LFxuICAgICAgMjQwLFxuICAgICAgMTkxLFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMTI0LFxuICAgICAgMTEwLFxuICAgICAgMTIzLFxuICAgICAgNTYsXG4gICAgICAyMTksXG4gICAgICAxODksXG4gICAgICAzMCxcbiAgICAgIDY4LFxuICAgICAgOTQsXG4gICAgICAxMyxcbiAgICAgIDE1MCxcbiAgICAgIDEsXG4gICAgICAxMjMsXG4gICAgICAyNDcsXG4gICAgICAxNzcsXG4gICAgICA5NSxcbiAgICAgIDk0LFxuICAgICAgMTQsXG4gICAgICAyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0TEszQURIV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjM1NTg3OTQxOjc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDY5NjE3MDY1NTc1NDk6NzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWVoeHNzQkVNYm1oN2tHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUanBtbFR6VERZVEZOVTF1MWF5SVRJZ3Nhc2F2eHVmTHNKM1BDRDRQYkQwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtmL1plRnJLT29xR1YzWk5BSk9qdjd4aVd2SHdoeWt3Ynd3dERLU2ZiL3dKMnA4bEJlbkdZb3hSSmZ1d2gzSHM2NTZvWWZXOG9PSDVFL05odzk1S0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitXU3RmYzduMkxtaDVDMk5HcUFpdnc3bDVJYzZnbmszZGZKK3Rha200N3YrWTFLbDdYY1ZSNTNQVnV4bWQvQWwxdHpldndvZFgyUHIwM2VrL29UcWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzIzNTU4Nzk0MTo3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMjc4MjE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjJaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKMlouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOQyt0bFo1OVZ0VWtiZjFKa2R3YnExRjNDUWgrU3ZvdFExVkN5WTJaaGpvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQyNjg3MzAyNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
