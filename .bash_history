exit
crontab -e
export EDITOR=nvim
crontab -e
exit
exit
exit
exit
exit
. setenv
cmake install .
--cmake install .
cmake -install .
cmake --install .
exit
oci
oci setup config
ocid1.tenancy.oc1..aaaaaaaaoxuga5l7nvtblieigpul6mxdswkkakwdw7kvrtl4yc5hyxf53wua
echo -e "[DEFAULT]\ncompartment-id=ocid1.tenancy.oc1..aaaaaaaaoxuga5l7nvtblieigpul6mxdswkkakwdw7kvrtl4yc5hyxf53wua" > ~/.oci/oci_cli_rc
oci iam compartment get --output table --query "data.{CompartmentName:\"name\"}"
oci
oci --debug
oci debug
oci iam
oci iam compartment get --output table --query "data.{CompartmentName:\"name\"}"
nvim ~/.oci/oci_cli_rc 
nvim ~/.oci/oci_cli_rc 
oci iam compartment get --output table --query "data.{CompartmentName:\"name\"}"
oci iam compartment get --output table --query "data.{CompartmentName:\"name\"}" --debug
exit
exit
Adat MPR121 Capacitive Touch sensor test
MPR121 found!
Adafruit MPR121 Capacitive Touch sensor test
MPR121 found!
6 touched
6 released
6 touched
6 released
6 touched
6 released
sudo nigger
exit
exit
exit
exit
exit
gcc
exit
ls
venv/bin/activate
sudovenv/bin/activate
sudo venv/bin/activate
exit
a
b
c
d
e
f
g
exit
exit
exit
shutdown -r now
EXIT
exit
LV_BRANCH='release-1.3/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.3/neovim-0.9/utils/installer/install.sh)
LV_BRANCH='release-1.3/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.3/neovim-0.9/utils/installer/install.sh)
exitr
exit
fish
exit
Hyprland 
Hyprland 
exit
exit
exit
exit
exit
exit
pipe=$(mktemp -d)
trap 'rm -rf "$pipe"' 0 2 3 15
mkfifo "${pipe}/names"
pacman -Qi     | sed -n -e "
        /^Installed Size/ {
            # Clean up the noise.
            s/Installed Size//
            s/://
            s/\s//g

            # Expand item sizes.
            s/KiB/*1024/
            s/MiB/*1048576/
            s/GiB/*1073741824/
            s/B//
            p
        }
        /^Name/ {
            s/Name//
            s/://
            s/\s//g

            # Queue the names for later.
            w ${pipe}/names
        }
    "     | bc     | paste - "${pipe}/names"     | sort -g
