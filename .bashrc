#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

fastfetch
#cat ~/ctrlf5ascii.txt
fish
alias ls='ls --color=auto'
alias grep='grep --color=auto'
alias firefox='flatpak run org.mozilla.firefox'
PS1='[\u@\h \W]\$ '
alias config='/usr/bin/git --git-dir=/home/rahul/.cfg/ --work-tree=/home/rahul'

export PATH=/home/rahul/bin:$PATH
