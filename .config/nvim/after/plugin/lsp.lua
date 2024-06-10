require('lsp-zero')
require('lspconfig').intelephense.setup({})

-- LSP
local lsp = require("lsp-zero")
lsp.on_attach(function(client, bufnr)
  -- see :help lsp-zero-keybindings
  -- to learn the available actions
  lsp.default_keymaps({buffer = bufnr})
end)



-- COMPLETIONS
local cmp = require('cmp')
local cmp_mappings = lsp.defaults.cmp_mappings({
	["<C_Space>"] = cmp.mapping.complete(),
})
local cmp_action = require('lsp-zero').cmp_action()
local cmp_format = require('lsp-zero').cmp_format({details = true})

require('luasnip.loaders.from_vscode').lazy_load()

cmp.setup({
  sources = {
    {name = 'nvim_lsp'},
    {name = 'luasnip'},
  },
  mapping = cmp.mapping.preset.insert({
    ['<C-f>'] = cmp_action.luasnip_jump_forward(),
    ['<C-b>'] = cmp_action.luasnip_jump_backward(),
    ['<C-p>'] = cmp.mapping.select_prev_item(),
    ['<C-n>'] = cmp.mapping.select_next_item(),

  }),
  snippet = {
    expand = function(args)
      require('luasnip').lsp_expand(args.body)
    end,
  },
  --- (Optional) Show source name in completion menu
  formatting = cmp_format,
})



-- MASON
require('mason').setup({})
require('mason-lspconfig').setup({
  ensure_installed = {"rust_analyzer", "clangd"},
  handlers = {
    function(server_name)
      require('lspconfig')[server_name].setup({})
    end,
  },
})
