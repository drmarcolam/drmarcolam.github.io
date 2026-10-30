import sys, html
cid, title, sub, intro = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
n = sys.argv[5]
out = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#1B365D">
<meta name="description" content="{html.escape(title)}: City of Llama Falls case, Version 2 (fixed figures).">
<title>{html.escape(title)} (V2) | ACCT 635</title>
<link rel="stylesheet" href="../chapter-walkthroughs/walkthrough.css">
<link rel="stylesheet" href="../laurel-hollow/laurel-hollow.css">
<link rel="stylesheet" href="engine.css">
</head>
<body>
<a class="skip" href="#main">Skip to main content</a>
<nav class="crumbs noprint" aria-label="Breadcrumb"><a href="../../../index.html">Courses</a> &nbsp;/&nbsp; <a href="../../acct-635.html">ACCT 635</a> &nbsp;/&nbsp; Llama Falls Case (V2) &nbsp;/&nbsp; {html.escape(title.split(':')[0])}</nav>
<header class="banner"><div class="banner-inner">
  <p class="eyebrow">ACCT 635 &middot; City of Llama Falls &middot; Version 2 &middot; Fiscal year ending June 30, 2027</p>
  <h1 class="title">{html.escape(title)}</h1>
  <p class="sub">{html.escape(sub)}</p>
</div></header>
<main id="main" tabindex="-1">
<p class="print-line" id="printNameLine"></p>
<div class="key-idea noprint"><h2 class="obj-h">How this page works</h2>
<p>{html.escape(intro)}</p>
<ul>
<li>Enter amounts in whole dollars, with no dollar signs. Pick each account from the list; the title must match the chart of accounts.</li>
<li>Use one line per account. Debit lines have an amount in Debit; credit lines have an amount in Credit.</li>
<li>Choose <strong>Check entry</strong> to score an entry. An entry earns 1 point when every line is right. Editing it later removes the point until you check it again.</li>
<li><strong>Show model entry</strong> reveals the answer and the entry then earns no points.</li>
<li>Everyone works the same figures. Your work stays in this browser; nothing is sent anywhere.</li>
</ul></div>
<div class="idbar noprint">
  <div><label for="studentName">Name</label><input type="text" id="studentName" autocomplete="name"></div>
  <div><label for="studentId">Student ID</label><input type="text" id="studentId" autocomplete="off"></div>
</div>
<div id="scorePanel" role="status" aria-live="polite" aria-label="Score"></div>
<div id="app"></div>
<section class="finish noprint" aria-labelledby="fin-h">
<h2 id="fin-h">Finish</h2>
<p>When you are done, choose <strong>Print / Save as PDF</strong>. Your name, Student ID, score and everything you entered print on the PDF. Upload that PDF to the Week {n} Deliverable in Canvas.</p>
<div class="btn-row"><button id="printBtn" type="button">Print / Save as PDF</button><button id="resetBtn" type="button" class="secondary">Clear all my work</button></div>
</section>
</main>
<script src="data/{cid}.js"></script>
<script src="engine.js"></script>
</body>
</html>
'''
open(f'/home/claude/build/v2/site/{cid}.html', 'w').write(out)
