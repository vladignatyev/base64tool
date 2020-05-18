# coding: utf-8

Gem::Specification.new do |spec|
    spec.name                    = "eon"
    spec.version                 = "1.0.0"
    spec.authors                 = ["Ivan"]
  
    spec.summary                 = %q{A flexible two-column Jekyll theme.}
    spec.homepage                = "https://github.com/ivanchromjak/jekyll-theme-eon"
    spec.license                 = "MIT"
  
    spec.metadata["plugin_type"] = "theme"
  
    spec.files                   = `git ls-files -z`.split("\x0").select do |f|
      f.match(%r{^(assets|_(data|includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
    end
  
    spec.add_runtime_dependency "jekyll", "~> 3.8"
    spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
    spec.add_runtime_dependency "jekyll-sitemap", "~> 1.2"
    spec.add_runtime_dependency "jekyll-gist", "~> 1.5"
    spec.add_runtime_dependency "jekyll-feed", "~> 0.11"
    spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.5"
    spec.add_runtime_dependency "jekyll-avatar", "~> 0.6"
    spec.add_runtime_dependency "jemoji", "~> 0.10"
  
    spec.add_development_dependency "bundler"
  end