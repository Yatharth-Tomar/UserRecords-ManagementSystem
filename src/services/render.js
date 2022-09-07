const axios = require('axios');
exports.warning = async(req,res)=>{
  try{
    console.log(req.query.id);
      const response = await axios.delete('http://localhost:3000/delete', {params:{ id:req.query.id }});
      return res.redirect("/");
      
  }catch(e){
      console.log(e);
  }
}
exports.home = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/allusers');
    console.log(response.data); //we have to send response for axios to work
    res.render('index', { data: response.data });
  } catch (e) {
    res.send('oops some error occured');
  }
};

exports.addUser = (req, res) => {
  res.render('addUser');
};

exports.update = async (req, res) => {
  try {
      const id = req.query.id;
    
      const resp = await axios.get('http://localhost:3000/user', {params:{ id }});
      
    res.render("update",{data:resp.data});
   
    // res.render('update', { data: resp.data });
  } catch (e) {
    console.log(e);
    res.send('error');
  }
};
