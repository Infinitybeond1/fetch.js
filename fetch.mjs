#!/usr/bin/env node

import { arch, hostname, platform, uptime } from 'node:os'
import chalk from 'chalk'

console.log(`${chalk.blue("architecture:")} ${arch()}\n${chalk.blue("hostname:")} ${hostname()}\n${chalk.blue("kernel:")} ${platform()}\n${chalk.blue("uptime:")} ${Math.round(uptime() / 60)} mins`)
