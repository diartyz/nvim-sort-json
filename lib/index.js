// function activate(context) {
//   var commands = [
//     vscode.commands.registerCommand('sortJSON.sortJSON', sortJSON.sortNormal),
//     vscode.commands.registerCommand(
//       'sortJSON.sortJSONReverse',
//       sortJSON.sortReverse,
//     ),
//     vscode.commands.registerCommand(
//       'sortJSON.sortJSONKeyLength',
//       sortJSON.sortKeyLength,
//     ),
//     vscode.commands.registerCommand(
//       'sortJSON.sortJSONKeyLengthReverse',
//       sortJSON.sortKeyLengthReverse,
//     ),
//     vscode.commands.registerCommand(
//       'sortJSON.sortJSONAlphaNum',
//       sortJSON.sortAlphaNum,
//     ),
//     vscode.commands.registerCommand(
//       'sortJSON.sortJSONAlphaNumReverse',
//       sortJSON.sortAlphaNumReverse,
//     ),
//     vscode.commands.registerCommand(
//       'sortJSON.sortJSONValues',
//       sortJSON.sortValues,
//     ),
//     vscode.commands.registerCommand(
//       'sortJSON.sortJSONValuesReverse',
//       sortJSON.sortValuesReverse,
//     ),
//     vscode.commands.registerCommand('sortJSON.sortJSONType', sortJSON.sortType),
//     vscode.commands.registerCommand(
//       'sortJSON.sortJSONTypeReverse',
//       sortJSON.sortTypeReverse,
//     ),
//   ]

//   commands.forEach(function (command) {
//     context.subscriptions.push(command)
//   })

//   context.subscriptions.push(
//     vscode.languages.registerCodeActionsProvider(
//       { language: 'json', scheme: 'file' },
//       new FixAllProvider(),
//       FixAllProvider.metadata,
//     ),
//   )
// }

module.exports = (plugin) => {
  plugin.setOptions({
    dev: true,
  })

  plugin.registerCommand(
    'EchoMessage',
    async () => {
      try {
        await plugin.nvim.outWrite('Dayman (ah-ah-ah) \n')
      } catch (err) {
        console.error(err)
      }
    },
    {
      sync: false,
    },
  )

  plugin.registerFunction(
    'SetLines',
    () => {
      return plugin.nvim
        .setLine('May I offer you an egg in these troubling times')
        .then(() => console.log('Line should be set'))
    },
    { sync: false },
  )

  plugin.registerAutocmd(
    'BufEnter',
    async (fileName) => {
      await plugin.nvim.buffer.append('BufEnter for a JS File?')
    },
    { sync: false, pattern: '*.js', eval: 'expand("<afile>")' },
  )
}
