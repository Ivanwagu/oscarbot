/*let handler  = async (m, { conn, text }) => {
  let chats = Object.entries(conn.chats).filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '')
  for (let id of chats) conn.copyNForward(id, content)
  conn.reply(m.chat, `_Berhasil mengirim pesan broadcast ke ${chats.length} chat_`, m)
}*/
let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
  let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
  let thumb = 'https://telegra.ph/file/b344d0c10f1f7f47ed657.jpg'
  let chats = Object.entries(conn.chats).filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text )
  for (let id of chats) /*conn.send2ButtonLoc*/conn.send2Button(id, `${text}`.trim(), `\n╭─[ *_JAROTBOTZ_* ]─✧
╰─────···\n${time}`, 'Owner', '.owner2', 'Menu', '.menu', /*'Donasi', '.ds'*/)
  conn.reply(m.chat, `_Berhasil mengirim pesan broadcast ke ${chats.length} chat_`, m)
}
handler.help = ['broadcast', 'bcbutton', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bcbutton|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

//
// B U A T - B U T T O N - A J A H
//
