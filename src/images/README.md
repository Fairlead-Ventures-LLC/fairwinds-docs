# Images Directory

Place your images here and reference them in your markdown files.

If you paste images from Typora, configure Typora to copy images directly into this folder:

- Typora -> Settings -> Image
- When Insert Local Images -> Copy image to custom folder
- Custom folder -> `/Users/alex/sailgame/fairwinds-docs/src/images`

You can also run `npm run images:normalize` to auto-copy local image links into this folder and rewrite links to `/images/...`.

## Usage

### Basic Image

```markdown
![Alt text](/images/your-image.png)
```

### Image with Caption

```markdown
![Screenshot of the race map](/images/race-map.png)
*Figure 1: The race map showing wind vectors and current position*
```

### Supported Formats

- PNG (.png)
- JPEG (.jpg, .jpeg)
- GIF (.gif)
- SVG (.svg)
- WebP (.webp)

## Best Practices

- Use descriptive filenames (e.g., `weather-overlay-example.png`)
- Optimize images before adding them (compress to reduce file size)
- Use PNG for screenshots and diagrams
- Use JPEG for photos
- Add alt text for accessibility
