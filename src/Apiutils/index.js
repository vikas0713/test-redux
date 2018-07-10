import axios from 'axios';

export const getListApi = () => axios.get('http://127.0.0.1:8000/jobs/job-details/')