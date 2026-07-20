import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders all three portfolio artifact cards", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Timeline of AI Evolution/);
  assert.match(html, /World Cup Business Coach/);
  assert.match(html, /Machine Learning and Deep Learning/);
  assert.match(html, /href="\/artifacts\/machine-learning-vs-deep-learning\/"/);
  assert.match(html, /machine-learning-deep-learning-preview\.png/);
});

test("renders the machine learning and deep learning artifact page", async () => {
  const response = await render("/artifacts/machine-learning-vs-deep-learning/");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /House price prediction/);
  assert.match(html, /Autonomous driving/);
  assert.match(html, /Data structure/);
  assert.match(html, /Feature selection/);
  assert.match(html, /machine-learning-deep-learning-examples\.pdf/);
  assert.match(html, /machine-learning-deep-learning-examples\.docx/);
});

test("includes the original artifact files and thumbnail", async () => {
  await Promise.all([
    access(new URL("../public/artifacts/machine-learning-deep-learning-examples.docx", import.meta.url)),
    access(new URL("../public/artifacts/machine-learning-deep-learning-examples.pdf", import.meta.url)),
    access(new URL("../public/artifacts/machine-learning-deep-learning-preview.png", import.meta.url)),
  ]);
});
