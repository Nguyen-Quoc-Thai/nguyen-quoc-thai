#!/bin/bash
set -e

echo "Install package ..."

ROOT=`pwd`;

install(){
  cd $ROOT
  rm -rf node_modules
  npm ci
}

install
