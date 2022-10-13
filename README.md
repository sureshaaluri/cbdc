![CI Status](https://github.com/mit-dci/opencbdc-tx/actions/workflows/ci.yml/badge.svg)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](docs/code_of_conduct.md)

# Introduction

OpenCBDC is a technical research project focused on answering open questions surrounding central bank digital currencies (CBDCs).

This repository includes the core transaction processor for a hypothetical, general purpose central bank digital currency (CBDC).
Initially, this work was derived from Project Hamilton (a collaboration between the MIT Digital Currency Initiative (DCI) and the Federal Reserve Bank of Boston (FRBB)).

For higher-level conceptual explanations, as well as findings and conclusions related to this code, see [our research paper](https://dci.mit.edu/opencbdc).

Initially, we focused our work on achieving high transaction throughput, low latency, and resilience against multiple geographical datacenter outages without significant downtime or any data loss.
The design decisions we made to achieve these goals will help inform policy makers around the world about the spectrum of tradeoffs and available options for CBDC design.

# Important News

**NOTE:** In cases where there are significant changes to the repository that might need manual intervention down-stream (or other important updates), we will [make a NEWS post](NEWS.md).

# Architecture

We explored two system architectures for transaction settlement, both based on an [unspent transaction output (UTXO)](https://en.wikipedia.org/wiki/Unspent_transaction_output) data model and transaction format.
Both architectures implement the same schema representing an [unspent hash set (UHS)](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-May/015967.html) abstraction.
One architecture provides [linearizability](https://en.wikipedia.org/wiki/linearizability) of transactions, whereas the other only provides [serializability](https://en.wikipedia.org/wiki/Serializability).
By relaxing the ordering constraint, the peak transaction throughput supported by the system scales horizontally with the number of nodes, but the transaction history is unavailable making the system harder to audit retroactively.
Both architectures handle multiple geo-distributed datacenter outages with a [recovery time objective (RTO)](https://en.wikipedia.org/wiki/Disaster_recovery#Recovery_Time_Objective) of under ten seconds and a [recovery point objective (RPO)](https://en.wikipedia.org/wiki/Disaster_recovery#Recovery_Point_Objective) of zero.

1. "Atomizer" architecture
    - Materializes a total ordering of all transactions settled by the system in a linear sequence of batches.
    - Requires vertical scaling as peak transaction throughput is limited by the performance of a single system component.
    - Maximum demonstrated throughput ~170K transactions per second.
    - Geo-replicated latency <2 seconds.
1. "Two-phase commit" architecture
    - Transaction history is not materialized and only a relative ordering is assigned between directly related transactions.
    - Combines [two-phase commit (2PC)](https://en.wikipedia.org/wiki/Two-phase_commit_protocol) and [conservative two-phase locking (C2PL)](https://en.wikipedia.org/wiki/Conservative_two-phase_locking) to create a system without a single bottlenecked component where peak transaction throughput scales horizontally with the number of nodes.
    - Maximum demonstrated throughput ~1.7M transactions per second.
    - Geo-replicated latency <1 second.

Read the [architecture guide](docs/architecture.md) for a detailed description of the system components and implementation of each architecture.

# Contributing

You can [sign up](https://dci.mit.edu/opencbdc-interest) to receive updates from technical working groups and to learn more about our work.
If you would like to join our technical discussions and help workshop proposals, you can join our [Zulip chat](https://opencbdc.zulipchat.com/register/).

For more information on how to contribute, please see our [Contribution Guide](docs/contributing.md)!

# Get the Code

1. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. Clone the repository (including submodules)
    - `git clone https://github.com/sureshaaluri/cbdc.git`
3. Move to directory 'cbdc/opencbdc-tx' using the command
    - cd cbdc/opencbdc-tx

# Build Backend (opencbdc-tx)

Use these directions if you want to build the source on your machine.
If you just want to run the system, see "Run the Code" below.

1. Install the necessary libraries and resources
  ```terminal
  # ./scripts/configure.sh
  ```
2. Run the build
  ```terminal
  # ./scripts/build.sh
  ```

## macOS
Note that if you have not already installed the xcode cli tools you will need to:

```terminal
# xcode-select --install
```

# Run the Code

The easiest way to compile the code and run the system locally is using [Docker](https://www.docker.com).

## Setup Docker

* [Install Docker](https://docs.docker.com/get-docker/)
* [Install docker-compose](https://docs.docker.com/compose/install/)

Don't forget to run the docker daemon!

## Launch the System

**Note:** You will need to both run the system and interact with it; you can either use two shells, or you can add the `--detach` flag when launching the system (note that it will then remain running till you stop it, e.g., with `docker stop`).
Additionally, you can start the atomizer architecture by passing `--file docker-compose-atomizer.yml` instead.

_The commands below will build a new image every time that you run it.
You can remove the `--build` flag after the image has been built to avoid rebuilding.
To run the system with our pre-built image proceed to the [next section](#launch-the-system-with-a-pre-built-image) for the commands to run._

1. Run the System
   ```terminal
   # docker compose --file docker-compose-2pc.yml up --build
   ```
1. Launch a container in which to run wallet commands (use `--network atomizer-network` instead of `--network 2pc-network` if using the atomizer architecture)
   <!-- ```terminal
   # docker run --network 2pc-network -ti opencbdc-tx /bin/bash
   ``` -->

   ```terminal
   # docker run --network 2pc-network --name client_cli -d opencbdc-tx tail -f /dev/null
   ```

## Launch the System With a Pre-built Image

We publish new docker images for all commits to `trunk`.
You can find the images [in the Github Container Registry](https://github.com/mit-dci/opencbdc-tx/pkgs/container/opencbdc-tx).

**Note:** You must use `docker compose` (not `docker-compose`) for this approach to work or you will need to pull the image manually `docker pull ghcr.io/mit-dci/opencbdc-tx`.
Additionally, you can start the atomizer architecture by passing `--file docker-compose-atomizer.yml --file docker-compose-prebuilt-atomizer.yml` instead.

1. Run the system
    ```terminal
    # docker compose --file docker-compose-2pc.yml --file docker-compose-prebuilt-2pc.yml up --no-build
    ```
1. Launch a container in which to run wallet commands (use `--network atomizer-network` instead of `--network 2pc-network` if using the atomizer architecture)
   <!-- ```terminal
   # docker run --network 2pc-network -ti ghcr.io/mit-dci/opencbdc-tx /bin/bash
   ``` -->

   ```terminal
   # docker run --network 2pc-network --name client_cli -d ghcr.io/mit-dci/opencbdc-tx tail -f /dev/null
   ```

## Testing

Running Unit & Integration Tests

1. Build the container
   ```terminal
   # docker build . -t opencbdc-tx
   ```
2. Run Unit & Integration Tests
   ```terminal
   # docker run -ti opencbdc-tx ./scripts/test.sh
   ```



# Middleware

Open the new tab in terminal and follow the instructions below

1. Move to the middleware directory using the command.

```terminal
# cd middleware
```

2. Install node modules using the command.

```terminal
# npm install
```

3. Run the middleware using the command.

```terminal
# npm start
```



# FrontEnd

Open the new tab in terminal and follow the instructions below

1. Move to the frontend directory using the command.

```terminal
# cd frontend
```

2. Install node modules using the command.

```terminal
# npm install
```

3. Run the frontend using the command.

```terminal
# npm start
```

