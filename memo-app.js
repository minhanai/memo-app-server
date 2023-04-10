var { Client } = require('pg'); 

export default async (req, res) => { 
  
  const id = req.param("id");

  var client = new Client({
    user: 'postgres',
    host: 'dpg-cgc5ia64dad7acbomjqg-a.singapore-postgres.render.com',
    database: 'sample_db',
    password: 'konon1352',
    port: 5432
});
 
client.connect()

client.query('select * from t_memo where id = ' + id, (err, res) => {
  console.log(err, res);
  client.end();
}).catch((e) => console.error(e.stack));
  // res.json({ id: 1, title: '日記', content: '◆◆◆', updatedt: '2023-01-01', registdt: '2023-01-01' })
}