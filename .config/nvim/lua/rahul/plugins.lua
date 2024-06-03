return {
	{
		'nvim-telescope/telescope.nvim', tag = '0.1.6',
		dependencies = { 'nvim-lua/plenary.nvim' }
	},
	{
		"catppuccin/nvim", name = "catppuccin", priority = 1000, lazy = false,
		opts = { transparent_background = true, },
		config = function(_, opts)
			require("catppuccin").setup(opts)
			vim.cmd.colorscheme "catppuccin-macchiato"
		end,
	},
	{"nvim-treesitter/nvim-treesitter", build = ":TSUpdate",},
	{
		"tpope/vim-fugitive",
		config = function()
			vim.keymap.set("n", "<leader>gs", vim.cmd.Git)
		end,
	},
	{'VonHeikemen/lsp-zero.nvim', branch = 'v3.x'},
	{'williamboman/mason.nvim'},
	{'williamboman/mason-lspconfig.nvim'},
	{'neovim/nvim-lspconfig'},
	{'hrsh7th/cmp-nvim-lsp'},
	{'hrsh7th/nvim-cmp'},
	{'L3MON4D3/LuaSnip'},
    {
        'NvChad/nvim-colorizer.lua',
        config = function ()
            require 'colorizer'.setup()
            require("colorizer").attach_to_buffer(0, { mode = "background", css = true})
        end
    },
    {
        'nvim-lualine/lualine.nvim',
        dependencies = { 'nvim-tree/nvim-web-devicons' },
        options = {theme = 'ayu_mirage'},
        config = function ()
            require('lualine').setup()
        end,
    },
    {
        "nvim-tree/nvim-tree.lua",
        version = "*",
        lazy = false,
        dependencies = {
            "nvim-tree/nvim-web-devicons",
        },
        config = function()
            require("nvim-tree").setup {}
        end,
    },
    {
        'akinsho/bufferline.nvim', version = "*", lazy = false,
        dependencies = 'nvim-tree/nvim-web-devicons',
    },
    {"github/copilot.vim"},
}
