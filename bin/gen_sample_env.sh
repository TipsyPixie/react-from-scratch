#!/usr/bin/env bash

ROOT="$(dirname $0)/.."
ENV_FILE="$ROOT/.env"
SAMPLE_ENV_FILE="$ROOT/.env.sample"

set -o xtrace

rm -f "$SAMPLE_ENV_FILE"
sed -E -e 's/=.+/=/g' "$ENV_FILE" > "$SAMPLE_ENV_FILE"
