import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("index.html is present and links to privacy policy", () => {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Health Coach<\/title>/);
  assert.match(html, /href="privacy\.html"/);
  assert.match(html, /read-only/i);
});

test("privacy.html describes limited use and Google permissions", () => {
  const html = readFileSync(new URL("../privacy.html", import.meta.url), "utf8");
  assert.match(html, /<title>Health Coach - Privacy Policy<\/title>/);
  assert.match(html, /Google API Services User Data Policy/i);
  assert.match(html, /myaccount\.google\.com\/permissions/);
});
