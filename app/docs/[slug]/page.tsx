import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";

const repoRoot = path.resolve(process.cwd(), "..");
const docsRoot = path.join(repoRoot, "_docs");
const githubBase = "https://github.com/joshshepherd/movemental/tree/main/_docs";

marked.use({ mangle: false, headerIds: true });

type Params = { slug: string };

type FileEntry = {
  name: string;
  isDirectory: boolean;
  href: string;
};

function getAllSlugs(): string[] {
  if (!fs.existsSync(docsRoot)) return [];
  return fs
    .readdirSync(docsRoot, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith("."))
    .map((dirent) => dirent.name)
    .sort();
}

function listEntries(dir: string, slug: string): FileEntry[] {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith(".") && entry.name !== "README.md")
    .map((entry) => ({
      name: entry.name,
      isDirectory: entry.isDirectory(),
      href: `${githubBase}/${slug}/${entry.name}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function readReadme(slug: string) {
  const pillarDir = path.join(docsRoot, slug);
  if (!fs.existsSync(pillarDir) || !fs.statSync(pillarDir).isDirectory()) {
    return null;
  }

  const readmePath = path.join(pillarDir, "README.md");
  if (!fs.existsSync(readmePath)) {
    return {
      slug,
      title: slug,
      html: `<p>No README.md found. Create one under _docs/${slug} to populate this view.</p>`,
      entries: listEntries(pillarDir, slug),
    };
  }

  const markdown = fs.readFileSync(readmePath, "utf8");
  const titleMatch = markdown.match(/^#\s+(.+)$/m);
  const html = marked.parse(markdown);

  return {
    slug,
    title: titleMatch?.[1] ?? slug,
    html,
    entries: listEntries(pillarDir, slug),
  };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function PillarPage({ params }: { params: Params }) {
  const data = readReadme(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">{data.slug}</p>
            <h1 className="mt-2 text-4xl font-semibold text-white">{data.title}</h1>
          </div>
          <Link
            href="/docs"
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-100 transition hover:border-white/60"
          >
            ← Back to Pillars
          </Link>
        </div>

        <article
          className="prose prose-invert max-w-none rounded-2xl border border-white/10 bg-white/5 p-6"
          dangerouslySetInnerHTML={{ __html: data.html }}
        />

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Files & Subdirectories</h2>
            <a
              href={`${githubBase}/${data.slug}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-indigo-200 hover:text-indigo-100"
            >
              View in GitHub ↗
            </a>
          </div>
          {data.entries.length === 0 ? (
            <p className="mt-3 text-sm text-slate-300">No additional files yet.</p>
          ) : (
            <ul className="mt-4 space-y-2">
              {data.entries.map((entry) => (
                <li key={entry.name} className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 text-sm">
                  <span className="font-medium text-slate-100">
                    {entry.isDirectory ? "📁" : "📄"} {entry.name}
                  </span>
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-200 hover:text-indigo-100"
                  >
                    Open ↗
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
