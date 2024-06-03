local fzf = require('fzf-lua')

vim.keymap.set('n', '<leader>pf', fzf.files, {})
vim.keymap.set('n', '<leader>ps', fzf.live_grep_native, {})
vim.keymap.set('n', '<leader>pr', fzf.live_grep_resume, {})
vim.keymap.set('n', '<leader>fs', fzf.lgrep_curbuf, {})

vim.keymap.set('n', '<leader>gf', fzf.git_files, {})
vim.keymap.set('n', '<leader>gs', fzf.git_status, {})
vim.keymap.set('n', '<leader>gl', fzf.git_commits, {})

vim.keymap.set('n', '<leader>f', fzf.buffers, {})

vim.keymap.set('n', '<C-S-p>', fzf.commands, {})
