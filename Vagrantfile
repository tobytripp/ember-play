# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 4200, host: 4200

  config.vm.provider "virtualbox" do |vb|
    vb.memory = 4 * 1024
    vb.cpus   = 2
  end

  # vagrant plugin install vagrant-berkshelf
  config.berkshelf.enabled = true
  config.vm.provision :chef_solo do |chef|
    # Berksfile subverts cookbook_path
    chef.add_recipe "emberjs"
  end
end
