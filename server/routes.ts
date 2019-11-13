import {connect} from './db'
connect();

import fadelRoute from './api/fadel';
import documentsRoute from './api/documents';

import daftarRequest from './api/requestedDocs';

export default function(express) {
    express.use('/api/documents', documentsRoute);
    express.use('/api/daftarRequest', daftarRequest)
}
