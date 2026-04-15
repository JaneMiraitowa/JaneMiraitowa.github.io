module Jekyll
  class CategoryPageGenerator < Generator
    safe true
    def generate(site)
      return unless site.layouts.key? 'category'
      dir = site.config['category_dir'] || 'category'
      site.categories.each do |category, posts|
        site.pages << CategoryPage.new(site, site.source, File.join(dir, category), category, posts)
      end
    end
  end

  class CategoryPage < Page
    def initialize(site, base, dir, category, posts)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'
      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'category.html')
      self.data['category'] = category
      self.data['posts'] = posts
    end
  end
end