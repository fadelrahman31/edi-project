import {connect} from './db'
connect();

import daftarRequest from './api/requestedDocs';

export default function(express) {
    express.use('/api/daftarRequest', daftarRequest)
}
