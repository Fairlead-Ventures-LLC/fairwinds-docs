#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT_DIR = process.cwd();
const SRC_DIR = path.join(ROOT_DIR, "src");
const IMAGES_DIR = path.join(SRC_DIR, "images");
const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".svg",
  ".avif",
]);

function listMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listMarkdownFiles(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

function fileHash(filePath) {
  const data = fs.readFileSync(filePath);
  return crypto.createHash("sha1").update(data).digest("hex");
}

function sanitizeFilename(name) {
  return name
    .normalize("NFKD")
    .replace(/[^\x00-\x7F]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function ensureUniqueDestination(sourcePath, preferredName) {
  const parsed = path.parse(preferredName);
  const ext = parsed.ext || path.extname(sourcePath).toLowerCase();
  const base = parsed.name || "image";
  let candidate = `${base}${ext}`;
  let index = 2;

  while (true) {
    const full = path.join(IMAGES_DIR, candidate);
    if (!fs.existsSync(full)) {
      return candidate;
    }
    if (fileHash(full) === fileHash(sourcePath)) {
      return candidate;
    }
    candidate = `${base}-${index}${ext}`;
    index += 1;
  }
}

function splitMarkdownTarget(rawTarget) {
  const trimmed = rawTarget.trim();
  const match = trimmed.match(/^(\S+)(\s+["'][\s\S]*["'])?$/);
  if (!match) {
    return { url: trimmed, suffix: "" };
  }
  return {
    url: match[1],
    suffix: match[2] || "",
  };
}

function isRemoteTarget(url) {
  return (
    /^https?:\/\//i.test(url) ||
    /^data:/i.test(url) ||
    /^mailto:/i.test(url) ||
    url.startsWith("#")
  );
}

function normalizeProjectUrl(rawUrl) {
  const decoded = decodeURI(rawUrl).replace(/^<|>$/g, "");
  if (/^\/images\//.test(decoded)) {
    return decoded;
  }
  return decoded;
}

function resolveLocalSourcePath(mdFilePath, url) {
  const cleaned = normalizeProjectUrl(url);

  if (path.isAbsolute(cleaned) && fs.existsSync(cleaned)) {
    return cleaned;
  }

  if (cleaned.startsWith("/")) {
    const fromProjectSrc = path.join(SRC_DIR, cleaned.replace(/^\/+/, ""));
    if (fs.existsSync(fromProjectSrc)) {
      return fromProjectSrc;
    }
    return null;
  }

  const fromMdFile = path.resolve(path.dirname(mdFilePath), cleaned);
  if (fs.existsSync(fromMdFile)) {
    return fromMdFile;
  }

  return null;
}

function toSiteImageUrl(sourcePath) {
  const originalExt = path.extname(sourcePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.has(originalExt)) {
    return null;
  }

  const originalName = path.basename(sourcePath);
  const sanitized = sanitizeFilename(originalName);
  const safeName = sanitized || `image${originalExt}`;
  const destinationName = ensureUniqueDestination(sourcePath, safeName);
  const destinationPath = path.join(IMAGES_DIR, destinationName);

  if (path.resolve(sourcePath) !== path.resolve(destinationPath)) {
    fs.copyFileSync(sourcePath, destinationPath);
  }

  return `/images/${destinationName}`;
}

function normalizeMarkdownFile(filePath) {
  const original = fs.readFileSync(filePath, "utf8");
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let modified = false;
  let replacements = 0;

  const next = original.replace(imageRegex, (full, altText, rawTarget) => {
    const { url, suffix } = splitMarkdownTarget(rawTarget);
    if (!url || isRemoteTarget(url)) {
      return full;
    }

    const cleanedUrl = normalizeProjectUrl(url);
    const fromImagesFolder = cleanedUrl.match(
      /(?:^\/images\/|(?:^|\/)src\/images\/|(?:^|\/)images\/)([^/?#]+)$/i
    );
    if (fromImagesFolder) {
      const filename = path.basename(fromImagesFolder[1]);
      const siteUrl = `/images/${filename}`;
      const updated = `![${altText}](${siteUrl}${suffix})`;
      if (updated !== full) {
        modified = true;
        replacements += 1;
      }
      return updated;
    }

    const sourcePath = resolveLocalSourcePath(filePath, cleanedUrl);
    if (!sourcePath) {
      return full;
    }

    const siteUrl = toSiteImageUrl(sourcePath);
    if (!siteUrl) {
      return full;
    }

    const updated = `![${altText}](${siteUrl}${suffix})`;
    if (updated !== full) {
      modified = true;
      replacements += 1;
    }
    return updated;
  });

  if (!modified) {
    return { modified: false, replacements: 0 };
  }

  fs.writeFileSync(filePath, next, "utf8");
  return { modified: true, replacements };
}

function resolveInputFiles(cliArgs) {
  if (cliArgs.length === 0) {
    return listMarkdownFiles(SRC_DIR);
  }

  const files = [];
  for (const arg of cliArgs) {
    const absolute = path.resolve(ROOT_DIR, arg);
    if (fs.existsSync(absolute) && fs.statSync(absolute).isFile()) {
      files.push(absolute);
    }
  }
  return files;
}

function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error("Missing src directory. Run from docs repository root.");
    process.exit(1);
  }

  fs.mkdirSync(IMAGES_DIR, { recursive: true });

  const files = resolveInputFiles(process.argv.slice(2));
  let touchedFiles = 0;
  let totalReplacements = 0;

  for (const file of files) {
    const result = normalizeMarkdownFile(file);
    if (result.modified) {
      touchedFiles += 1;
      totalReplacements += result.replacements;
      console.log(`updated ${path.relative(ROOT_DIR, file)} (${result.replacements} links)`);
    }
  }

  console.log(
    `image normalization complete: ${touchedFiles} files updated, ${totalReplacements} links normalized`
  );
}

main();
