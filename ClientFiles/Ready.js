module.exports = (client) => {
  client.once('ready', () => {
    console.log('\n')
    console.log('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓'.bold.brightCyan)
    console.log('┃'.bold.brightCyan, `🍄 - Oie, Layssa está on-line.`, `   ┃`.bold.brightCyan)
    console.log('┃'.bold.brightCyan, `     Feito Por :`, `Nielsk#3398`.bold.red, `     ┃`.bold.brightCyan)
    console.log('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'.bold.brightCyan)
  })
}