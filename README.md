# FairWinds Documentation

Official documentation for FairWinds Virtual Sailing, built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Fairlead-Ventures-LLC/fairwinds-docs.git
cd fairwinds-docs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:8080` with live reload enabled.

## 📝 Writing Documentation

### Adding a New Page

1. Create a new Markdown file in the `src/` directory
2. Add front matter at the top:
```markdown
---
layout: base.html
title: Your Page Title
---

# Your Page Title

Your content here...
```

3. The page will automatically be built and included in the site

### Markdown Tips for Typora

This project is optimized for editing with [Typora](https://typora.io/), a beautiful markdown editor:

- Use standard Markdown syntax
- Front matter (YAML between `---`) is supported
- Code blocks with syntax highlighting work out of the box
- Images can be placed in `src/assets/` and referenced with `/assets/image.png`

### Directory Structure

```
fairwinds-docs/
├── src/
│   ├── _layouts/       # HTML templates
│   ├── _includes/      # Reusable components
│   ├── _data/          # Global data files
│   ├── css/            # Stylesheets
│   ├── assets/         # Images, files, etc.
│   ├── index.md        # Home page
│   ├── getting-started/
│   └── api/
├── _site/              # Generated output (gitignored)
├── .eleventy.js        # Eleventy configuration
└── package.json
```

## 🛠️ Available Scripts

- `npm start` - Start development server with live reload
- `npm run build` - Build the site for production
- `npm run debug` - Run build with debug output

## 🚢 Deployment

This site automatically deploys to GitHub Pages when you push to the `main` branch.

The deployment workflow:
1. Builds the site using Eleventy
2. Deploys the `_site/` directory to GitHub Pages
3. Site is available at: https://fairlead-ventures-llc.github.io/fairwinds-docs/

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Test locally: `npm start`
5. Commit your changes: `git commit -am 'Add new feature'`
6. Push to the branch: `git push origin feature/your-feature`
7. Submit a pull request

## 📄 License

Apache 2.0 - See [LICENSE](LICENSE) for details.

## 🔗 Links

- [FairWinds App](https://fairwinds.app)
- [GitHub Repository](https://github.com/Fairlead-Ventures-LLC/fairwinds-docs)
- [Eleventy Documentation](https://www.11ty.dev/docs/)
