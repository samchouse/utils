#!/bin/sh

# gpg --quiet --batch --yes --decrypt --passphrase="$DECRYPT_PASSWORD" --output ./.github/secrets/utils_dist.p12 ./.github/secrets/utils_dist.p12.gpg
# gpg --quiet --batch --yes --decrypt --passphrase="$DECRYPT_PASSWORD" --output ./.github/secrets/utils.mobileprovision ./.github/secrets/utils.mobileprovision.gpg

gpg --quiet --batch --yes --decrypt --passphrase="$DECRYPT_PASSWORD" --output ./.github/secrets/utils.jks ./.github/secrets/utils.jks.gpg
