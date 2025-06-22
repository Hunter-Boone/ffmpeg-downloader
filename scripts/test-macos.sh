#!/bin/bash

# macOS App Testing Script
# Run this script to fix and test the ffmpeg-downloader app

APP_PATH="$1"

if [ -z "$APP_PATH" ]; then
    echo "Usage: $0 /path/to/ffmpeg-downloader.app"
    echo ""
    echo "Common paths:"
    echo "  /Applications/ffmpeg-downloader.app"
    echo "  ~/Downloads/ffmpeg-downloader.app"
    echo "  ./src-tauri/target/x86_64-apple-darwin/release/bundle/macos/ffmpeg-downloader.app"
    exit 1
fi

if [ ! -e "$APP_PATH" ]; then
    echo "❌ App not found at: $APP_PATH"
    exit 1
fi

echo "🔍 Checking app: $APP_PATH"
echo ""

echo "📋 Current attributes:"
xattr -l "$APP_PATH" 2>/dev/null || echo "No extended attributes"
echo ""

echo "🔒 Code signature status:"
codesign -dv "$APP_PATH" 2>&1 || echo "Not signed (this is expected)"
echo ""

echo "🛡️  Security assessment:"
spctl -a -t exec -vv "$APP_PATH" 2>&1
echo ""

echo "🔧 Removing quarantine flag..."
sudo xattr -rd com.apple.quarantine "$APP_PATH"
echo "✅ Quarantine removed"
echo ""

echo "🚀 Testing app launch..."
open "$APP_PATH"
echo "✅ App should now open without security warnings!"
echo ""

echo "💡 If you still see issues:"
echo "1. Right-click the app → Open → Open"
echo "2. System Preferences → Security & Privacy → Open Anyway"
echo "3. Contact us with the output above"