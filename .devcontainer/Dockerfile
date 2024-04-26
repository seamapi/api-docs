ARG VARIANT="18"

# Build stage for Go installation.
#
# The latest versions of Go are not available to
# install with apt-get. Instead, it's simplest to
# install Go with a multi-stage docker build.
FROM golang:1.20 AS golang

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

RUN apt-get update

# Install Python
RUN apt-get install -y python3 python3-pip python-is-python3

# Install Ruby
RUN apt-get install -y ruby ruby-dev

# Install Java
RUN apt-get install -y default-jdk

# Install PHP
RUN apt-get install -y php-cli php-xml php-mbstring
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Copy Go from the golang stage.
COPY --from=golang /usr/local/go /usr/local/go
ENV PATH="/usr/local/go/bin:${PATH}"

RUN gem install seamapi
RUN pip install seamapi --break-system-packages
RUN pip install seam --break-system-packages

USER node
WORKDIR /home/node

# Install dotnet
RUN wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh \
  && chmod +x dotnet-install.sh \
  && ./dotnet-install.sh --channel 7.0
ENV PATH="$PATH:/home/node/.dotnet"

RUN mkdir -p .config/git \
  && echo ".vscode/*" >> .config/git/ignore \
  && echo "*.code-workspace" >> .config/git/ignore \
  && echo ".history/" >> .config/git/ignore

