#! /usr/bin/env bash

# Replace filename references in build/out directory
find out -type f -name "*" -print0 | xargs -0 sed -i '' -e 's/_buildManifest.js/build-manifest.js/g'
find out -type f -name "*" -print0 | xargs -0 sed -i '' -e 's/_ssgManifest.js/ssg-manifest.js/g'

rename_manifest() {
  local directory="$1"
  local old_suffix="$2"
  local new_suffix="$3"

  # Loop through each matching file and rename
  for file in $(find "${directory}" -type f -name "*${old_suffix}"); do
    dir=$(dirname "${file}")
    base=$(basename "${file}")
    mv "${file}" "${dir}/${base//$old_suffix/$new_suffix}"
  done
}

directory='out/_next/static/'

# Rename _buildManifest.js to build-manifest.js
rename_manifest "${directory}" '_buildManifest.js' 'build-manifest.js'

# Rename _ssgManifest.js to ssg-manifest.js
rename_manifest "${directory}" '_ssgManifest.js' 'ssg-manifest.js'