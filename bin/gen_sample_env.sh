#!/usr/bin/env bash

ROOT="$(dirname $0)/.."
ENV_FILE="$ROOT/.env"

set -o xtrace

rm -f "$ROOT/.env.sample"
sed -e 's/=.*/=/g' "$ENV_FILE" > "$ROOT/.env.sample"
