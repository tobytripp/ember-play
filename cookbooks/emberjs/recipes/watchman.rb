home = ENV["HOME"]
package "git"

git "#{home}/watchman" do
  repository "https://github.com/facebook/watchman.git"
  action :sync
  revision "v3.3.0"
  notifies :run, "bash[build-watchman]"
end

bash "build-watchman" do
  code <<-SH
  cd #{home}/watchman
  ./autogen.sh
  ./configure
  make
  sudo make install
  SH
  not_if { system "which watchman" }
end
