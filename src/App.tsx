import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";
import "./App.css";

interface DownloadProgress {
  status: string;
  message: string;
}

function App() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<DownloadProgress | null>(null);
  const [message, setMessage] = useState("");
  const [testResult, setTestResult] = useState("");

  useEffect(() => {
    const unlisten = listen<DownloadProgress>("download-progress", (event) => {
      setDownloadProgress(event.payload);
      if (event.payload.status === "complete") {
        setIsDownloading(false);
      }
    });

    return () => {
      unlisten.then(fn => fn());
    };
  }, []);

  async function downloadFFmpeg() {
    setIsDownloading(true);
    setMessage("");
    setTestResult("");
    setDownloadProgress(null);
    
    try {
      const result = await invoke<string>("download_ffmpeg");
      setMessage(result);
    } catch (error) {
      setMessage(`Error: ${error}`);
    } finally {
      setIsDownloading(false);
    }
  }

  async function testFFmpeg() {
    setTestResult("");
    try {
      const result = await invoke<string>("test_ffmpeg");
      setTestResult(result);
    } catch (error) {
      setTestResult(`Error: ${error}`);
    }
  }

  return (
    <main className="container">
      <h1>FFmpeg Downloader</h1>
      <p>Download and test FFmpeg for your operating system</p>

      <div className="download-section">
        <button 
          onClick={downloadFFmpeg} 
          disabled={isDownloading}
          className="download-button"
        >
          {isDownloading ? "Downloading..." : "Download FFmpeg"}
        </button>

        {downloadProgress && (
          <div className="progress-info">
            <p><strong>Status:</strong> {downloadProgress.status}</p>
            <p>{downloadProgress.message}</p>
          </div>
        )}

        {message && (
          <div className={`message ${message.includes("Error") ? "error" : "success"}`}>
            {message}
          </div>
        )}
      </div>

      <div className="test-section">
        <button 
          onClick={testFFmpeg}
          className="test-button"
        >
          Test FFmpeg
        </button>

        {testResult && (
          <div className={`test-result ${testResult.includes("Error") ? "error" : "success"}`}>
            {testResult}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
