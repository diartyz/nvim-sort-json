# neovim SortJSON

## What is it?

Alphabetically sorts the keys in JSON objects.

> **Please take care using this** - I've tried to ensure it won't invalidate your JSON. But, as it has to parse > sort > stringify, there is a chance it'll lose something. It should be fine for plain JSON.

## Install

- Install neovim node client

  ```
  npm i -g neovim
  ```

- Install via vim-plug

  ```
  Plug 'diartyz/nvim-sort-json'
  ```

## Usage

- Run `:SortJSON` to sort JSON objects.

## Settings

- You can override the sort order (note: this applies to all levels and overrides reverse sort too). Add this to your preferences (settings.json):

  ```
  let g:sort_json = {
      \ 'orderOverride': [
      \   'name',
      \   'version',
      \ ],
      \ }
  ```

- You can underride the sort order (note: this applies to all levels and underrides reverse sort too). Add this to your preferences (settings.json):
  ```
  let g:sort_json = {
      \ 'orderUnderride': [
      \   'dependencies',
      \   'devDependencies',
      \ ],
      \ }
  ```
