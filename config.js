const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Harare,Zimbabwe."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "central/Africa";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "263719500452" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263719500452";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,263xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,263xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "263715812117,263xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_19_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDg0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDY0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxODQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAzNixcbiAgICAgICAgMjA2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMWE4bHl3eDZvRXMwSXMzbEVkekJZVUpUZVEwZ1pjM3EyNE9QS3ZNSkxLcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWl85aHZZVFVUR0dTZkxWQmFCTzNPQVwiLFxuICBcInBob25lSWRcIjogXCI3ZWUxY2NjMi1kMjE5LTQ2ODEtYmM2MC1hY2FkOThkYTY5ZjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMTYwLFxuICAgICAgMjI5LFxuICAgICAgMjUxLFxuICAgICAgNTEsXG4gICAgICAxMjQsXG4gICAgICA5OCxcbiAgICAgIDEyNyxcbiAgICAgIDQzLFxuICAgICAgMTc4LFxuICAgICAgMTk2LFxuICAgICAgMTQwLFxuICAgICAgMTUxLFxuICAgICAgMjExLFxuICAgICAgMTI3LFxuICAgICAgNDksXG4gICAgICAyMTAsXG4gICAgICA0OSxcbiAgICAgIDE5MSxcbiAgICAgIDEwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDkwLFxuICAgICAgNTAsXG4gICAgICAzMCxcbiAgICAgIDE2MCxcbiAgICAgIDkwLFxuICAgICAgMjA2LFxuICAgICAgNzYsXG4gICAgICAxNzgsXG4gICAgICAxOSxcbiAgICAgIDE1MyxcbiAgICAgIDE3MCxcbiAgICAgIDI1MSxcbiAgICAgIDc0LFxuICAgICAgMjQ3LFxuICAgICAgMCxcbiAgICAgIDIxNyxcbiAgICAgIDE2MCxcbiAgICAgIDE3NCxcbiAgICAgIDE5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLNkNHM0pZWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE5NTAwNDUyOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NzkxODQxNjc5NzkxMDoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPVDlvSXdERUpTaXhiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjRyY0EzaElVSmZxeHBPd0MzV2hHeDZhSTcwZER3TWF5WnMvdnVRQzNrbU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiazlsVm11MUcxSCtVWitKeGZDYmFNSnNXN1ZDdUFQelhEeE5DTGZ0dlBScHJhYzI0RFlMUEpIcUk1b3N3VXI0WmtsVnNvYjFnMGVIaUhMM3dkaktiQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT3JGNmsxdEJEMU9wTlNtYlY2RG5vOXA1bzR2ZnB5QVUwRDkvTHY2QWZIenJEOG41dnhjeksyUExkbXhjbEhJOGZ3Zkc5OGg4MjJHVmk2SVlDK21HaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE5NTAwNDUyOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3MDIzNjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQdTBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB1MC5qc29uIjogIntcImtleURhdGFcIjpcIkt4Ri9tR1czYmdaTEtoczJpcEpYQVhQbWZOR2w0Yk1BY3VLWkovMk9Rbm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODMxMDEyNTgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg3MDIzNjcwNjZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x CyberRoy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
