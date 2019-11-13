import fadelRoute from './api/fadel';
import documentsRoute from './api/documents';

export default function(express) {
    express.use('/api/fadel', fadelRoute);
    express.use('/api/documents', documentsRoute);
}
