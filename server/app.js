import express from 'express';
import bodyParser from 'body-parser';
import config from 'dotenv';
import swagger from 'swagger-ui-express';

import partyRoutes from './routes/partyRoutes';
import officeRoutes from './routes/officeRoutes';
import userRoutes from './routes/userRoutes';
import voteRoutes from './routes/voteRoutes';
import petitionRoutes from './routes/petitionRoutes';

import swaggerDoc from '../politico_documentation';


config.config();

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// PORT
const port = process.env.PORT || 3000;
// Documentation
app.use('/docs', swagger.serve, swagger.setup(swaggerDoc));

app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/parties', partyRoutes);
app.use('/api/v1/offices', officeRoutes);
app.use('/api/v1/votes', voteRoutes);
app.use('/api/v1/petitions', petitionRoutes);

app.use('*', (req, res) => res.status(404).send({
  status: 404,
  message: 'URL NOT FOUND!',
}));
app.listen(port, () => console.log(`listening on port ${port}`));

export default app;
