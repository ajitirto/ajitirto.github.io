# Variables
JEKYLL = bundle exec jekyll
BUILD_DIR = _site
PORT = 4000

# Default target
all: build

# Build the site
build:
	$(JEKYLL) build

# Serve the site locally
serve:
	$(JEKYLL) serve --port $(PORT) --livereload

# Clean the build directory
clean:
	rm -rf $(BUILD_DIR)

# Build and serve the site
preview:
	$(JEKYLL) serve --port $(PORT) --drafts --livereload

# Deploy the site (example using GitHub Pages)
deploy:
	git add .
	git commit -m "Deploying site"
	git push origin main

# Display help information
help:
	@echo "Available make commands:"
	@echo "  make build    - Build the site"
	@echo "  make serve    - Serve the site locally with live reload"
	@echo "  make clean    - Clean the build directory"
	@echo "  make preview  - Serve with drafts"
	@echo "  make deploy   - Deploy the site to GitHub Pages"
	@echo "  make help     - Show this help information"

.PHONY: all build serve clean preview deploy help
