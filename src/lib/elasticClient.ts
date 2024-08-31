import { Client } from '@elastic/elasticsearch';

const client = new Client({
  node: 'http://localhost:9200', // Replace with your ElasticSearch server URL (Jujur ini aku gatau, Ko Frendy helep :D
});

export default client;
