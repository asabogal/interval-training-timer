namespace :start do
  task :production do
    exec 'YARN_CONFIG_PRODUCTION=true yarn run postinstall && foreman start'
  end
end

