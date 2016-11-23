# -*- mode: ruby -*-
# vi: set ft=ruby :
# VBoxManage.exe setextradata loopback_default_1468417291272_18380 "VBoxInternal/Devices/VMMDev/0/Config/GetHostTimeDisabled" "1" //run on windows host
# C:\Program Files\Oracle\VirtualBox
# sudo service ntp stop
# sudo date "+%Y-%m-%d %H:%M:%S" -s "2016-07-12"
# sudo ntpd -gqx
# sudo service ntp start

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  #config.vm.box = "hashicorp/precise64"

  config.vm.box = "ubuntu/trusty64"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  config.vm.network :forwarded_port, guest: 22, host: 2230, id: "ssh"
  config.vm.network :forwarded_port, guest: 3000, host: 3006

	config.vm.synced_folder "./", "/vagrant"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |v|
    v.name = "node-api"

     v.memory = "1500"
  end

  config.vm.provision "shell", inline: <<-SHELL

   SHELL

    config.vm.provision :shell, path: "./install_scripts/init.sh"
    config.vm.provision :shell, path: "./install_scripts/node.sh"

end
