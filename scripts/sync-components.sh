#!/bin/bash
# Re-sync UI components, fonts, and images from sme-web GitLab repo.
# Requires SSH access to gitlab.px019.net.

set -e

REPO="git@gitlab.px019.net:sme/sme-web.git"
WORK_DIR=$(mktemp -d)
DEST="$(cd "$(dirname "$0")/.." && pwd)"

echo "Cloning sme-web (sparse)..."
git clone --filter=blob:none --sparse "$REPO" "$WORK_DIR" --quiet

cd "$WORK_DIR"
git sparse-checkout set \
  src/shared/ui/vivid-ui \
  src/shared/ui/components \
  src/shared/ui/hooks \
  src/shared/lib/hooks \
  public/fonts \
  public/images

echo "Syncing files to $DEST ..."

# UI core (vivid-ui design system)
rm -rf "$DEST/src/shared/ui/vivid-ui"
cp -R src/shared/ui/vivid-ui "$DEST/src/shared/ui/vivid-ui"

# Domain components
rm -rf "$DEST/src/shared/ui/components"
cp -R src/shared/ui/components "$DEST/src/shared/ui/components"

# UI hooks
rm -rf "$DEST/src/shared/ui/hooks"
cp -R src/shared/ui/hooks "$DEST/src/shared/ui/hooks"

# Shared lib hooks
rm -rf "$DEST/src/shared/lib/hooks"
mkdir -p "$DEST/src/shared/lib"
cp -R src/shared/lib/hooks "$DEST/src/shared/lib/hooks"

# Fonts
rm -rf "$DEST/public/fonts"
mkdir -p "$DEST/public"
cp -R public/fonts "$DEST/public/fonts"

# Images
rm -rf "$DEST/public/images"
cp -R public/images "$DEST/public/images"

echo ""
echo "=== Sync complete ==="
echo "vivid-ui:   $(find "$DEST/src/shared/ui/vivid-ui" -type f | wc -l | tr -d ' ') files"
echo "components: $(find "$DEST/src/shared/ui/components" -type f | wc -l | tr -d ' ') files"
echo "hooks:      $(find "$DEST/src/shared/ui/hooks" -type f | wc -l | tr -d ' ') files"
echo "lib/hooks:  $(find "$DEST/src/shared/lib/hooks" -type f | wc -l | tr -d ' ') files"
echo "fonts:      $(find "$DEST/public/fonts" -type f | wc -l | tr -d ' ') files"
echo "images:     $(find "$DEST/public/images" -type f | wc -l | tr -d ' ') files"

rm -rf "$WORK_DIR"

echo ""
echo "NOTE: Re-apply DefaultThemeProvider patch if needed (usePreferences → themeName prop)."
