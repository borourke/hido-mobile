#!/bin/bash

./gradlew ${1:-installDevDebug} --stacktrace && adb shell am start -n com.android/host.exp.exponent.MainActivity
