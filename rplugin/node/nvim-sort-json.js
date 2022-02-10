const { sortJSON } = require('../../lib/sort-json-utils')

module.exports = (plugin) => {
  plugin.registerCommand(
    'SortJSON',
    async () => {
      try {
        const options = await plugin.nvim.getVar('sort_json')
        const content = await plugin.nvim.buffer.getLines({
          start: 0,
          end: -1,
          strictIndexing: true,
        })

        await plugin.nvim.buffer.setLines(
          JSON.stringify(
            sortJSON(JSON.parse(content.join('')), ['asc'], options),
            undefined,
            2,
          ).split('\n'),
          {
            start: 0,
            end: -1,
            strictIndexing: true,
          },
        )
      } catch (err) {
        await plugin.nvim.outWrite(`${err}\n`)
      }
    },
    {
      sync: false,
    },
  )
}
