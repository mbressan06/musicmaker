source 'https://rubygems.org'
ruby '2.3.0'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.8'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

gem 'rails-i18n'

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

gem 'activeadmin',  github: 'activeadmin'
gem 'face_of_active_admin'
gem 'inherited_resources', '~> 1.4.1'
gem "devise"

gem "faker"
gem 'newrelic_rpm', '~> 3.9'
gem 'hoptoad_notifier', '2.4.11'
gem 'rails_12factor'
gem 'pg'

gem 'slim'

gem 'html2slim'


group :development do
  gem 'mechanize','2.7.3'
end

group :production do

  gem 'unicorn'

  # Enable gzip compression on heroku, but don't compress images.
  gem 'heroku-deflater'


  gem 'rack-throttle'
  gem 'rack-cache'
end

group :development, :test do
  gem 'factory_girl_rails'
  gem 'rspec-rails', '~> 3.0.0'
  gem 'spork', '~> 1.0rc'
end

group :test do
  gem "shoulda"
  gem "shoulda-matchers"
  gem "webmock", "~> 1.11.0"
  gem "webrat"
  gem 'simplecov', :require => false
end

