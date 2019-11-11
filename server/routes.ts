import fadelRoute from './api/fadel';

export default function(express) {
    express.use('/api/fadel', fadelRoute)
}