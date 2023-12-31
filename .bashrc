#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

hyfetch
fish

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '
alias config='/usr/bin/git --git-dir=/home/rahul/.cfg/ --work-tree=/home/rahul'

export PATH=/home/rahul/bin:$PATH
