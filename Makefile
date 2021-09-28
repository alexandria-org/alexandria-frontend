
upload:
	yarn build ; cd dist ; aws s3 cp --recursive --acl=public-read . s3://alexandria.org ; \
	aws s3 cp --acl=public-read index.html s3://alexandria.org/about
