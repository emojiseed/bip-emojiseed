.PHONY: test sort-json

test:
	pytest -q

sort-json:
	jq -S . mapping.json > mapping.sorted.json

