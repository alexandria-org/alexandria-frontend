# syntax=docker/dockerfile:1
FROM ubuntu:latest
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y spawn-fcgi nginx php7.4-fpm php7.4-curl vim wget git curl

COPY conf/nginx.dev.conf /etc/nginx/sites-enabled/default
