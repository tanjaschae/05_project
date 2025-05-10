#!/usr/bin/env bash

set -e

docker build -t test-action .
docker run -e INPUT_NAME="Barbara" -e GITHUB_OUTPUT=/tmp/out test-action
