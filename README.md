# FFmpeg Downloader

A cross-platform desktop application built with Tauri + React that automatically downloads and manages FFmpeg binaries for Windows, macOS, and Linux.

![Build Status](https://github.com/Hunter-Boone/ffmpeg-downloader/workflows/Build%20FFmpeg%20Downloader/badge.svg)

## ✨ Features

- 🖥️ **Cross-platform**: Works on Windows, macOS, and Linux
- 📥 **Smart Downloads**: Automatically detects your OS and downloads the correct FFmpeg binary
- 📊 **Real-time Progress**: Shows download and extraction progress
- ✅ **Binary Verification**: Tests the downloaded FFmpeg installation
- 🎨 **Modern UI**: Clean React interface with status indicators
- 🔒 **Secure**: Built with Tauri for enhanced security

## 🚀 Download

### Pre-built Binaries

Download the latest release for your platform:

- **Windows**: `.msi` installer or `.exe` standalone
- **macOS**: `.dmg` disk image or `.app` bundle
- **Linux**: `.deb` package, `.rpm` package, or `.AppImage` portable

[📥 Download Latest Release](https://github.com/Hunter-Boone/ffmpeg-downloader/releases/latest)

### macOS Installation

When you first open the app on macOS, you'll see a security prompt:

1. **"App was downloaded from the internet"** → Click **"Open"**
2. The app will open and work normally from then on
3. This is normal for unsigned apps and only happens once

**Note**: If you see "damaged and can't be opened" instead:

- **Right-click** the app → **Open** → **Open**
- Or run: `sudo xattr -rd com.apple.quarantine /path/to/ffmpeg-downloader.app`

### Supported FFmpeg Sources

- **Windows**: [FFmpeg-Builds](https://github.com/BtbN/FFmpeg-Builds) (Latest GPL build)
- **macOS**: [evermeet.cx](https://evermeet.cx/ffmpeg/) (Latest release)
- **Linux**: [FFmpeg-Builds](https://github.com/BtbN/FFmpeg-Builds) (Latest GPL build)

## 🛠️ Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Rust](https://rustup.rs/)
- Platform-specific dependencies:
  - **Linux**: `libgtk-3-dev libwebkit2gtk-4.0-dev libappindicator3-dev librsvg2-dev patchelf`
  - **macOS**: Xcode Command Line Tools
  - **Windows**: Visual Studio Build Tools

### Setup

```bash
# Clone the repository
git clone https://github.com/Hunter-Boone/ffmpeg-downloader.git
cd ffmpeg-downloader

# Install dependencies
npm install

# Run in development mode
npm run tauri dev

# Build for production
npm run tauri build
```

### GitHub Actions

This repository includes automated CI/CD that builds for all platforms:

- **Triggers**: Push to `main`, pull requests, manual dispatch, version tags
- **Platforms**: Windows, macOS, Linux
- **Outputs**: Native installers (.msi, .dmg, .deb, .AppImage)
- **Releases**: Automatic release creation for version tags

To create a release:

```bash
git tag v1.0.0
git push origin v1.0.0
```

## 📱 Usage

1. **Launch the application**
2. **Click "Download FFmpeg"** - The app will:
   - Detect your operating system
   - Download the appropriate FFmpeg binary
   - Extract and install it automatically
   - Show real-time progress
3. **Click "Test FFmpeg"** to verify the installation works

The downloaded FFmpeg binary will be stored in your application data directory and can be used by other applications.

## 🏗️ Architecture

- **Frontend**: React + TypeScript with Vite
- **Backend**: Rust with Tauri framework
- **Build System**: Cross-platform Tauri bundling
- **CI/CD**: GitHub Actions for automated builds

### Project Structure

```
ffmpeg-downloader/
├── src/                    # React frontend
│   ├── App.tsx            # Main application component
│   ├── App.css            # Styling
│   └── main.tsx           # React entry point
├── src-tauri/             # Rust backend
│   ├── src/
│   │   ├── lib.rs         # Main Tauri application logic
│   │   └── main.rs        # Entry point
│   ├── capabilities/      # Security permissions
│   └── tauri.conf.json    # Tauri configuration
├── .github/workflows/     # CI/CD automation
└── package.json           # Node.js dependencies
```

## 🔒 Security

This application follows Tauri's security best practices:

- **Sandboxed Environment**: Rust backend with controlled permissions
- **Limited API Access**: Only necessary system APIs are enabled
- **Content Security Policy**: Frontend is protected against XSS
- **Code Signing**: Releases are signed for enhanced security (when configured)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tauri](https://tauri.app/) - For the amazing framework
- [FFmpeg](https://ffmpeg.org/) - For the incredible multimedia framework
- [FFmpeg-Builds](https://github.com/BtbN/FFmpeg-Builds) - For Windows/Linux binaries
- [evermeet.cx](https://evermeet.cx/) - For macOS binaries

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Installation

### macOS Users

If you see a "damaged" or security warning when opening the app:

1. **Method 1**: Right-click the app → Select "Open" → Click "Open" in the dialog
2. **Method 2**: Go to System Preferences → Security & Privacy → Click "Open Anyway"
3. **Method 3** (Terminal): Run `xattr -d com.apple.quarantine /path/to/ffmpeg-downloader.app`

This happens because the app isn't signed with an Apple Developer certificate. The app is safe to use.

### Windows & Linux

No additional steps required - just run the installer.
