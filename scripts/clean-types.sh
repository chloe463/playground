#!/usr/bin/env sh

find . -type f ! -path  '*node_modules*' ! -path '*.git*' | while read FILE
do
  if [[ $FILE =~ "__generated__" ]]
  then
    rm ${FILE}
    echo "Removed ${FILE}"
  fi
done
