import fs from "fs";
import path from "path";
import Link from "next/link";

const repoRoot = path.resolve(process.cwd(), "..");
const docsRoot = path.join(repoRoot, "_docs");
const githubBase = "https://github.com/joshshepherd/movemental/tree/main/_docs";

type PillarMeta = {
  slug: string;
  title: string;
  summary: string;
  owner?: string;
  lastReview?: string;
};

function parseMeta(slug: string): PillarMeta {
  const readmePath = path.join(docsRoot, slug, "README.md");
  if (!fs.existsSync(readmePath)) {
    return {
      slug,
      title: slug,
      summary: "README missing. Add one to surface details here.",
    };
  }

  const content = fs.readFileSync(readmePath, "utf8");
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const ownerMatch = content.match(/- \*\*Owner\*\*:\s*(.+)/i);
  const reviewMatch = content.match(/- \*\*Last Review\*\*:\s*(.+)/i);
  const scopeMatch = content.match(/##\s+Scope[\s\S]*?\n([\s\S]*?)(?:\n##|$)/i);

  const summarySource = scopeMatch ? scopeMatch[1] : content.split("\n").slice(1).join("\n");
  const summary = summarySource
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 2)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return {
    slug,
    title: titleMatch?.[1] ?? slug,
    summary: summary || "Scope details will appear here once the README is populated.",
    owner: ownerMatch?.[1]?.trim(),
    lastReview: reviewMatch?.[1]?.trim(),
  };
}

function getPillars(): PillarMeta[] {
  if (!fs.existsSync(docsRoot)) {
    return [];
  }

  const entries = fs
    .readdirSync(docsRoot, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith("."))
    .map((dirent) => dirent.name)
    .sort();

  return entries.map((slug) => parseMeta(slug));
}

export default function DocsIndexPage() {
  const pillars = getPillars();

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Knowledge Center</p>
          <h1 className="text-4xl font-semibold text-white">Movemental Documentation Pillars</h1>
          <p className="text-base text-slate-300">
            These entries are read directly from the `_docs` directory so you always see the latest owners, scope, and
            review dates. Select a pillar to read its README inside the app or jump to the GitHub source.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.slug}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-500/5 transition hover:-translate-y-1 hover:border-indigo-400/60 hover:bg-white/10"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-indigo-300">{pillar.slug}</p>
                <h2 className="text-2xl font-semibold text-white">{pillar.title}</h2>
                <p className="text-sm leading-relaxed text-slate-200">{pillar.summary}</p>
                <dl className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-300">
                  {pillar.owner && (
                    <div>
                      <dt className="text-slate-400">Owner</dt>
                      <dd className="font-medium text-slate-100">{pillar.owner}</dd>
                    </div>
                  )}
                  {pillar.lastReview && (
                    <div>
                      <dt className="text-slate-400">Last review</dt>
                      <dd className="font-medium text-slate-100">{pillar.lastReview}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link
                  href={`/docs/${pillar.slug}`}
                  className="inline-flex items-center rounded-full border border-indigo-300/60 px-4 py-2 text-indigo-100 transition hover:bg-indigo-500/20"
                >
                  View README
                </Link>
                <a
                  href={`${githubBase}/${pillar.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-slate-100 transition hover:border-white/60"
                >
                  Open in GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
