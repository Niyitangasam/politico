import express from 'express';
import bodyParser from 'body-parser';

import partyRoutes from './routes/partyRoutes';
import officeRoutes from './routes/officeRoutes';

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// PORT
const port = process.env.PORT || 5000;

app.use('/api/v1/parties', partyRoutes);
app.use('/api/v1/offices', officeRoutes);
app.listen(port, () => console.log(`listening on port ${port}`));

export default app;
