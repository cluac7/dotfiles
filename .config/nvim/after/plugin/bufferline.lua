local bl = require("bufferline")

bl.setup{
    options = {
        mode = "buffers",
        offsets = {{
            filetype = "NvimTree",
            text = "Files",
            highlight = "Directory",
            seperator = true,
        }}
    }
}

vim.keymap.set("n", "<S-tab>", ":BufferLineCycleNext<cr>")
