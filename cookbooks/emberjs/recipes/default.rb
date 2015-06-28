#
# Cookbook Name:: emberjs
# Recipe:: default
#
include_recipe "nodejs"
include_recipe "emberjs::watchman"

bash "update nodejs crap" do
  code <<-SH
    sudo npm install -g n
    sudo n stable
    sudo npm install -g npm
  SH

  not_if do
    major, minor = `node -v`.gsub( /^[^0-9]*/, "" ).split "."
    major == 0 && minor >= 12
  end
end

def npm_install( package, command=package )
  execute "install #{package}" do
    command "sudo npm install -g #{package}"
    not_if { system "which #{command}" }
  end
end

npm_install "bower"
npm_install "phantomjs"
npm_install "ember-cli", "ember"
