# dotfiles
me hyprland dotfiles, *heavily* inspired by [zeroruka's dotfiles](https://github.com/zeroruka/dotfiles/tree/main)

- **OS**: Arch Linux
- **Compositor**: [Hyprland](https://github.com/hyprwm/Hyprland)
- **Bar**: [Waybar](https://github.com/Alexays/Waybar)
- **Notifications**: [dunst](https://github.com/dunst-project/dunst)
- **Wallpaper Loader**: [swww](https://github.com/Horus645/swww)
- **Wallpaper**: `.config/wallpapers`
- **Terminal**: [kitty](https://github.com/kovidgoyal/kitty)
- **Shell**: [fish](https://fishshell.com/)
- **Prompt**: [starship](https://starship.rs/)
- **Launcher**: [rofi](https://github.com/davatorium/rofi)
- **Font**: [Nerd Font](https://www.nerdfonts.com/)

## installation
uhh fuck is there an easy way to list everything u need
im just gonna say this for now (very likely incomplete)

These are for the sexy implementation
```
hyprland-git waybar-hyprland-git cava python kitty fish rofi xdg-desktop-portal-hyprland-git grim slurp starship jq dunst wl-clipboard swaylock-effects-git btop pavucontrol swww polkit-kde-agent ttf-jetbrains-mono-nerd playerctl socat hyprpicker-git inotify-tools-git rofimoji noto-color-emoji webcord catppuccin-cursors-mocha catppuccin-gtk-theme-mocha catppuccin-mocha-grub-theme-git noisetorch-git kvantum lxappearance
```
bare minimum
```
hyprland-git waybar-hyprland-git python kitty fish rofi xdg-desktop-portal-hyprland-git grim slurp starship jq dunst wl-clipboard polkit-kde-agent
```
fuck off
```hyprland-git xdg-desktop-portal-hyprland-git grim slurp starship dunst polkit-kde-agent```

 choose a list to install
1. Follow the [Quick Start Instructions](https://wiki.hyprland.org/)
2. clone me shit:
```bash
git clone https://github.com/RS-dev7/dotfiles.git
cd dotfiles
cp -r ./config/* ~/.config
```
3. open kvantum and set everything to catppuccin
4. also open lxappearance and set catppuccin everywhere. set [this cursor (install it following the instuctions)](https://github.com/catppuccin/cursors) plus lxappearance should get some things kvantum misses iirc (firefox still wont fucking follow it tho)
5. also open ur grub config and set the theme to the catppuccin one and remake the config (this is the only step i consider optional since arguably better themes exist. if u dont follow the rest like a dog go kys u uncultured cuck)
6. do Spicetify now i gues by following the [Spicetify wiki](https://spicetify.app/docs/getting-started/). Make sure that the marketplace is also installed.
7. Then, install the [Bloom](https://github.com/nimsandu/spicetify-bloom) theme using the marketplace, and apply the comfy varient of the theme.
9. get vscodium ✨[catppuccin it](https://github.com/catppuccin/vscode)✨
10. now if u rly want to replicate my system i would also reccomend a few extra things:
  -  make multiple esps`
  -  install like every part of arch on a diff drive
  -  fuck around with fstab
  -  make a few people cry at ur arch installation

