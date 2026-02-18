export default function SgenDocs() {
  return (
    <section className="docs">
      <div className="docs-inner">
        <h2>Documentation</h2>

        <p>
          The <b>SGEN SDK</b> is a lightweight Python client for submitting jobs to the SGEN
          gateway, checking job status, and retrieving results—all authenticated via an API key.
        </p>

        <h3>What problem it solves</h3>
        <p>
          SGEN takes a config (ex: <code>n</code> and <code>k</code>) and submits it to the gateway
          to run a server-side job. The SDK wraps the HTTP calls and returns structured JSON so you can
          integrate SGEN into scripts, pipelines, or internal tools without re-implementing request logic.
        </p>

        <h3>Who it’s for</h3>
        <ul>
          <li>Developers who want to programmatically submit and retrieve SGEN jobs from Python</li>
          <li>Automation / batch workflows (CI, cron jobs, data pipelines)</li>
          <li>Anyone who wants a simple “submit → poll → fetch results” workflow</li>
        </ul>

        <h3>What it can and can’t do</h3>
        <ul>
          <li><b>Can:</b> check service health, measure round-trip latency, submit a job, poll job status, fetch results</li>
          <li><b>Can’t:</b> run jobs locally (SGEN computation is server-side)</li>
          <li><b>Can’t:</b> bypass authentication (you must supply a valid API key)</li>
        </ul>

        <h3>Should I use this?</h3>
        <p>
          Use the SDK if you want a stable Python interface for SGEN and you don’t want to manage raw
          HTTP calls, headers, and error handling yourself.
        </p>

        <h3>Install</h3>
        <p>Install from your distribution method (PyPI / internal index / local install):</p>
        <pre className="code"><code>{`pip install sgen`}</code></pre>

        <h3>Quick start</h3>
        <p>
          Minimal workflow: load a config, submit, poll status until complete, then fetch results.
        </p>
        <pre className="code"><code>{`from sgen import load_config, quick_submit, status, results

API_KEY = "YOUR_API_KEY"
cfg = load_config("./config.json")

# 1) Submit a job
submit_out = quick_submit(cfg, API_KEY)
job_id = submit_out["job_id"]
print("Submitted job:", job_id)

# 2) Poll status until complete
while True:
    st = status(job_id, API_KEY)
    if st is not None:
        print("Status:", st)
        break

# 3) Fetch results
res = results(job_id, API_KEY)
print("Results:", res)`}</code></pre>

        <h3>Public functions</h3>
        <ul>
          <li><code>health_check()</code> — calls <code>/health</code> and returns JSON response</li>
          <li><code>round_trip_time()</code> — returns health-check RTT in milliseconds</li>
          <li><code>load_config(path)</code> — loads <code>config.json</code> (expects integer <code>n</code> and <code>k</code>)</li>
          <li><code>quick_submit(config, api_key)</code> — submits a job to <code>/submit</code>, returns JSON (includes <code>job_id</code>)</li>
          <li><code>status(job_id, api_key)</code> — calls <code>/status/&lt;job_id&gt;</code>; returns JSON when available, else <code>None</code></li>
          <li><code>results(job_id, api_key)</code> — calls <code>/results/&lt;job_id&gt;</code>; returns JSON when available, else <code>None</code></li>
        </ul>

        <h3>Troubleshooting</h3>
        <ul>
          <li><b>401/403:</b> your API key is missing/invalid or not authorized for the job</li>
          <li><b>None from status/results:</b> job is still running, not found, or not ready (poll again)</li>
          <li><b>500:</b> server-side error — check gateway logs or retry with backoff</li>
        </ul>
      </div>
    </section>
  );
}
