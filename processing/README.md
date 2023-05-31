# Source Code Processing

To process the source code, you need to install the dependencies and setup the virtual environment.

The source code is processed by the following steps:

1. The source code is enriched using Jupiter Notebook `01_code_enrichment.ipynb`
2. The enriched source code is indexed using Jupiter Notebook `02_code_indexing.ipynb`

## Setup the virtual environment

```bash
python -m venv ./venv
cd venv/Scripts
./activate
```

## Install the dependencies

```bash
cd ../..
pip install -r processing/requirements.txt
```
