# Personal site (example)

A tiny static personal website with a live Google Doc embedded in it.
Two files do all the work: `index.html` and `styles.css`.

## Put it online with GitHub Pages

1. Create a new repository on GitHub.
   - For a site at `https://YOURNAME.github.io`, name the repo exactly
     `YOURNAME.github.io`.
   - Any other repo name also works; the site just lives at a sub-path
     (see step 4).
2. Upload `index.html`, `styles.css`, and this `README.md` to the repo
   (drag them into the "Add file → Upload files" box, then commit).
3. In the repo: **Settings → Pages**. Under "Build and deployment",
   set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**.
   Save.
4. Wait about a minute, then refresh the Pages settings page. It will show
   your live URL:
   - `https://YOURNAME.github.io` (if you used the special repo name), or
   - `https://YOURNAME.github.io/REPO-NAME/` otherwise.

## Make the embedded doc actually show up

The embed uses a `/preview` URL, not `/edit`. This is already set up in
`index.html`. The only thing you control is sharing:

1. Open your Google Doc.
2. **Share → General access → Anyone with the link → Viewer.**
3. If the doc stays private, the page shows a Google sign-in box instead of
   the document. Viewer access is what fixes that.

## Swap in your own doc

In `index.html`, find the `<iframe>` and replace the long id in its `src`.
From your normal doc URL:

```
https://docs.google.com/document/d/THIS_LONG_ID/edit?tab=t.0
```

take `THIS_LONG_ID` and drop it into:

```
https://docs.google.com/document/d/THIS_LONG_ID/preview
```

Keep `/preview` at the end. Done.
