const fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_46_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg1LFxuICAgICAgICA5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDY2LFxuICAgICAgICA1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAzLFxuICAgICAgICA4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDczLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM3LFxuICAgICAgICAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMjUwLFxuICAgICAgICA5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY4LFxuICAgICAgICA5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgODUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTksXG4gICAgICAgIDY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDgxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5cVp6UkRwMS9mMlgzQU5UQzJNYlRHOVR0WlVTd2FGUTdadUNTbXlUaFBRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIzNTU4Nzk0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkU2RjQzQjg5OTYzMDlGQzdBNUZCODdEQjcyNTYwMzVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMjY3MjE3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlUyQmYtWm01U2FDWG1zZFJqc2l3S2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjE0OTRjMGUtYjg4Yi00OWMzLThjNjItZDA1YTk3ZDI3MmYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgMTIxLFxuICAgICAgMjQ5LFxuICAgICAgMTksXG4gICAgICA2NCxcbiAgICAgIDEzNyxcbiAgICAgIDEzLFxuICAgICAgMjQzLFxuICAgICAgMTcsXG4gICAgICA3MixcbiAgICAgIDE1MixcbiAgICAgIDIzNCxcbiAgICAgIDE3OCxcbiAgICAgIDIwMSxcbiAgICAgIDEyNixcbiAgICAgIDE2NCxcbiAgICAgIDE4LFxuICAgICAgNTUsXG4gICAgICAxMDgsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICAxMTEsXG4gICAgICAyMyxcbiAgICAgIDE3NSxcbiAgICAgIDg0LFxuICAgICAgMTEzLFxuICAgICAgODUsXG4gICAgICA3NCxcbiAgICAgIDIxOSxcbiAgICAgIDE2MSxcbiAgICAgIDI5LFxuICAgICAgMjUxLFxuICAgICAgMTU4LFxuICAgICAgMTUzLFxuICAgICAgNDAsXG4gICAgICAxNzQsXG4gICAgICAxNDEsXG4gICAgICAxODAsXG4gICAgICAxNDksXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzUVhUN0ZNOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjM1NTg3OTQxOjc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDY5NjE3MDY1NTc1NDk6NzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVdoeHNzQkVLNlFoN2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUanBtbFR6VERZVEZOVTF1MWF5SVRJZ3Nhc2F2eHVmTHNKM1BDRDRQYkQwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxwWkdMZytkOXE1V3hBTEZmRGNCbGdSYnlkUFh4L2pXQTdqTmZKTEp3Vi9MSUYyMTJkRUhkWWh3cStDNytDZnpDdjdtWnBPMC9ES2x2b2wzRjZNK0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpVeVJtTlNueTYvVys4SStWZUNqdUFvem9va1EvNzRNT2hIQnZzMWN0VHg4RDUrQWc0SWx6T25Bb3k0Z2R2NXoxQytsWm5GSXg4R0lscFJwUmIzMWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzIzNTU4Nzk0MTo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMjY3MjEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjJaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKMlouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOQyt0bFo1OVZ0VWtiZjFKa2R3YnExRjNDUWgrU3ZvdFExVkN5WTJaaGpvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQyNjg3MzAyNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
