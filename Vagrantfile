# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/bionic64"
  config.vm.hostname = "wildboard"
  config.vm.box_check_update = true
  config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.synced_folder "./dist", "/wildboard", mount_options: [ "ro" ]

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "512"
  end

  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y nginx
  SHELL

end
