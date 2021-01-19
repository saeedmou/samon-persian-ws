# Samon Persian Numbers Library

There are usefull pipes in this library that makes life easier for persian angular developers.

# Table of Contents
- [Samon Persian Numbers Library](#samon-persian-numbers-library)
- [Table of Contents](#table-of-contents)
- [Build with](#build-with)
- [Pipes](#pipes)
  - [EngToPer Pipe](#engtoper-pipe)
    - [How to use it?](#how-to-use-it)
  - [Rial Pipe](#rial-pipe)
    - [How to use it?](#how-to-use-it-1)

# Build with

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.9.

# Pipes

## EngToPer Pipe

This pipe get a string or number input value and export it to a persian string digit.

### How to use it?

In the templete: </br>
`<p>{{1234567890 | EngToPer}}</p>`</br>
Result: </br>
۱۲۳۴۵۶۷۸۹۰

## RialToToman Pipe

This pipe get Rial as a number input value and divide it by 10 and return the result as number.

### How to use it?

In the templete: </br>
`<p>{{1234567890 | RialToToman}}</p>`</br>
Result: </br>
123456789


