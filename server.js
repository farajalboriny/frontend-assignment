import express, { static } from 'express';
import { join } from 'path';
const app = express();
app.use(static(__dirname + '/dist/<app-name>'));
app.get('/*', function(req,res) {
res.sendFile(join(__dirname+
'/dist/assignment/index.html'));});
app.listen(process.env.PORT || 8080);