const React = require('react');
const renderToString = require("react-dom/server").renderToString;
const Leaky = require('./leaky');

const express = require('express');
const app = express();

app.get('/', function(req, res){
  for (i = 0; i < 100; i++) {
    renderToString(React.createElement(Leaky));
  }

  const memory = process.memoryUsage().rss.toString();

  res.write("<!DOCTYPE html><html><head><title>My Page</title></head><body>");
  res.write("<div id='content'>");
  res.write("current memory: ");
  res.write(memory);
  res.write("</div></body></html>");
  res.end();
});

app.listen(3000);
