#!/usr/bin/env sh

find . -type d ! -path  '*node_modules*' ! -path '*.git*' | while read DIR
do
  if [[ $DIR =~ "__generated__" ]]
  then
    rm -rf ${DIR}
    echo "Removed ${DIR}"
  fi
done
