import express from 'express';
import bodyParser from 'body-parser';

import partyRoutes from './routes/partyRoutes';
import officeRoutes from './routes/officeRoutes';
import userRoutes from './routes/userRoutes';

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// PORT
const port = process.env.PORT || 3000;

app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/parties', partyRoutes);
app.use('/api/v1/offices', officeRoutes);
app.use('*', (req, res) => res.status(404).send({
  status: 400,
  message: 'Wrong URL, Please check it!',
}));
app.listen(port, () => console.log(`listening on port ${port}`));

export default app;
