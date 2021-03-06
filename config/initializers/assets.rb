# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.

Rails.application.config.assets.precompile += %w( style.css )
Rails.application.config.assets.precompile += %w( bootstrap.css )
Rails.application.config.assets.precompile += %w( responsive.css )
Rails.application.config.assets.precompile += %w( prettyPhoto.css )
Rails.application.config.assets.precompile += %w( supersized.css )
Rails.application.config.assets.precompile += %w( supersized.shutter.css )
Rails.application.config.assets.precompile += %w( jquery.jscrollpane.css )
Rails.application.config.assets.precompile += %w( defaults.js )